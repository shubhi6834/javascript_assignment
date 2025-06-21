var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
var o = ["th","st","nd","rd"];
 
 function getSuffix(rank) {
  var deg = rank % 100;
  if (deg >= 11 && deg <= 13) 
  return o[0];

  switch (rank % 10) {
    case 1: return o[1];
    case 2: return o[2];
    case 3: return o[3];
    default: return o[0];
  }
}
for (let i = 0; i < color.length; i++) {
  var rank = i + 1;
  var degree = getSuffix(rank);
  console.log(rank + degree + " choice is " + color[i] + ".");
}
