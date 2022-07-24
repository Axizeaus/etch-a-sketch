// default values
const defaultColor = document.getElementById('color').value;
const defaultMode = 'colour';
const defaultNum = 18;

// variables 
let colorNow = defaultColor;
let mode = defaultMode;

// selectors 
const colorInput = document.getElementById('color');
const slider = document.getElementById('slider');
const sliderVal = document.getElementById('slider-number');
const eraser = document.getElementById('eraser');
const reset = document.getElementById('reset');

// events 
colorInput.oninput = (e) => setColor(e.target.value);
slider.onchange = (e) => updateSlider(e);
eraser.onmousedown = () => setColor('white');
reset.onclick = (e) => resetGrid(e);

// function calls
window.onload = () =>{
    makeGrid(defaultNum);
    mode = 'colour'
}

//functions 

function setColor(val){
    colorNow = val;
}

function setMode(val){
    mode = val;
}

function changeColor(e){
    e.target.style.backgroundColor = colorNow;
}

function makeGrid(num){
    container.setAttribute(
        "style",
        `grid-template-columns:repeat(${num}, ${container.clientWidth / num}px);
        grid-template-rows:repeat(${num}, ${container.clientHeight / num}px)`
    );
    let total = num * num;
    for (let i = 0; i < total; i++ ){
        let div = document.createElement('div')
        div.classList.add('grid-item');
        div.addEventListener('mousedown', changeColor);
        container.appendChild(div);
    }
}

function resetGrid(){
    container.innerHTML = '';
    makeGrid(defaultNum);
}
