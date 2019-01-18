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
counter.innerHTML = "POWER ME ON!";
simon.appendChild(counter);

const countScreen = document.createElement("div");
countScreen.setAttribute("class", "game-count");
countScreen.innerHTML = "---";
simon.appendChild(countScreen);

let player = [];
let order = [];
let on = false;
let diff = false;
let win;
let flash;
let flashTime;
let noise = true;
let turn;
let correct;
let cpu;

power.addEventListener("click", (event) => {
    //console.log("Checked");
    if (power.checked == true) {
        on = true;
        counter.innerHTML = "READY";
    }
    else {
        on = false;
        counter.innerHTML = "OFF";
        clearcolor();
        clearInterval(flashTime);
    }
    console.log(power.checked);

});

difficulty.addEventListener("click", (event) => {
    //console.log("Checked");
    if (difficulty.checked == true) {
        diff = true;
    }
    else {
        diff = false;
    }
    console.log(difficulty.checked);
});

startGame.addEventListener("click", () => {
    if (on || win) {
        playGame();
    }
    //console.log(startGame);
});

function playGame() {
    win = false;
    order = [];
    player = [];
    flash = 0;
    flashTime = 0;
    turn = 1;
    counter.innerHTML = 1;
    correct = true;

    for (let i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    //console.log(order);
    cpu = true;
    flashTime = setInterval(gamesTurn, 800);
}

function gamesTurn() {
    on = false;

    if (flash == turn) {
        clearInterval(flashTime);
        cpu = false;
        clearcolor();
        on = true;
    }
    if (cpu) {
        clearcolor();
        setTimeout(() => {
            // creating the order in what is flashed and what it is assigned
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            //increase flash
            flash++;
        }, 200)
    }
}
// will need to create a change color function
// create a function for each of the flashing elements
// will need an event listner on the colors
function one() {
    if (noise) {
        let audio = document.getElementById("audio1");
        audio.play();
    }
    noise = true;
    topL.style.backgroundColor = "darkgreen";
}

function two() {
    if (noise) {
        let audio = document.getElementById("audio2");
        audio.play();
    }
    noise = true;
    topR.style.backgroundColor = "darkred";
}

function three() {
    if (noise) {
        let audio = document.getElementById("audio3");
        audio.play();
    }
    noise = true;
    bottomL.style.backgroundColor = "goldenrod";
}

function four() {
    if (noise) {
        let audio = document.getElementById("audio4");
        audio.play();
    }
    noise = true;
    bottomR.style.backgroundColor = "darkblue";
}

topL.addEventListener("click", (event) => {
    if (on) {
        //console.log("on");
        player.push(1);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearcolor();
            }, 300);
        }
    }
});

topR.addEventListener("click", (event) => {
    if (on) {
        //console.log("on");
        player.push(2);
        check();
        two();
        if (!win) {
            setTimeout(() => {
                clearcolor();
            }, 300);
        }
    }
});

bottomL.addEventListener("click", (event) => {
    if (on) {
        //console.log("on");
        player.push(3);
        check();
        three();
        if (!win) {
            setTimeout(() => {
                clearcolor();
            }, 300);
        }
    }
});

bottomR.addEventListener("click", (event) => {
    if (on) {
        //console.log("on");
        player.push(4);
        check();
        four();
        if (!win) {
            setTimeout(() => {
                clearcolor();
            }, 300);
        }
    }
});

// next need to create a function to check the answers against the cpu

function check() {
    if (player[player.length-1] !== order[player.length-1]) {
        correct = false;
    }
    if (player.length == 20 && correct) {
        gameOver();
    }
    if (correct == false) {
        flashColor();
        turn.innerHTML = "Not Me!";
        setTimeout(() => {
            turn.innerHTML = turn;
            clearcolor();

            if (diff) {
                playGame();
            }
            else {
                cpu = true;
                flash = 0;
                player = [];
                correct = true;
                flashTime = setInterval(gamesTurn, 800);
            }
        }, 800);
        noise = false;
    }
    if (turn == player.length && correct && !win) {
        turn++;
        player = [];
        cpu = true;
        flash = 0;
        counter.innerHTML = turn;
        flashTime = setInterval(gamesTurn, 800);
    }
}

function flashColor() {
    topL.style.backgroundColor = "darkgreen";
    topR.style.backgroundColor = "darkred";
    bottomR.style.backgroundColor = "darkblue";
    bottomL.style.backgroundColor = "goldenrod";
}

function clearcolor() {
    topL.style.backgroundColor = "green";
    topR.style.backgroundColor = "red";
    bottomR.style.backgroundColor = "blue";
    bottomL.style.backgroundColor = "yellow";
}
// need to create a gameOver()

function gameOver() {
    flashColor();
    counter.innerHTML = "Winner Winner";
    on = false;
    win = true;
}
