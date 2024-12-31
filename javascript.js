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

console.log(computerChoiceNum);

console.log(getComputerChoice(computerChoiceNum))