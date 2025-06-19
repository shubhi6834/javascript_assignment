<!DOCTYPE html> 
<html> 
<head> 
<meta charset="utf-8" /> 
<title>JS DOM paragraph style</title> 
</head> 
<body> 
<p id="text">JavaScript Exercises - w3resource</p> 
<div> 
<button id="jsstyle" onclick="js_style()">Style</button> 
</div> 
<script> 
function js_style() { 
var paragraph = document.getElementById('text'); 
paragraph.style.fontSize = '30px'; 
paragraph.style.color = 'green'; 
paragraph.style.fontWeight = 'bold'; 
paragraph.style.textAlign = 'center'; 
} 
</script> 
</body> 
</html>  
