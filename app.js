let maximum = parseInt (prompt ("Enter your maximum number"));
while (!maximum){
    maximum = parseInt (prompt ("Enter a valid number"));
}
const targetNum = Math.floor(Math.random() * maximum) +1;
console.log(targetNum);

let guess = parseInt (prompt ("Enter your first guess"));
let attempts = 1

while (guess !== targetNum) {
    attempts+=1;
    if (guess > targetNum) {
        guess = parseInt (prompt ("Number too high! Make another guess"))
    } else{
        guess = parseInt (prompt ("Your number is too low! Make another guess"))
    }
}
console.log(`Correct! You have attempt ${attempts} guesses`)