$files = @("c:\xampp\htdocs\fan\index.html", "c:\xampp\htdocs\fan\fanair\index.html")

foreach ($file in $files) {
    if (-not (Test-Path $file)) { continue }
    $content = Get-Content $file -Raw
    
    $usedAvifs = New-Object System.Collections.Generic.HashSet[string]
    $images = [regex]::Matches($content, '<img[^>]+src=["'']([^"'']+)["'']')
    foreach ($match in $images) {
        $src = $match.Groups[1].Value
        if ($src -match 'img/newimg/(\d+)\.avif') {
            [void]$usedAvifs.Add($src)
        }
    }
    
    $seen = New-Object System.Collections.Generic.HashSet[string]
    $nextId = 2
    
    $evaluator = [System.Text.RegularExpressions.MatchEvaluator] {
        param([System.Text.RegularExpressions.Match]$m)
        $prefix = $m.Groups[1].Value
        $src = $m.Groups[2].Value
        $suffix = $m.Groups[3].Value
        
        if ($src -match 'logo') {
            return $m.Value
        }
        
        if ($seen.Contains($src)) {
            while ($usedAvifs.Contains("img/newimg/$nextId.avif")) {
                $nextId++
            }
            $newSrc = "img/newimg/$nextId.avif"
            [void]$usedAvifs.Add($newSrc)
            [void]$seen.Add($newSrc)
            return "$prefix$newSrc$suffix"
        } else {
            [void]$seen.Add($src)
            return $m.Value
        }
    }
    
    $regex = New-Object System.Text.RegularExpressions.Regex('(<img[^>]+src=["''])(([^"'']+)["''])')
    # wait, the regex was '(<img[^>]+src=["''])([^"'']+)(["''])'
    # we need to be careful with capturing groups in powershell inline string    $regex = New-Object System.Text.RegularExpressions.Regex('(<img[^>]+src=["''])([^"'']+)(["''])')
    $newContent = $regex.Replace($content, $evaluator)
    
    if ($content -ne $newContent) {
        Set-Content -Path $file -Value $newContent -NoNewline
        Write-Host "Updated $file"
    }
}
