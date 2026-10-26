<!DOCTYPE html>
<html>
<head><title>Thumb Test</title></head>
<body>
<h3>Test 1: Plain img</h3>
<img src="img/newimg/8.avif" width="80" height="80" style="border:1px solid red;">

<h3>Test 2: Div with aspect-ratio + img 100%</h3>
<div style="width:80px; aspect-ratio:1; overflow:hidden; border:1px solid blue; background:#f0f0f0;">
    <img src="img/newimg/8.avif" width="451" height="455" style="width:100%;height:100%;object-fit:cover;">
</div>

<h3>Test 3: Div with position:relative + img absolute</h3>
<div style="width:80px; aspect-ratio:1; overflow:hidden; border:1px solid green; background:#f0f0f0; position:relative;">
    <img src="img/newimg/8.avif" width="451" height="455" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">
</div>

<h3>Test 4: Div with fixed height + img 100%</h3>
<div style="width:80px; height:80px; overflow:hidden; border:1px solid orange; background:#f0f0f0;">
    <img src="img/newimg/8.avif" width="451" height="455" style="width:100%;height:100%;object-fit:cover;">
</div>
</body>
</html>
