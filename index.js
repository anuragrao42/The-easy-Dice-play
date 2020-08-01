var randNum1 = Math.random();
randNum1 = randNum1 * 6;
randNum1 = Math.floor(randNum1)+1;

var randNum2 = Math.random();
randNum2 = randNum2 * 6;
randNum2 = Math.floor(randNum2)+1;

document.querySelector("img.img1").setAttribute("src", "images/dice"+randNum1+".png");
document.querySelector("img.img2").setAttribute("src", "images/dice"+randNum2+".png");

if (randNum1>randNum2){
  document.querySelector(".container h1").innerHTML = "🚩Player 1 Wins!";

}
else if (randNum2>randNum1){
  document.querySelector(".container h1").innerHTML = "Player 2 Wins!🚩";

}
else {
  document.querySelector(".container h1").innerHTML = "Draw!";

}
