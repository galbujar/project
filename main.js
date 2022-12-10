let rounds;
let player;
let opponent;
let numOfRounds;
let randomNum;
let wins = 0;
let losses = 0;
let ties = 0;

numOfRounds = prompt("How many rounds would you like to play?");
rounds = parseInt(numOfRounds, 10);

for (i = 0; i < rounds; i++) {
    player = prompt("Rock, paper, or scissors? (Enter r, p, or s)");

    if (player == "r") {
        player = "Rock";
    } else if (player == "p") {
        player = "Paper";
    } else if (player == "s") {
        player = "Scissors";
    } else {
        alert("Invalid. Please try again.");
    }

    randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 0) {
        opponent = "Rock";
    } else if (randomNum == 1) {
        opponent = "Paper";
    } else if (randomNum == 2) {
        opponent = "Scissors";
    }

    if (player == "Rock" && opponent == "Scissors") {
        wins = wins + 1;
        alert("You won! Rock beats scissors. " + wins + " win(s).");
    } else if (player == "Rock" && opponent == "Paper") {
        losses = losses + 1;
        alert("You lost! Paper beats rock. " + losses + " loss(es).");
    } else if (player == "Paper" && opponent == "Rock") {
        wins = wins + 1;
        alert("You won! Paper beats rock. " + wins + " win(s).")
    } else if (player == "Paper" && opponent == "Scissors") {
        losses = losses + 1;
        alert("You lost! Scissors beats paper. " + losses + " loss(es).");
    } else if (player == "Scissors" && opponent == "Paper") {
        wins = wins + 1;
        alert("You won! Scissors beats paper. " + wins + " win(s).");
    } else if (player == "Scissors" && opponent == "Rock") {
        losses = losses + 1;
        alert("You lost! Rock beats scissors." + losses + " loss(es).");
    } else if (player == opponent) {
        ties = ties + 1;
        alert("It's a tie!" + ties + " tie(s).");
    }
}

alert ("Game stats: " + wins + " wins, " + losses + " losses, and " + ties + " ties. Let's play!");