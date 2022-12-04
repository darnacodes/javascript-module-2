// Write your code here
const img0 = "https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80";
const img1 = "https://images.unsplash.com/photo-1570347929626-2bbc8032d98b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80";
const img2 = "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80";
const img3 = "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
const img4 = "https://images.unsplash.com/photo-1575722719841-7770fb1aeaeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80";


const imagesOfCats = [img0, img1, img2, img3, img4];

let imgIndex = 0; // to get the index of the image1
let intervalVar;
let delayInterval = 1000;



const autoBackBtn = document.getElementById("auto-back-btn");
const backBtn = document.getElementById("back-btn");
const stopBtn = document.getElementById("stop-btn");
const forwardBtn = document.getElementById("forward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");

let imageNumber = document.getElementById("numberImage");
const content = document.getElementById("random-image");
let img = document.createElement("img");
content.appendChild(img);

function showImage() {
    if (img != null){
        img.src = imagesOfCats[imgIndex];
        imageNumber.innerHTML = imgIndex;
    }
 
}

    showImage(); //default image shown

    


function backEvent() {
  imgIndex = imgIndex == 0 ? imagesOfCats.length - 1 : imgIndex - 1;
  showImage();
}

function forwardEvent() {
  imgIndex = imgIndex == imagesOfCats.length - 1 ? 0 : imgIndex + 1;
  showImage();
}

function autoBackEvent() {
  resetInterval(backEvent);
}

function autoForwardEvent() {
  resetInterval(forwardEvent);
}

function stopEvent() {
  resetInterval();
}

function resetInterval(fnc) {
  if (intervalVar) clearInterval(intervalVar);
  if (typeof fnc === "function") {
    intervalVar = setInterval(fnc, delayInterval);
  }
}

if (autoBackBtn){
    autoBackBtn.addEventListener('click', autoBackEvent);
}

if (backBtn){
    backBtn.addEventListener('click', backEvent);
}

if (stopBtn){
    stopBtn.addEventListener('click', stopEvent);
}

if (forwardBtn){
    forwardBtn.addEventListener('click', forwardEvent);
}

autoForwardBtn?.addEventListener('click', autoForwardEvent); //same as above