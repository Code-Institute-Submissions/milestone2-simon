const simon = document.getElementById("game");
const button = document.getElementById("switch");
console.log(simon);
console.log(button);

var label = document.createElement("label");
var label2 = document.createElement("label");

const power = document.createElement("input");
power.setAttribute("id", "checkboxSuccess");
power.setAttribute("type", "checkbox");
power.setAttribute("class", "toggle left-align");
label.setAttribute("placeholder", "Power On");
label.innerHTML = "Power On";
button.appendChild(power);
button.appendChild(label);

const startGame = document.createElement("button");
startGame.setAttribute("id", "start");
startGame.setAttribute("class", "btn btn-success");
startGame.innerHTML = "Start Game";
button.appendChild(startGame);

const difficulty = document.createElement("input");
difficulty.setAttribute("id", "checkboxError");
difficulty.setAttribute("type", "checkbox");
difficulty.setAttribute("class", "toggle right-align");
label2.setAttribute("placeholder", "Difficult");
label2.innerHTML = "Hard Mode";
button.appendChild(difficulty);
button.appendChild(label2);

const topL = document.createElement("div");
topL.setAttribute("id", "topleft");
topL.setAttribute("class", "col-md-6 col-sm-6 col-xs-6");
simon.appendChild(topL);

const topR = document.createElement("div");
topR.setAttribute("id", "topRight");
topR.setAttribute("class", "col-md-6 col-sm-6 col-xs-6");
simon.appendChild(topR);

const bottomL = document.createElement("div");
bottomL.setAttribute("id", "bottomLeft");
bottomL.setAttribute("class", "col-md-6 col-sm-6 col-xs-6");
simon.appendChild(bottomL);

const bottomR = document.createElement("div");
bottomR.setAttribute("id", "bottomRight");
bottomR.setAttribute("class", "col-md-6 col-sm-6 col-xs-6");
simon.appendChild(bottomR);

const counter = document.createElement("div");
counter.setAttribute("id", "turn");
counter.innerHTML = "POWER ME ON!"
simon.appendChild(counter);

const countScreen = document.createElement("div");
countScreen.setAttribute("class", "game-count");
countScreen.innerHTML = "---";
simon.appendChild(countScreen);

let player = [];
let order = [];
let on = false;
let diff = false;

power.addEventListener("click", (event) => {
    console.log("Checked");
    if (power.checked === true) {
        on = true;
        counter.innerHTML = "READY";
    }
    else {
        on = false;
        counter.innerHTML = "OFF";
    }
    console.log(power.checked);

});

difficulty.addEventListener("click", (event) => {
    console.log("Checked");
    if (difficulty.checked == true) {
        diff = true;
    }
    else {
        diff = false;
    }
    console.log(difficulty.checked);
});
