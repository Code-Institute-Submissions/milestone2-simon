const simon = document.getElementById("game");
const button = document.getElementById("switch");
console.log(simon);
console.log(button);

const startGame = document.createElement("button");
startGame.setAttribute("id", "start");
startGame.setAttribute("class", "button switches");
button.appendChild(startGame);

const power = document.createElement("input");
power.setAttribute("id", "on");
power.setAttribute("type", "checkbox");
power.setAttribute("class", "toggle left-align switches");
button.appendChild(power);

const difficulty = document.createElement("button");
difficulty.setAttribute("id", "diff");
difficulty.setAttribute("type", "checkbox");
difficulty.setAttribute("class", "toggle right-align switches");
button.appendChild(difficulty);

const topL = document.createElement("div");
topL.setAttribute("id", "topleft")
topL.setAttribute("class", "col-md-12 col-sm-6 col-xs-6");
simon.appendChild(topL);

const topR = document.createElement("div");
topR.setAttribute("id", "topRight")
topR.setAttribute("class", "col-md-12 col-sm-6 col-xs-6")
simon.appendChild(topR);

const bottomL = document.createElement("div");
bottomL.setAttribute("id", "bottomLeft")
bottomL.setAttribute("class", "col-md-12 col-sm-6 col-xs-6")
simon.appendChild(bottomL);

const bottomR = document.createElement("div");
bottomR.setAttribute("id", "bottomRight")
bottomR.setAttribute("class", "col-md-12 col-sm-6 col-xs-6")
simon.appendChild(bottomR);

const counter = document.createElement("div");
counter.setAttribute("id", "turn");
simon.appendChild(counter);

const countScreen = document.createElement("div");
countScreen.setAttribute("class", "game-count");
simon.appendChild(countScreen);
