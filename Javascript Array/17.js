function shuffleArray(arr) {  
    for (let i = arr.length - 1; i > 0; i--) {  
        const randomIndex = Math.floor(Math.random() * (i + 1));  
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];  
    }  
  
    return arr;  
}  
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
console.log("Original array:", array);  
const shuffledArray = shuffleArray(array);  
console.log("Shuffled array:", shuffledArray);  
