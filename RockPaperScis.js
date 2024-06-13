
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
    totalWin : 0
}
let player2 = {
    name :'Player 2',
    hand : getHand(),
    totalWin : 0

}

function playRound(player1, player2){
    player1.hand = getHand();
    player2.hand = getHand();

    let roundWin =false;

    console.log (`${player1.name} : ${player1.hand}   vs.   ${player2.name} : ${player2.hand}`)
        if ((player1.hand =='rock' && player2.hand =='scissors') ||
            (player1.hand =='paper' && player2.hand =='rock') ||
            (player1.hand =='scissors' && player2.hand =='paper')) {
            player1.totalWin++;
            roundWin = true;
            return console.log (`${player1.name} wins the round!`)

        } else if ((player2.hand =='rock' && player1.hand =='scissors') ||
                   (player2.hand =='paper' && player1.hand =='rock') ||
                   (player2.hand =='scissors' && player1.hand =='paper')) {
                player2.totalWin++;
                roundWin = true;
                return console.log (`${player2.name} wins the round!`)

        } else if ((player1.hand =='rock' && player2.hand =='rock') ||
                   (player1.hand =='paper' && player2.hand =='paper') ||
                   (player1.hand =='scissors' && player2.hand =='scissors')) {
                roundWin = false;
                return console.log (`It's a tie!`);
        }   
}

playRound (player1, player2);
