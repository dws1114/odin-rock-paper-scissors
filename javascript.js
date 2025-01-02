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
        return `It's a tie! Both chose ${humanChoice}.`;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose... paper beats rock!";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! rock beats scissors!";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose... scissors beats paper!";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! paper beats rock!";
    }
    else if (humanChoice === "scissors" && computerChoice == "rock") {
        computerScore++;
        return "You lose... rock beats scissors!";
    }
    else if (humanChoice === "scissors" && computerChoice == "paper") {
        humanScore++;
        return "You win! scissors beats rock!";
    }
    else {
        return "You must choose rock, paper, or scissors...";
    }
}

let roundOutcome = playRound(humanChoice, computerChoice);

console.log(roundOutcome);
console.log(`Score - Human:${humanScore}, Computer:${computerScore}`);