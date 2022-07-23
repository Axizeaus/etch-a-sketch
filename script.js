
const defaultColor = document.getElementById('color').value;

let colorNow = defaultColor;

const colorInput = document.getElementById('color');
const slider = document.getElementById('slider');
const sliderVal = document.getElementById('slider-number');


colorInput.oninput = (e) => setColor(e.target.value);
slider.onchange = (e) => updateSlider(e);
sliderVal.textContent = 'test';

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

function setColor(val){
    colorNow = val;
}

function changeColor(e){
    e.target.style.backgroundColor = colorNow;
}

makeGrid(18);