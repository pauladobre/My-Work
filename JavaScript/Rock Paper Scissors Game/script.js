const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultsDisplay = document.getElementById('results');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const buttonChoices = document.querySelectorAll('button');
const buttonReset = document.getElementById('reset');
let userScore = 0;
let computerScore = 0;
let userChoice;
let computerChoice;
const choices = ['Rock', 'Paper', 'Scissors'];

buttonChoices.forEach(function (buttonChoices) {
    buttonChoices.addEventListener('click', function (event) {
        userChoice = event.target.id
        userChoiceDisplay.innerHTML = userChoice
        getComputerChoice()
        getResults()
    });

}); //deci pentru fiecare buton, atunci cand o sa fie apasat, imi iei valoarea de la fiecare buton si ii dai display

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResults() {
    if (userChoice === computerChoice) {
        resultsDisplay.innerHTML = "Tie"
    }
    else if (userChoice === "Rock" && computerChoice === "Scissors" ||
        userChoice === "Scissors" && computerChoice === "Paper" ||
        userChoice === "Paper" && computerChoice === "Rock") {
        resultsDisplay.innerHTML = "You win!";
        userScore++;
        userScoreDisplay.innerHTML = userScore
    }
    else {
        resultsDisplay.innerHTML = "Computer wins!";
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore
    }
}

buttonReset.addEventListener('click', function reload() {
    window.location.reload()
})