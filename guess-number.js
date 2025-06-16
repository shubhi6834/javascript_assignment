const numberRandom = Math.floor(Math.random() * 10) + 1;
const guess = parseInt(prompt("Guess the number between 1 and 10: "));
if (guess === numberRandom) {
  alert("Good work!");
} else {
  alert('Not matched! The correct number was ${randomNumber}.');
}
//console.log(guess === numberRandom ? "Good Work" : "Not matched. The number was " + numberRandom);
