function getComputerChoice() {

    const number = Math.random();

    if ( number <= ( 1 / 3 ) ) {
        return "ROCK"
    }
    else if ( number >= ( 2 / 3 ) ) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function playOneRound( humanChoice, computerChoice ) {

    if ( humanChoice === computerChoice ) {
        return `DRAW !!`;
    }
    else if ( ( ( humanChoice === "ROCK" ) && ( computerChoice === "SCISSORS" ) ) ||
        ( ( humanChoice === "PAPER" ) && ( computerChoice === "ROCK" ) ) ||
        ( ( humanChoice === "SCISSORS" ) && ( computerChoice === "PAPER" ) ) ) {

        humanScore++;
        return `YOU WIN!!`;
    }
    else {
        computerScore++;
        return `YOU LOSE !!`;
    }
}

function displayResults( humanChoice, roundNumber ) {

    const computerChoice = getComputerChoice();
    const resultText = playOneRound( humanChoice, computerChoice )

    round.textContent = `Round : ${ roundNumber }`;
    result.textContent = resultText;
    document.body.className = `${ humanChoice } `;
    humanResult.textContent = `Your score: ${ humanScore }`;
    computerResult.textContent = `Computer score: ${ computerScore } `;

}

function handleChoice( e ) {

    displayResults( e.target.textContent, roundNumber );
    displayLastRound();
    roundNumber++;
}

function displayLastRound() {

    if ( roundNumber >= roundTotal ) {
        const finalRound = document.createElement( "div" );
        finalRound.className = "round";
        finalRound.style.marginTop = "2rem"
        finalRound.textContent = "Final score !"
        round.parentNode.insertBefore( finalRound, humanResult );
        createNewGameBtn();
        hideBtn();
        // A complement of hiding buttons
        buttons.forEach( ( button ) => {
            button.removeEventListener( "click", handleChoice );
        } );
    }
}

function createNewGameBtn() {

    const newGameBtn = document.createElement( "button" );
    newGameBtn.textContent = "New game";
    round.parentNode.appendChild( newGameBtn )
    newGameBtn.addEventListener( "click", () => location.reload() )
}

function hideBtn() {

    buttons.forEach( ( button ) => {
        button.style.display = "none";
    } );
}

function choiceBtn() {

    buttons.forEach( ( button ) => {
        button.addEventListener( "click", handleChoice );
    } );
}

let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;
const roundTotal = +prompt( "How many rounds do you want to play?", "" );
const buttons = document.querySelectorAll( "button" );
const round = document.querySelector( ".round" );
const result = document.querySelector( "#result" );
const humanResult = document.querySelector( "#human-result" );
const computerResult = document.querySelector( "#computer-result" );


if ( !roundTotal ) {
    alert( "See you soon Space Cowboy !!" );
    createNewGameBtn();
    hideBtn();
} else {
    round.textContent = "Play by clicking on a button above"
    choiceBtn();
}

