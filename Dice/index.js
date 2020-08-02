var randomNumber1 = Math.floor(6 * Math.random() + 1);
var randomNumber2 = Math.floor(6 * Math.random() + 1);

var randomDiceNumber1 = "images/dice" + randomNumber1 + ".png";
var randomDiceNumber2 = "images/dice" + randomNumber2 + ".png";


document.querySelectorAll("img")[0].setAttribute("src", randomDiceNumber1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceNumber2);

if(randomDiceNumber1 > randomDiceNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"; 
} else {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}