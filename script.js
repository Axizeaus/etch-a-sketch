const container = document.getElementById("container");

const defaultColor = document.getElementById('color').value;
console.log(defaultColor);
let colorNow = defaultColor;



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

makeGrid(64);

colorInput = document.getElementById('color');
colorInput.oninput = (e) => setColor(e.target.value);


function setColor(val){
    colorNow = val;
}

function changeColor(e){
    e.target.style.backgroundColor = colorNow;
}

