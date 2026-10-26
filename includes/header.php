<?php
/**
 * Global Header Include for Fan Air India
 */
$pageTitle = isset($pageTitle) ? $pageTitle : "Fan Air India Pvt. Ltd. | Leading Industrial HVAC Manufacturer";
$pageDescription = isset($pageDescription) ? $pageDescription : "Fan Air India Pvt. Ltd. is a premier manufacturer of high-efficiency air management equipment, centrifugal fans, axial flow ventilation systems, jet fans, and inline fans.";
$pageKeywords = isset($pageKeywords) ? $pageKeywords : "HVAC fans, centrifugal fans, axial fans, jet fans, inline fans, Fan Air India, industrial ventilation";
$activeNav = isset($activeNav) ? $activeNav : "home";
$basePath = isset($basePath) ? $basePath : "";
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- SEO Meta Tags -->
  <title><?php echo htmlspecialchars($pageTitle); ?></title>
  <meta name="description" content="<?php echo htmlspecialchars($pageDescription); ?>">
  <meta name="keywords" content="<?php echo htmlspecialchars($pageKeywords); ?>">
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="<?php echo $basePath; ?>favicon.ico">
  <link rel="icon" type="image/png" href="<?php echo $basePath; ?>favicon.png">
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <!-- AOS CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- Master Stylesheet -->
  <link rel="stylesheet" href="<?php echo $basePath; ?>assets/css/style.css?v=<?php echo time(); ?>">
</head>

<body>
  <!-- ═══════════════════════════════════════
       TOP INFORMATION BAR
       ═══════════════════════════════════════ -->
  <div class="topbar">
    <div class="container">
      <div style="display: flex; gap: 24px; align-items: center;">
        <a href="tel:+919811347199" class="topbar__item" title="Call Fan Air India: +91-9811347199">
          <svg viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span>+91-9811347199</span>
        </a>
        <a href="mailto:saurabh.joshi@fanair.in" class="topbar__item" title="Email Fan Air India: saurabh.joshi@fanair.in">
          <svg viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <span>saurabh.joshi@fanair.in</span>
        </a>
      </div>
      <div style="display: flex; gap: 16px; align-items: center;">
        <span style="color: var(--accent-cyan);">/// ESTD 2016</span>
      </div>
    </div>
  </div>

  <!-- ═══════════════════════════════════════
       GLASS STICKY NAVBAR
       ═══════════════════════════════════════ -->
  <nav class="navbar">
    <div class="container">
      <a href="<?php echo $basePath; ?>index.php" class="navbar__logo" title="Fan Air India - Industrial Air Handling & Ventilation Systems">
        <img src="<?php echo $basePath; ?>img/fanair-logo.avif" alt="Fan Air India Logo" title="Fan Air India Logo">
      </a>
      <div class="navbar__links">
        <a href="<?php echo $basePath; ?>index.php" class="navbar__link <?php echo $activeNav === 'home' ? 'active' : ''; ?>" title="Fan Air India Home">Home</a>
        <a href="<?php echo $basePath; ?>company-profile.php" class="navbar__link <?php echo $activeNav === 'company-profile' ? 'active' : ''; ?>" title="About Fan Air India Company Profile">Company Profile</a>
        
        <div class="nav-dropdown">
          <a href="<?php echo $basePath; ?>product.php" class="navbar__link nav-dropdown-toggle <?php echo $activeNav === 'products' ? 'active' : ''; ?>" title="Our Ventilation & Air Handling Products">
            Our Products <i class="fas fa-chevron-down" style="font-size: 11px; margin-left: 4px;"></i>
          </a>
          <div class="nav-dropdown-menu">
            <a href="<?php echo $basePath; ?>forward-curved-centrifugal-fan.php" title="Forward Curved Centrifugal Fans"><i class="fas fa-fan" style="margin-right:8px; color:#D9251D;"></i> Forward Curved Centrifugal Fans</a>
            <a href="<?php echo $basePath; ?>backward-inclined-centrifugal-fan.php" title="Backward Inclined Centrifugal Fans"><i class="fas fa-wind" style="margin-right:8px; color:#D9251D;"></i> Backward Inclined Centrifugal Fans</a>
            <a href="<?php echo $basePath; ?>axial-fan.php" title="Axial Flow Ventilation Fans"><i class="fas fa-arrows-alt-v" style="margin-right:8px; color:#D9251D;"></i> Axial Fans</a>
            <a href="<?php echo $basePath; ?>jet-fans.php" title="Impulse Jet Ventilation Fans"><i class="fas fa-fighter-jet" style="margin-right:8px; color:#D9251D;"></i> Jet Fans</a>
            <a href="<?php echo $basePath; ?>fan-section.php" title="Air Handling Unit Fan Sections"><i class="fas fa-cubes" style="margin-right:8px; color:#D9251D;"></i> Fans Section</a>
            <a href="<?php echo $basePath; ?>inline-fan.php" title="Acoustic Inline Ventilation Fans"><i class="fas fa-compress-arrows-alt" style="margin-right:8px; color:#D9251D;"></i> Inline Fans</a>
            <a href="<?php echo $basePath; ?>scrubbers.php" title="Industrial Dry and Wet Scrubbers"><i class="fas fa-filter" style="margin-right:8px; color:#D9251D;"></i> Dry/Wet Scrubbers</a>
            <a href="<?php echo $basePath; ?>smoke-exhaust-unit.php" title="Emergency Smoke Exhaust Units"><i class="fas fa-smog" style="margin-right:8px; color:#D9251D;"></i> Smoke Exhaust Unit</a>
            <a href="<?php echo $basePath; ?>pre-fabricated-duct.php" title="Pre-Fabricated Industrial Air Ducts"><i class="fas fa-square" style="margin-right:8px; color:#D9251D;"></i> Pre Fabricated Duct</a>
            <a href="<?php echo $basePath; ?>hvls-fans.php" title="High-Volume Low-Speed HVLS Fans"><i class="fas fa-sync-alt" style="margin-right:8px; color:#D9251D;"></i> HVLS Fans</a>
            <a href="<?php echo $basePath; ?>sound-attenuator.php" title="Acoustic HVAC Sound Attenuators"><i class="fas fa-volume-mute" style="margin-right:8px; color:#D9251D;"></i> Sound Attenuator</a>
            <div class="dropdown-divider"></div>
            <a href="<?php echo $basePath; ?>product.php" style="font-weight: 700; color: #D9251D;" title="View Complete Product Catalog"><i class="fas fa-th-large" style="margin-right:8px;"></i> View All Products &rarr;</a>
          </div>
        </div>

        <a href="<?php echo $basePath; ?>our-projects.php" class="navbar__link <?php echo $activeNav === 'projects' ? 'active' : ''; ?>" title="Fan Air Industrial Projects & Clients">Our Projects</a>
        <a href="<?php echo $basePath; ?>contact.php" class="navbar__link <?php echo $activeNav === 'contact' ? 'active' : ''; ?>" title="Contact Fan Air India Technical Support">Contact us</a>
      </div>
      <a href="<?php echo $basePath; ?>fanair-catalogue.pdf" download class="btn-cyber btn-cyber--primary" style="padding: 10px 24px;" title="Download Product Catalogue PDF">Download Brochure</a>
      <div class="navbar__hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
        <div class="navbar__mobile" id="mobile-menu">
      <a href="<?php echo $basePath; ?>index.php" title="Home">Home</a>
      <a href="<?php echo $basePath; ?>company-profile.php" title="Company Profile">Company Profile</a>
      <div class="mobile-dropdown">
        <div class="mobile-dropdown-toggle">
          <a href="<?php echo $basePath; ?>product.php" title="Our Products">Our Products</a>
          <i class="fas fa-chevron-down mobile-dropdown-arrow"></i>
        </div>
        <div class="mobile-dropdown-menu">
          <a href="<?php echo $basePath; ?>forward-curved-centrifugal-fan.php" title="Forward Curved Centrifugal Fans"><i class="fas fa-fan"></i> Forward Curved Centrifugal Fans</a>
          <a href="<?php echo $basePath; ?>backward-inclined-centrifugal-fan.php" title="Backward Inclined Centrifugal Fans"><i class="fas fa-wind"></i> Backward Inclined Centrifugal Fans</a>
          <a href="<?php echo $basePath; ?>axial-fan.php" title="Axial Flow Fans"><i class="fas fa-arrows-alt-v"></i> Axial Fans</a>
          <a href="<?php echo $basePath; ?>jet-fans.php" title="Jet Fans"><i class="fas fa-fighter-jet"></i> Jet Fans</a>
          <a href="<?php echo $basePath; ?>fan-section.php" title="Fans Section"><i class="fas fa-cubes"></i> Fans Section</a>
          <a href="<?php echo $basePath; ?>inline-fan.php" title="Inline Fans"><i class="fas fa-compress-arrows-alt"></i> Inline Fans</a>
          <a href="<?php echo $basePath; ?>scrubbers.php" title="Dry/Wet Scrubbers"><i class="fas fa-filter"></i> Dry/Wet Scrubbers</a>
          <a href="<?php echo $basePath; ?>smoke-exhaust-unit.php" title="Smoke Exhaust Unit"><i class="fas fa-smog"></i> Smoke Exhaust Unit</a>
          <a href="<?php echo $basePath; ?>pre-fabricated-duct.php" title="Pre Fabricated Duct"><i class="fas fa-square"></i> Pre Fabricated Duct</a>
          <a href="<?php echo $basePath; ?>hvls-fans.php" title="HVLS Fans"><i class="fas fa-sync-alt"></i> HVLS Fans</a>
          <a href="<?php echo $basePath; ?>sound-attenuator.php" title="Sound Attenuator"><i class="fas fa-volume-mute"></i> Sound Attenuator</a>
          <a href="<?php echo $basePath; ?>product.php" class="mobile-view-all" title="View All Products"><i class="fas fa-th-large"></i> View All Products &rarr;</a>
        </div>
      </div>
      <a href="<?php echo $basePath; ?>our-projects.php" title="Our Projects">Our Projects</a>
      <a href="<?php echo $basePath; ?>contact.php" title="Contact Us">Contact us</a>
      <a href="<?php echo $basePath; ?>fanair-catalogue.pdf" download title="Download Brochure">Download Brochure</a>
    </div>
  </nav>

  <main id="main-content">
