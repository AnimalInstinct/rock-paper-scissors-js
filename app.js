"use strict";
const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";
const DEFAULT_PLAYER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = () => {
    let selection = prompt(`${ROCK} ${PAPER} ${SCISSORS}`,"").toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice. ${DEFAULT_PLAYER_CHOICE} chosen by default.`);
        return;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if(randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (computerChoice, playerChoice = DEFAULT_PLAYER_CHOICE) =>
    computerChoice === playerChoice 
        ?  RESULT_DRAW 
        : (computerChoice === ROCK && playerChoice === PAPER) || 
        (computerChoice === PAPER && playerChoice === SCISSORS) || 
        (computerChoice === SCISSORS && playerChoice === ROCK) 
            ? RESULT_PLAYER_WINS
            : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", function startGame(){
    if(gameIsRunning) {
        return;
    }
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const gameResult = getWinner(computerChoice, playerChoice);

    let message = `You picked ${playerChoice || DEFAULT_PLAYER_CHOICE }, computer picked ${computerChoice} so you `;

    if (gameResult === RESULT_DRAW) {
        message += "had a draw";
    } else if (gameResult === RESULT_PLAYER_WINS) {
        message += "won";
    } else {
        message += "lose";
    }

    alert(message);
    gameIsRunning(false);
});
