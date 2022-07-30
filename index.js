var randomnumber1 = "dice" + Math.floor(Math.random() * 6 + 1);
var randomnumber2 = "dice" + Math.floor(Math.random() * 6 + 1);

var image1_path = "images/" + randomnumber1 + ".png";
var image2_path = "images/" + randomnumber2 + ".png";

var a = document.querySelectorAll("img")[0];
var b = document.querySelectorAll("img")[1];
a.setAttribute("src", image1_path);
b.setAttribute("src", image2_path);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else if (randomnumber1 === randomnumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}