# Milestone 2 #

## - Simon Memory Game

Play Here  Now - <a href="https://patrickoneill.github.io/milestone2-simon/">Simon Game</a>


Code Institute Project to create a memory game using 

- HTML5
- CSS
- JavaScript 

The project is mainly used to show off the abillity of JavaScript

### HTML5

I've used the basic HTML code for the layout .
Links for the CSS and Audio files are in the head of the index.html
with there file paths to keep things neat. JS link at the bottom as per best 
practice so that the page loads before the JS file.
All section in the index.html have an ID so that they are easily targeted in 
CSS & JS. I have used a little HTML script to show the power of JavaScript 
and ES6 in the creation of the game.

### CSS

The game components have been created by the CSS file. Using the # selector 
for easy styling. Using border-radius , sizing and margin to place to pieces 
together 

### JavaScript & ECMAScript 6

In the JavaScript i used the .getElementById("") to target the elements on the page.
Then with the .createElement("") I then appended them to the #id above and using .setAttribute to create the id and class tags iwth the info inside to be targeted by the CSS and then innerHTML to set the text inside of the element.

Then created the .addEventListener for the click event on the buttons. At this stage I had changes the way in which the function was writen using ES6

```javascript
power.addEventListener("click", function() {
    //code here
});

//Then becomes this in the new ES6
power.addEventListener("click", () => {
    //code here
});
```

As about with the function I found using let and const instead of using var all the time.

```javascript
var example;    //the variable may or may not be reassigned (can be confusing writing larger programs)
let example1;   //the variable may be reassigned
const example2; //the identifier won’t be reassigned
```

I ran into a few problem while writing the game, when I had planed it out on paper as opposed to in the editor
I had forgotten a few call to function that I need to keep the game loop going till the end.

##### Other source materials that I used in the creation of this was:
- HTML & CSS by Jon Duckett
- JavaScript & JQuery by Jon Duckett
- w3schools.com
- SoloLearn

### Bootstrap 3

I used bootstrap for the basic layout and and buttons inside the game.
The use of the bootstrap grid system col-md-*

### Jasmine 

Using jasmine to test the elements of the game.

As with the ES6 above the testing is done in the same format:

```javascript
describe("Testing power", function() {
    describe("Power Button", function() {
        it("should return true", function() {
            expect(power.checked).toBe(false);
        });
    });
});

describe("Testing power", () => {
    describe("Power Button", () => {
        it("should return true", () => {
            expect(power.checked).toBe(false);
        });
    });
});
```



