/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

*/

let bodyElement=document.querySelector("body")
const colorTimeOut = setTimeout(changeColorFunc, 5000);

function changeColorFunc() {
    bodyElement.style.background = "red";

};


/*
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================

*/

const colorInterval = setInterval (colorChangeInterval, 5000);
arrayColors= ["red","blue","yellow","pink"]

function colorChangeInterval (){
    const color=arrayColors.shift();
    document.body.style.background = color;
    arrayColors.push(color);
    
};

/*
//Task 2 -other solution using math random

let bodyElement=document.querySelector("body")
setInterval(colorRandomChange, 2000);
*/

function colorRandomChange(){

    const r= Math.floor(Math.random() * (255 - 0 + 1) + 0);
    const g= Math.floor(Math.random() * (255 - 0 + 1) + 0);
    const b= Math.floor(Math.random() * (255 - 0 + 1) + 0);
    return (bodyElement.style.background = `rgb(${r}, ${g}, ${b}`);
};
