<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Array Manipulation</title>  
    <style>  
        body {  
            font-family: Arial, sans-serif;  
            margin: 20px;  
        }  
        #arrayDisplay {  
            margin-top: 20px;  
        }  
    </style>  
</head>  
<body>  
  
    <h1>Array Manipulation</h1>  
  
    <input type="text" id="itemInput" placeholder="Enter an item">  
  
    <button onclick="addItem()">Add</button>  
  
  
    <button onclick="displayItems()">Display</button>  
  
    <div id="arrayDisplay"></div>  
  
    <script>  
        let arr = [];  
  
        function addItem() {  
            const item = document.getElementById('itemInput').value;  
            if (item) {  
                arr.push(item);  
                document.getElementById('itemInput').value = '';  
                alert('Item added!');  
            } else {  
                alert('Please enter an item.');  
            }  
        }  
  
        function displayItems() {  
            const displayDiv = document.getElementById('arrayDisplay');  
            if (arr.length === 0) {  
                displayDiv.innerHTML = 'No items in the array.';  
            } else {  
                displayDiv.innerHTML = '<h3>Items in the Array:</h3><ul>';  
                arr.forEach(item => {  
                    displayDiv.innerHTML += `<li>${item}</li>`;  
                });  
                displayDiv.innerHTML += '</ul>';  
            }  
        }  
    </script>  
  
</body>  
</html> 
