const simon = document.getElementById("game");
console.log(simon);
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
