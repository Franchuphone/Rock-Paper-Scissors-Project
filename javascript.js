// Function toget the computer choice

function getComputerChoice() {

    // Choose a number between 0 and 1

    let number = Math.random();
    let choice = "";

    // Make a triple choice around this number
    // IF less than 0.33 return Rock

    if (number <= 0.33) {
        choice = "Rock";
        return choice
    }

    // IF less than 0.66 return Paper

    else if ((number >= 0.33) && (number <=0.66)) {
        choice = "Paper";
        return choice;
    }

    // IF more than 0.66 return Scissors

    else {
        choice = "Scissors";
        return choice;
    }
}

// Function to get the human choice

function getHumanChoice () {

    // Prompt the user of choice

    let choice = prompt("Rock or Paper or Scissors?","");

    // Capitalize first letter of human response

    choice = choice.charAt(0).toUpperCase() + choice.slice(1); 

    // If choice is Rock or Paper or Scissors return choice

    if (choice === "Rock" || 
        choice === "Paper" || 
        choice === "Scissors") {
            return choice;
        }

    // ELse propmpt again

    else {
        alert ("Not a correct value, please use only Rock or Paper or Scissors");
        return(getHumanChoice())
    }
}

// Declare variables for players score

let humanScore = 0;
let computerScore = 0;


// Function to play a single round

function playRound ( humanChoice , computerChoice ) {

    // Compare the human choice to computer choice
    // IF human same as computer 

    if ( humanChoice === computerChoice ) {

        //     Return Draw
        alert (`DRAW !!
            Your score : ${humanScore}
            Computer score : ${computerScore}`)
    }

    // Else if human is Rock and computer is Scissors
    //     Or human is Paper and conputer is Rock
    //     Or human is Scissors and computer is Paper

    else if (((humanChoice === "Rock") && (computerChoice === "Scissors")) ||
            ((humanChoice === "Paper") && (computerChoice === "Rock")) ||
            ((humanChoice === "Scissors") && (computerChoice === "Paper"))) {

            //     Increment human score

            humanScore += 1;

            //     Return Win

            alert (`YOU WIN !!
                Your score : ${humanScore}
                Computer score : ${computerScore}`);

        }

    // Else return Lose
    // Increment computer score

    else {
        computerScore += 1;
        alert (`YOU LOSE !!
            Your score : ${humanScore}
            Computer score : ${computerScore}`);
        }
}

let humanChoice = "";
let computerChoice = "";

// Function to play game 5 rounds

for (let i=0 ; i < 5 ; i++) {

    // Allocate variables to the choices functions

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    playRound (humanChoice,computerChoice)

    // console.log (humanChoice)
    // console.log (computerChoice)
}


