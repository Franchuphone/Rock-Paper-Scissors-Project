// Function to get the computer choice

function getComputerChoice() {

    // Choose a number between 0 and 1

    let number = Math.random();

    // Make a triple choice around this number
    // IF less than 0.33 return Rock

    if (number <= 0.33) {
        return "ROCK"
    }

    // IF less than 0.66 return Paper

    else if ((number >= 0.33) && (number <=0.66)) {
        return "PAPER";
    }

    // IF more than 0.66 return Scissors

    else {
        return "SCISSORS";
    }
}

// Function to get the human choice

function getHumanChoice () {

    // Prompt user for choice

    let choice = prompt("Rock or Paper or Scissors?","");

   // If user cancel prompt, stop function

    if (choice == null) {
        return
    }

    //Else capitalize all the word
    
    else {
        choice = choice.toUpperCase();

        // If choice is Rock or Paper or Scissors return choice

        if (choice === "ROCK" || 
            choice === "PAPER" || 
            choice === "SCISSORS") {
                return choice;
            }

        // ELse prompt again

        else {
            alert ("Not a correct value, please use only Rock or Paper or Scissors");
            return(getHumanChoice())
        }
    }
}

// Function to play a single round

function playRound ( humanChoice , computerChoice , roundNumber) {

    // Compare the human choice to computer choice
    // IF human same as computer 

    if ( humanChoice === computerChoice ) {

        //     Return Draw
        alert (`DRAW !!
            Your score : ${humanScore}
            Computer score : ${computerScore}`)
    }

    // Else if human is Rock and computer is Scissors
    //     Or human is Paper and computer is Rock
    //     Or human is Scissors and computer is Paper

    else if (((humanChoice === "ROCK") && (computerChoice === "SCISSORS")) ||
            ((humanChoice === "PAPER") && (computerChoice === "ROCK")) ||
            ((humanChoice === "SCISSORS") && (computerChoice === "PAPER"))) {

            //     Increment human score

            humanScore += 1;

            //     Return Win

            alert (`Round : ${roundNumber}
                YOU WIN !!
                Your score : ${humanScore}
                Computer score : ${computerScore}`);

        }

    // Else return Lose
    // Increment computer score

    else {
        computerScore += 1;
        alert (`Round ${roundNumber}
            YOU LOSE !!
            Your score : ${humanScore}
            Computer score : ${computerScore}`);
        }
}

// Declare variables for players score

let humanScore = 0;
let computerScore = 0;

//Declare variables for players choices

let humanChoice = "";
let computerChoice = "";

// Declare variable asking player for the number of rounds

let rounds = +prompt("How many rounds do you want to play?", "") 

// Play 1 round x times defined by user

for (let i=0 ; i < rounds ; i++) {

    // Allocate choices functions returns to players choice variables

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    // If user cancel election prompt, stop loop

    if (humanChoice === undefined) {
        break;
    }

    //Else keep playing

    else {
        playRound (humanChoice,computerChoice,i+1)
    }
}

// If users cancel any prompt, say goodbye

if (rounds == 0 || humanChoice === undefined) {
        alert ("See you soon Space Cowboy !!")
    }
    
// Else display the final score

else {
    alert (`FINAL SCORE 
        Your score : ${humanScore}
        Computer score : ${computerScore}`) ;
    }
