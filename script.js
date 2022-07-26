// default values
const defaultColor = document.getElementById("color").value;
const defaultNum = 18;

// variables
let colorNow = defaultColor;
let size = defaultNum;

// for mouse events
let mouseDown = false
document.getElementById('container').onmousedown = () => (mouseDown = true)
document.getElementById('container').onmouseup = () => (mouseDown = false)

// selectors
const colorInput = document.getElementById("color");
const slider = document.getElementById("slider");
const sliderVal = document.getElementById("slider-number");
const eraser = document.getElementById("eraser");
const reset = document.getElementById("reset");
const disco = document.getElementById("disco");
const stopDisco = document.getElementById("stopDisco");

// events
colorInput.oninput = (e) => setColor(e.target.value);
slider.onchange = (e) => updateSlider(e.target.value);
slider.onmousemove = (e) => updateSliderVal(e.target.value);
eraser.onclick = () => setColor("");
eraser.onmousedown = () => changeColorInput();
reset.onclick = (e) => resetGrid(e);
disco.onclick = () => discoModeInitiate();
stopDisco.onclick = () => discoModeEnd();

// function calls
window.onload = () => {
  makeGrid(defaultNum);
};

//functions

function discoModeInitiate() {
  list = container.childNodes;
  containerLength = container.childNodes.length;
  for (let i = 0; i < containerLength; i++) {
    check = list[i].className;
    if (check === "active") {
      myInterval = setInterval(() => {
        num = Math.floor(Math.random() * 255);
        num2 = Math.floor(Math.random() * 255);
        num3 = Math.floor(Math.random() * 255);
        console.log(num);
        list[i].style.backgroundColor = `rgb(${num},${num2},${num3})`;
        // console.log( '===>' + myInterval);
      }, 100);
    } 
  }
}

function discoModeEnd() {
  let id = 10000;
  while (id > 0){
    window.clearTimeout(id);
    id--;
  }
} 

function updateSlider(val) {
  console.log(val);
  size = val;
  clearGrid();
  makeGrid(val);
}

function updateSliderVal(val){
  sliderVal.innerHTML = `${val} x ${val}`
}

function changeColorInput() {
  colorInput.value = "#ffffff";
}

function setColor(val) {
  colorNow = val;
}

function setMode(val) {
  mode = val;
}

function changeColor(e) {
  if(e.type === 'mouseover' && !mouseDown){return}

  e.target.classList.remove("inactive");
  e.target.classList.add("active");
  e.target.style.backgroundColor = colorNow;
}

function makeGrid(num) {
  container.setAttribute(
    "style",
    `grid-template-columns:repeat(${num}, ${container.clientWidth / num}px);
        grid-template-rows:repeat(${num}, ${container.clientHeight / num}px)`
  );
  let total = num * num;
  for (let i = 0; i < total; i++) {
    let div = document.createElement("div");
    div.classList.add("inactive");
    div.addEventListener('mouseover', changeColor);
    div.addEventListener("mousedown", changeColor);
    container.appendChild(div);
  }
}

function resetGrid() {
  clearGrid();
  makeGrid(defaultNum);
}

function clearGrid(){
  container.innerHTML = '';
}
