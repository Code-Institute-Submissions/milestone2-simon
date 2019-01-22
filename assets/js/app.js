/*In the making of this game i have decided to let Java do most of the work for the HTML side just as a challenge for myself to show its power. I'm using the ECMCScript 6 format for most of it.
 */
const simon = document.getElementById("game"); //target id on the HTML page
const button = document.getElementById("switch"); //as const because they
const screen = document.getElementById("screen"); //won't be changed.
console.log(simon); //seeing it come to life in the console (game area)
console.log(button); //for the creation of the buttons.

const label = document.createElement("label"); //for the craetion of the
const label2 = document.createElement("label"); //labels on the page.

/* created the element button, set id and class and then gave them their attributes. Set the HTML needed and then appended them to the game in the order that is needed
 */
const startGame = document.createElement("button");
startGame.setAttribute("id", "start");
startGame.setAttribute("class", "btn btn-success");
startGame.innerHTML = "Start Game";
button.appendChild(startGame);

const power = document.createElement("input");
power.setAttribute("id", "power-on");
power.setAttribute("type", "checkbox");
power.setAttribute("class", "toggle left-align");
label.setAttribute("class", "power-on");
label.innerHTML = "Power On";
button.appendChild(label);
button.appendChild(power);

const difficulty = document.createElement("input");
difficulty.setAttribute("id", "diff-mode");
difficulty.setAttribute("type", "checkbox");
difficulty.setAttribute("class", "toggle right-align");
label2.setAttribute("class", "hard-mode");
label2.innerHTML = "Hard Mode";
button.appendChild(label2);
button.appendChild(difficulty);

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
counter.setAttribute("class", "screen-text align-left")
counter.innerHTML = "POWER ME ON!";
screen.appendChild(counter);

const countScreen = document.createElement("div");
countScreen.setAttribute("class", "game-count ");
countScreen.innerHTML = "---";
screen.appendChild(countScreen);

const accountName = document.createElement("div");
accountName.setAttribute("class", "my-account align-right");
accountName.innerHTML = "<a href='https://github.com/patrickoneill'>Patrick O'Neill @  GitHub</a>";
screen.appendChild(accountName);
/* created the variables as needed throughout the game using let instead of var indication that they a subject to change at block level */
let player = []; //store players turn
let order = []; //store the order that the game creates
let on = false; // bool value for the power
let diff = false; //bool value for the difficulty
let win; //created for block level values
let flash;
let flashTime;
let noise = true; ///bool value for the audio
let turn;
let correct;
let cpu;

/* Event listener for the power switch, checks if it's on or off and changes the innerHTML for the readout */
power.addEventListener("click", (event) => {
    console.log("Checked");
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
/* Event listener for the difficult mode */
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
/* Checks to see if the power button has been switched on or if the game has been won and will call the playGame() function to start */
startGame.addEventListener("click", () => {
    if (on || win) {
        playGame();
    }
    console.log(startGame);
});
/* Starts the game by setting win to false till the game ends, has the empty Array for the player and the order to be stored, set the variables for this block. Created a loop that will create a loop of 20 numbers from 1-4 sets the interval time for the flashes */
function playGame() {
    win = false;
    order = [];
    player = [];
    flash = 0;
    flashTime = 0;
    turn = 1;
    counter.innerHTML = "Here We Go";
    correct = true;

    for (let i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    //console.log(order);
    cpu = true;
    flashTime = setInterval(gamesTurn, 800);
}
// the function for the game turn, checks who is playing and continues
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

            flash++;
        }, 200)
    }
}
/* these are the function that will look after the sound in the game and are called in the gamesTurn(), one for each colour */
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
    bottomL.style.backgroundColor = "orange";
}

function four() {
    if (noise) {
        let audio = document.getElementById("audio4");
        audio.play();
    }
    noise = true;
    bottomR.style.backgroundColor = "darkblue";
}

/* click event for eah of the buttons whille the game is in play, one for each button */

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

/* this function checks the conditions of the game to see if the player has won yet of if it should conntinue */

function check() {
    if (player[player.length - 1] !== order[player.length - 1]) {
        correct = false;
    }
    if (player.length == 20 && correct) {
        gameOver();
    }
    if (correct == false) {
        flashColor();
        counter.innerHTML = "Not Me!";
        setTimeout(() => {
            counter.innerHTML = "";
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
        countScreen.innerHTML = turn;
        flashTime = setInterval(gamesTurn, 800);
    }
}

/* function to flash the colour in the game*/
function flashColor() {
    topL.style.backgroundColor = "darkgreen";
    topR.style.backgroundColor = "darkred";
    bottomR.style.backgroundColor = "darkblue";
    bottomL.style.backgroundColor = "orange";
}
/* function to clear the colour in the game if the sequence is wrong or moving on*/
function clearcolor() {
    topL.style.backgroundColor = "green";
    topR.style.backgroundColor = "red";
    bottomR.style.backgroundColor = "blue";
    bottomL.style.backgroundColor = "yellow";
}
/* the gameOver() throws up an alert to the screen to say game over and sets the values of the variables so that the game can play again*/

function gameOver() {
    alert("Game Over")
    flashColor();
    counter.innerHTML = "Winner Winner";
    on = false;
    win = true;
}
