let img = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
let player1 = Math.floor(Math.random() * 5) + 1;
let player2 = Math.floor(Math.random() * 5) + 1;
document.querySelector(".img1").setAttribute("src",img[player1]);
document.querySelector(".img2").setAttribute("src",img[player2]);

if (img[player1] == img[player2]) {
    document.querySelector(".container h1").innerHTML = "Match is Draw"
}
else if (img[player1] > img[player2]) {
    document.querySelector("h1").innerHTML = "Player 1 is Win"
}
else if (img[player1] < img[player2]) {
    document.querySelector("h1").innerHTML = "Player 2 is Win"
}