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
const disco = document.getElementById('disco');
const stopDisco = document.getElementById('stopDisco');

// events 
colorInput.oninput = (e) => setColor(e.target.value);
slider.onchange = (e) => updateSlider(e);
eraser.onclick = () => setColor('white');
eraser.onmousedown = () => changeColorInput();
reset.onclick = (e) => resetGrid(e);
disco.onclick = () => discoModeInitiate();
stopDisco.onclick = () => clearInterval(myInterval);

// function calls
window.onload = () =>{
    makeGrid(defaultNum);
    mode = 'colour'
}

//functions 

function discoModeInitiate(){
    list = container.childNodes
    containerLength = container.childNodes.length
    for(let i = 0; i<containerLength; i++){
        check = list[i].className
        if (check === 'active'){
            // window.setInterval(discoMode,1000);
            myInterval = setInterval(() => {
                num = Math.floor(Math.random() * 255);
                console.log(num);
                list[i].style.backgroundColor = `rgb(${255-num},${num},${num})`;
            }, 100)
            clearInterval(myInterval);
            // vg = list[i].style.backgroundColor
            // vg = '#aaaaaa'
            // discoMode(list[i].style.backgroundColor)
        }
    }
}




function updateSlider(){
    // update slider code here
}

function changeColorInput(){
    colorInput.value = '#ffffff'
}

function setColor(val){
    colorNow = val;
}

function setMode(val){
    mode = val;
}

function changeColor(e){
    e.target.classList.remove('inactive');
    e.target.classList.add('active');
    
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
        div.classList.add('inactive');
        div.addEventListener('mousedown', changeColor);
        container.appendChild(div);
    }
}

function resetGrid(){
    container.innerHTML = '';
    makeGrid(defaultNum);
}
