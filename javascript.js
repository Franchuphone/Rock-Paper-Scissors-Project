function getComputerChoice() {
    
    const number = Math.random();

    if (number <= (1/3)) {
        return "ROCK"
    }

    else if (number >= (2/3)) {
        return "PAPER";
    }

    else {
        return "SCISSORS";
    }
}

function getHumanChoice () {

    let choice = prompt("Rock or Paper or Scissors?","");

   // Stops function if click on prompt's cancel button

    if (!choice) {
        return
    }
    
    else {

        // Allows every lower or upper case variants of the rock/paper/scissors

        choice = choice.toUpperCase();

        if (choice === "ROCK" || 
            choice === "PAPER" || 
            choice === "SCISSORS") {
                return choice;
            }

        // Forces the use of the correct words rock/paper/scissors

        else {
            alert ("Not a correct value, please use only Rock or Paper or Scissors");
            return(getHumanChoice())
        }
    }
}

function playOneRound (roundNumber) {

    if ( humanChoice === computerChoice ) {
            alert (`Round : ${roundNumber}
        DRAW !!
        Your score : ${humanScore}
        Computer score : ${computerScore}`)
    }

    else if (((humanChoice === "ROCK") && (computerChoice === "SCISSORS")) ||
            ((humanChoice === "PAPER") && (computerChoice === "ROCK")) ||
            ((humanChoice === "SCISSORS") && (computerChoice === "PAPER"))) {

            humanScore += 1;
            alert (`Round : ${roundNumber}
        YOU WIN !!
        Your score : ${humanScore}
        Computer score : ${computerScore}`);

        }

    else {
        computerScore += 1;
        alert (`Round : ${roundNumber}
        YOU LOSE !!
        Your score : ${humanScore}
        Computer score : ${computerScore}`);
        }
}

// Initializes all needed variables

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";
let roundsNumber = +prompt("How many rounds do you want to play?", "") 

// Let's play the game !!

for (let i=0 ; i < roundsNumber ; i++) {

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    // Stops iterations if click on prompt's cancel button

    if (humanChoice === undefined) {
        break;
    }

    else {
        playOneRound (i+1)
    }
}

// Displays goodbye message if any prompt's cancel button is clicked
// Displays goodbye message also when user don't choose any rounds or choose 0 round

(!roundsNumber || !humanChoice) ? alert ("See you soon Space Cowboy !!") : 
    alert (`FINAL SCORE 
        Your score : ${humanScore}
        Computer score : ${computerScore}`) ;