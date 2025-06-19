<!DOCTYPE html> 
<html> 
<head> 
<meta charset="utf-8" /> 
<title>Get Link Attributes</title> 
</head> 
<body> 
<p><a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" 
href="http://www.w3resource.com/">w3resource</a></p> 
<button onclick="getAttributes()">Click here to get attributes value</button> 
<script> 
function getAttributes() { 
var link = document.getElementById("w3r"); 
var href = link.getAttribute("href"); 
var hreflang = link.getAttribute("hreflang"); 
var rel = link.getAttribute("rel"); 
var target = link.getAttribute("target"); 
var type = link.getAttribute("type"); 
alert("href: " + href + "\nhreflang: " + hreflang + "\nrel: " + rel + "\ntarget: " + target + "\ntype: " 
+ type); 
} 
</script> 
</body> 
</html> 
