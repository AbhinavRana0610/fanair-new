<?php
/* ============================================================
   General send-mail.php - kisi bhi website par use karein
   Har nayi website par sirf niche wala CONFIG bharein.
   Response: "success" ya "error" (JS isi text ko check karta hai)
   ============================================================ */

// ---------------- CONFIG ----------------
$clientEmail = "saurabh.joshi@fanair.in";   // ZAROORI: client ka email jahan enquiry jayegi.
$siteName    = "Fan Air India";            // Subject mein aayega.
$bccEmails   = "anandkpp123@gmail.com, promopactmarketing@gmail.com";   // Optional BCC.
$fromEmail   = "";                         // Khali = noreply@website-domain apne aap
// ----------------------------------------

error_reporting(E_ALL);
ini_set('display_errors', 0);   // Errors response mein na aayein, warna "success" check fail hoga

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit;
}

// CONFIG bhara nahi gaya ya email galat hai - galat jagah mail bhejne se behtar hai yahin ruk jana
if (!filter_var($clientEmail, FILTER_VALIDATE_EMAIL)) {
    error_log("send-mail.php: \$clientEmail CONFIG mein set nahi hai ya galat hai");
    echo "error";
    exit;
}

// Spam bots ke liye honeypot: form mein ek chhupi field name="website" rakhein (screen se bahar).
// Insaan ise kabhi nahi bharega; bot bhar de to chupchap "success" bol do
if (!empty($_POST['website'])) {
    echo "success";
    exit;
}

// Website ka domain - siteName aur From ke default ke liye
$host = preg_replace('/[^a-z0-9.-]/i', '', $_SERVER['HTTP_HOST'] ?? 'localhost');
$host = preg_replace('/^www\./i', '', $host);

if ($siteName === '') {
    $siteName = $host;
}

// From: website ke apne domain se hona chahiye, warna mail spam mein jata hai
if ($fromEmail === '') {
    $fromEmail = "noreply@$host";
}

// Field names ke sundar labels (jo yahan nahi hai uska label apne aap ban jayega)
$labels = [
    'whatsappName'   => 'Name',
    'whatsappMobile' => 'Mobile',
    'companyName'    => 'Company Name',
    'company'        => 'Company Name',
    'name'           => 'Name',
    'email'          => 'Email',
    'mobile'         => 'Mobile',
    'phone'          => 'Mobile',
    'productService' => 'Product/Service',
    'product'        => 'Product/Service',
    'message'        => 'Message',
];

// Ye fields email body mein nahi jayengi
$skipFields = ['formSource', 'website'];

// Kaunsa form aaya - formSource bheja ho to wahi, warna andaza
if (!empty($_POST['formSource'])) {
    $formType = trim($_POST['formSource']);
} elseif (isset($_POST['whatsappName']) || isset($_POST['whatsappMobile'])) {
    $formType = "WhatsApp Quick Contact Form";
} elseif (isset($_POST['email'])) {
    $formType = "Email Technical Contact Form";
} else {
    $formType = "Website Lead Form";
}

// Saari fields jama karo
$lines = [];
$hasContact = false;
foreach ($_POST as $key => $value) {
    if (in_array($key, $skipFields, true)) continue;

    // Plain text mail hai, isliye strip_tags nahi
    $value = is_array($value) ? implode(', ', $value) : $value;
    $value = trim($value);
    if ($value === '') continue;

    if (isset($labels[$key])) {
        $label = $labels[$key];
    } else {
        $label = ucwords(trim(preg_replace('/([a-z])([A-Z])|[_-]+/', '$1 $2', $key)));
    }

    if (preg_match('/mobile|phone|email/i', $key)) {
        $hasContact = true;
    }

    // Lamba message alag line mein, baaki ek line mein
    if (strpos($value, "\n") !== false || strlen($value) > 80) {
        $lines[] = "\n$label:\n$value";
    } else {
        $lines[] = "$label: $value";
    }
}

// Khali ya bina mobile/email wala form reject
if (empty($lines) || !$hasContact) {
    echo "Invalid form submission.";
    exit;
}

// Indian time
date_default_timezone_set('Asia/Kolkata');
$currentTime = date("d-m-Y H:i:s");

$subject = "$siteName Inquiry - $currentTime";

$body  = "$formType Submission:\n\n";
$body .= implode("\n", $lines);
$body .= "\n\n----\nSubmitted: $currentTime";
$body .= "\nPage: " . ($_SERVER['HTTP_REFERER'] ?? 'N/A');

// Reply-To: sirf valid email hi header mein jaye (header injection se bachav)
$visitorEmail = trim($_POST['email'] ?? '');
$replyTo = filter_var($visitorEmail, FILTER_VALIDATE_EMAIL) ? $visitorEmail : $clientEmail;

$headers  = "From: $siteName Website <$fromEmail>\r\n";
$headers .= "Reply-To: $replyTo\r\n";
if ($bccEmails !== '') {
    $headers .= "BCC: $bccEmails\r\n";
}
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Backup lead storage
$logDir = __DIR__ . '/inquiries_backup';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0755, true);
    @file_put_contents($logDir . '/.htaccess', "Deny from all\n");
}
$logEntry = "[$currentTime] [$formType]\n" . implode("\n", $lines) . "\n----------------------------------------\n\n";
@file_put_contents($logDir . '/leads.log', $logEntry, FILE_APPEND | LOCK_EX);

// Mail transmission
$mailSent = @mail($clientEmail, $subject, $body, $headers);

// Return success if mail was sent, or on local dev environment
$isLocal = in_array($_SERVER['REMOTE_ADDR'] ?? '', ['127.0.0.1', '::1'], true) || (strpos($_SERVER['HTTP_HOST'] ?? '', 'localhost') !== false);

if ($mailSent || $isLocal) {
    echo "success";
} else {
    echo "error";
}
