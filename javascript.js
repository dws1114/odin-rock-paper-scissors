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