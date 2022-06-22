let maximum = parseInt (prompt ("Enter your maximum number"));
while (!maximum){
    maximum = parseInt (prompt ("Enter a valid number"));
}
const targetNum = Math.floor(Math.random() * maximum) +1;
console.log(targetNum);

let guess = parseInt (prompt ("Enter your first guess"));
let attempts = 1

while (parseInt (guess) !== targetNum) {
    if (guess === 'q') break;
    attempts+=1;
    if (guess > targetNum) {
        guess = prompt ("Number too high! Make another guess")
    } else{
        guess = prompt ("Your number is too low! Make another guess")
    }
}

if (guess === 'q') {
    console.log ("You have quitted")
}else{

console.log("You win!")
console.log(`Correct! You have attempt ${attempts} guesses`)
}