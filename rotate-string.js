function rotateStringRight(str){
  let rotatedString = str;
setInterval(() => {
  rotatedString = rotatedString.slice(-1) + rotatedString.slice(0, -1);
  console.log(rotatedString);
}, 1000);
}
rotateStringRight("w3resource");
