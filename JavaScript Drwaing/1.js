<!DOCTYPE html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Draw Rectangle</title> 
</head> 
<body> 
<canvas id="myCanvas" width="500" height="500" style="border:1px solid 
#000000;"></canvas> 
<script> 
window.onload = function() { 
var canvas = document.getElementById('myCanvas'); 
var context = canvas.getContext('2d'); 
context.fillStyle = 'red'; 
context.fillRect(50, 50, 200, 100); 
} 
</script> 
</body> 
</html>
