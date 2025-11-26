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

function getHumanChoice() {

    buttons.forEach( ( button ) => {
        button.addEventListener( "click", handleHumanChoice );
    } );
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

function handleHumanChoice( e ) {

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
        removeExitBtn();
        createNewGameBtn();
        hideBtn();
        // Useful if hideBtn removed
        buttons.forEach( ( button ) => {
            button.removeEventListener( "click", handleHumanChoice );
        } );
    }
}

function createNewGameBtn() {

    const newGameBtn = document.createElement( "button" );
    newGameBtn.textContent = "New game";
    newGameBtn.className += "button-green";
    round.parentNode.appendChild( newGameBtn )
    newGameBtn.addEventListener( "click", () => location.reload() )
}

function hideBtn() {

    container.style.visibility = "hidden";
}

function showBtn() {

    container.style.visibility = "visible";
}

function filterIncorrectRounds() {

    inputBox.remove();
    inputButton.remove();
    if ( roundTotal <= 0 ) {
        round.textContent = "You need to select a correct amount";
        removeExitBtn();
        createNewGameBtn();
    } else {
        round.textContent = "Play by clicking on a button above";
        showBtn();
        getHumanChoice();
    }
}

function startGame() {
    startButton.addEventListener( "click", () => {
        startButton.remove();
        round.textContent = "How many rounds you want to play?"
        createHumanInputBox();
        createExitBtn();
    } );
}

function createHumanInputBox() {

    const inputDiv = document.createElement( "div" );
    inputDiv.className = "container"
    inputBox.setAttribute( "type", "number" );
    inputBox.setAttribute( "placeholder", "0" );
    inputBox.setAttribute( "name", "roundTotal" )
    inputBox.className = "box round shadow-box"
    inputBox.style.display = "block"
    inputButton.setAttribute( "type", "submit" );
    inputButton.setAttribute( "value", "Play !" );
    inputButton.setAttribute( "name", "roundTotal" )
    inputButton.className = "round button button:hover button-green";

    lastDiv.parentElement.appendChild( inputDiv );
    inputDiv.appendChild( inputBox );
    inputDiv.appendChild( inputButton );
    inputBox.focus();
    inputButton.addEventListener( "click", () => {
        roundTotal = inputBox.value;
        filterIncorrectRounds();
    } )
}

function createExitBtn() {

    const exitBtn = document.createElement( "button" );
    const exitDiv = document.createElement( "div" );
    exitBtn.textContent = "End Game";
    exitBtn.className += "button-green";
    exitDiv.className = "container"
    container.parentNode.appendChild( exitDiv )
    exitDiv.appendChild( exitBtn );
    exitBtn.addEventListener( "click", () => location.reload() )
}

function removeExitBtn() {
    document.body.lastElementChild.remove();
}

let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;
let roundTotal;
const buttons = document.querySelectorAll( "button" );
const round = document.querySelector( ".round" );
const result = document.querySelector( "#result" );
const humanResult = document.querySelector( "#human-result" );
const computerResult = document.querySelector( "#computer-result" );
const startButton = document.querySelector( "#start" )
const hideButton = document.querySelectorAll( "#hide" );
const lastDiv = document.querySelector( "div:last-of-type" );
const inputBox = document.createElement( "input" );
const inputButton = document.createElement( "input" );
const container = document.querySelector( ".container" )

hideBtn();
startGame();

