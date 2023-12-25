wi = 0;
lo = 0;
do {
let userChoice = prompt('Choose rock, paper or scissors').toLowerCase();
console.log(userChoice);

function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
}
let computersChoice = getComputerChoice();
console.log(computersChoice);


function playRound (userChoice, computersChoice) {
    if (userChoice == computersChoice) {
        return ('its a tie. Play again');
    }
    else if (userChoice === `rock` && computersChoice === `scissors`) {
        let win = ('Rock beats scissors. You win!');
        wi++;
        return win;
    }
    else if (userChoice === `paper` && computersChoice === `scissors`) {
        let lose = ('Scissors beats paper. You lose!');
        lo++;
        return lose;
    }
    else if (userChoice === `paper` && computersChoice === `rock`) {
        let win = ('Paper beats rock. You win!');
        wi++;
        return win;
    }
    else if (userChoice === `scissors` && computersChoice === `paper`) {
        let win = ('Scissors beats paper. You win!');
        wi++;
        return win;
    }
    else if (userChoice === `scissors` && computersChoice === `rock`) {
        let lose = ('Scissors beats paper. You win!');
        lo++;
        return lose = ('Rock beats scissors. You lose!');
    }
    else {
        let lose = ('Paper beats rock. You lose!');
        lo++;
        return lose;
    }
}
console.log(playRound(userChoice, computersChoice));
}
while (wi < 5 && lo < 5);
function game(wi, lo) {
if (wi > lo) {
    return ('Congrats, you are the winner!');
}
else if (lo > wi) {
    return ('You have lost');
}
}
console.log(game(wi, lo));




