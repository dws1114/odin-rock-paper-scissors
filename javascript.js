const computerChoiceNum = Math.random();

function getComputerChoice(num) {
    if (num < 0.34) {
        return "rock";
    }
    else if (num < 0.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("What is your choice: Rock, Paper, or Scissors? ");
    return humanChoice;
}

const computerChoice = getComputerChoice(computerChoiceNum);
const humanChoice = getHumanChoice().toLowerCase();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose... paper beats rock!");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! rock beats scissors!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose... scissors beats paper!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! paper beats rock!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice == "rock") {
        console.log("You lose... rock beats scissors!");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice == "paper") {
        console.log("You win! scissors beats rock!");
        humanScore++;
    }
    else {
        console.log("You must choose rock, paper, or scissors...")
    }
}

playRound(humanChoice, computerChoice);