let seconds = "";
let interval;

function setAlarm() {
  pauseAlarmButton();
  clearInterval(interval);
  seconds = document.getElementById("alarmSet").value;
  if(seconds < 10) {
    document.getElementById("timeRemaining").innerHTML = "Time Remaining: 00:0" + seconds;
  }else if(seconds >= 10 && seconds < 60) {
    document.getElementById("timeRemaining").innerHTML = "Time Remaining: 00:" + seconds;
  } 
  interval = setInterval (decreaseTimeRemaining, 1000);

}

function decreaseTimeRemaining() {
  if(document.getElementById("timeRemaining").innerHTML != "Time Remaining: 00:00"){
    let minusSecond = parseInt(seconds) -1;
    seconds = minusSecond;
    if(seconds < 10) {
      document.getElementById("timeRemaining").innerHTML = "Time Remaining: 00:0" + minusSecond;
    }else if(seconds >= 10 && seconds < 60) {
      document.getElementById("timeRemaining").innerHTML = "Time Remaining: 00:" + seconds;
    }
    console.log(document.getElementById("timeRemaining").innerHTML);
  } else {
    document.body.style.backgroundColor= "red"
    playAlarm();
    clearInterval(interval);
  }
  
};

//create Pause button
let pauseButton= document.createElement("button");
let parentDiv=document.querySelector(".centre");
pauseButton.innerHTML= "Pause Button";
pauseButton.id="pauseBtn"
let childDiv = parentDiv.lastElementChild;
childDiv.appendChild(pauseButton);

console.log("created button")

//pause button functionality

function pauseAlarmButton(){
  document.getElementById("pauseBtn").addEventListener("click", () => {
    clearInterval(interval);
    console.log("clicked pause");
    document.getElementById("alarmSet").value = seconds;
  });

}





// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
