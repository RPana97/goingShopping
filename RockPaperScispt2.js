
const hands = ['rock', 'paper', 'scissors']; 

function getHand() {
    switch  (parseInt(Math.random(hands)*10)%3) {
        case 0 :
            return hands[0];
            break;
        case 1 :
            return hands[1];
            break;
        case 2 :
            return hands[2];
    }   
}

let player1 = {
    name : 'Player 1',
    hand : getHand(),
    totalWins : 0,
    gameWon :false
}
let player2 = {
    name :'Player 2',
    hand : getHand(),
    totalWins : 0,
    gameWon :false
}
let player3 = {
    name : 'Player 3',
    hand : getHand(),
    totalWins : 0,
    gameWon :false
}
let player4 = {
    name :'Player 4',
    hand : getHand(),
    totalWins : 0,
    gameWon :false
}

let Winner =[];

function playRound(player1, player2){
    player1.hand = getHand();
    player2.hand = getHand();

    let roundWin =false;

    console.log ('');
    console.log (`${player1.name} : ${player1.hand}   vs.   ${player2.name} : ${player2.hand}`)
        if ((player1.hand =='rock' && player2.hand =='scissors') ||
            (player1.hand =='paper' && player2.hand =='rock') ||
            (player1.hand =='scissors' && player2.hand =='paper')) {
            player1.totalWins++;
            roundWin = true;
            return console.log (`${player1.name} wins the round! ${player1.name} total wins: ${player1.totalWins}`)

        } else if ((player2.hand =='rock' && player1.hand =='scissors') ||
                   (player2.hand =='paper' && player1.hand =='rock') ||
                   (player2.hand =='scissors' && player1.hand =='paper')) {
                    player2.totalWins++;
                    roundWin = true;
                    return console.log (`${player2.name} wins the round! ${player2.name} total wins: ${player2.totalWins}`)

        } else if ((player1.hand =='rock' && player2.hand =='rock') ||
                   (player1.hand =='paper' && player2.hand =='paper') ||
                   (player1.hand =='scissors' && player2.hand =='scissors')) {
                    roundWin = false;
                    return console.log (`It's a tie!`);
        }   
}

function playGame (player1, player2, playUntil) {
    while (player1.totalWins < playUntil && player2.totalWins < playUntil) {
        playRound (player1,player2);
        if (player1.totalWins == playUntil) {
            player1.gameWon = true;
            return player1;
        } else if (player2.totalWins == playUntil){
                    player2.gameWon = true;
                    return player2;
        }
        
    }
    return null;
}

function playTournament (player1, player2, player3, player4, playUntil) {
    let round = 1;
    while (round <= playUntil) {
    //round 1 player 1 vs 2
    let winner1 = playGame(player1, player2, 3);
    let gameNum = 1;
    console.log ('');
    console.log (`End of game ${gameNum}. Winner : ${winner1.name}`);
    gameNum++;
    console.log (`-------------------------------`);
    //round 2 player 4 vs 4
    let winner2 = playGame(player3, player4, 3);
    console.log ('');
    console.log (`End of game ${gameNum}. Winner : ${winner2.name}`);
    gameNum++;
    console.log (`-------------------------------`);
    //final round winner vs winner 
    winner1.totalWins=0;
    winner2.totalWins=0;
    Winner = playGame(winner1, winner2,3);
    round ++
    }
    return Winner;
}

Winner = playTournament (player1,player2,player3,player4, 1);
console.log ('');
console.log (`-------------------------------`);
console.log (`${Winner.name} is the World Champion!!`);