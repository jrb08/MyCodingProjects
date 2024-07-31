const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;//produces a random number between the set variables. Remember Math.floor truncates Math.random;to a whole number.

console.log(answer);
let attempts = 0; //counts number of attempts
let guess; //users guess variable
let running = true; //exit loop variable by way of boolean variable "running"

while(running){
    
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    console.log(typeof guess, guess);
    // Check if the user input is valid or not
    if(isNaN(guess)){
        window.alert("You didn't enter a valid number!");
    }
        else if(guess < minNum || guess > maxNum){

        window.alert("Please pick a number between 1 - 10")
        }
    else{
        attempts++ 
        if(guess < answer) {
        window.alert("Too Low! Try again.");
    }
        else if(guess > answer){
                window.alert("Too High! Try Again.");
            }
            else{
                window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;
            }
        }

    
}