<!DOCTYPE html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Change Background Color</title> 
</head> 
<body> 
<p id="myParagraph">This is a paragraph.</p> 
<button onclick="changeBackgroundColor()">Change Background Color</button> 
<script> 
function changeBackgroundColor() { 
document.getElementById('myParagraph').style.backgroundColor = 'green'; 
} 
</script> 
</body> 
</html>
