function rollPlayerOne() {
  // Player Two Dice
  var playerOneRoll = Math.floor(Math.random() * 6) + 1;
  console.log(playerOneRoll);
  let player1Die = document.getElementById("img1");
  switch (playerOneRoll) {
    case 1:
      player1Die.src = "images/dice1.png";
      break;
    case 2:
      player1Die.src = "images/dice2.png";
      break;
    case 3:
      player1Die.src = "images/dice3.png";
      break;
    case 4:
      player1Die.src = "images/dice4.png";
      break;
    case 5:
      player1Die.src = "images/dice5.png";
      break;
    case 6:
      player1Die.src = "images/dice6.png";
      break;
    default:
      break;
  }
  return playerOneRoll;
}
function rollPlayerTwo() {
  // Player Two Dice
  var playerTwoRoll = Math.floor(Math.random() * 6) + 1;
  console.log(playerTwoRoll);
  let player2Die = document.getElementById("img2");
  switch (playerTwoRoll) {
    case 1:
      player2Die.src = "images/dice1.png";
      break;
    case 2:
      player2Die.src = "images/dice2.png";
      break;
    case 3:
      player2Die.src = "images/dice3.png";
      break;
    case 4:
      player2Die.src = "images/dice4.png";
      break;
    case 5:
      player2Die.src = "images/dice5.png";
      break;
    case 6:
      player2Die.src = "images/dice6.png";
      break;
    default:
      break;
  }
  return playerTwoRoll;
}
// winner code
let player1 = rollPlayerOne();
let player2 = rollPlayerTwo();
if (player1 > player2){
  document.getElementById("header").innerHTML = "Player One Wins!";
}else if (player1 < player2){
  document.getElementById("header").innerHTML = "Player Two Wins!";
}else{
   document.getElementById("header").innerHTML = "It's a draw!";
 }
