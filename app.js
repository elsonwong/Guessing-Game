let maximum = parseInt (prompt ("Enter your maximum number"));
while (!maximum){
    maximum = parseInt (prompt ("Enter a valid number"));
}
const targetNum = Math.floor(Math.random() * maximum) +1;
console.log(targetNum);

let guess = parseInt (prompt ("Enter your first guess"));

while (guess !== targetNum) {
    if (guess > targetNum) {
        guess = parseInt (prompt ("Number too high! Make another guess"))
    } else{
        guess = parseInt (prompt ("Your number is too low! Make another guess"))
    }
}
console.log("You guessed it!")