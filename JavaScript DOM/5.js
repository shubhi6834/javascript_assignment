<!DOCTYPE html> 
<html> 
<head> 
<meta charset="utf-8" /> 
<title>Insert row in a table - w3resource</title> 
<script> 
function insert_Row() { 
var table = document.getElementById("sampleTable"); 
var row = table.insertRow(-1);  
var cell1 = row.insertCell(0); 
var cell2 = row.insertCell(1); 
cell1.innerHTML = "New cell1"; 
cell2.innerHTML = "New cell2"; 
} 
</script> 
</head> 
<body> 
<table id="sampleTable" border="1"> 
<tr><td>Row1 cell1</td> 
<td>Row1 cell2</td></tr> 
<tr><td>Row2 cell1</td> 
<td>Row2 cell2</td></tr> 
</table><br> 
<input type="button" onclick="insert_Row()" value="Insert row"> 
</body> 
</html>
