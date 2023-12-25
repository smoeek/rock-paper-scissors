b = 0;
for ( let i = 0; i < 5; i++ ) {
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
        i--;
        return ('its a tie. Play again');
    }
    else if (userChoice === `rock` && computersChoice === `scissors`) {
        let win = ('Rock beats scissors. You win!');
        b++;
        return win;
    }
    else if (userChoice === `paper` && computersChoice === `scissors`) {
        let lose = ('Scissors beats paper. You lose!');
        return lose;
    }
    else if (userChoice === `paper` && computersChoice === `rock`) {
        let win = ('Paper beats rock. You win!');
        b++;
        return win;
    }
    else if (userChoice === `scissors` && computersChoice === `paper`) {
        let win = ('Scissors beats paper. You win!');
        b++;
        return win;
    }
    else if (userChoice === `scissors` && computersChoice === `rock`) {
        let lose = ('Scissors beats paper. You win!');
        return lose = ('Rock beats scissors. You lose!');
    }
    else {
        let lose = ('Paper beats rock. You lose!');
        return lose;
    }
}
console.log(playRound(userChoice, computersChoice));
}
function game(b) {
if (b >= 3) {
    return ('Congrats, you are the winner!');
}
else {
    return ('You have lost');
}
}
console.log(game(b));




