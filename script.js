const container = document.getElementById("container");

const defaultColor = '#000000'

let colorNow = defaultColor;

// making places for divs in container
container.setAttribute(
  "style",
  `grid-template-columns:repeat(16, ${container.clientWidth / 16}px);
  grid-template-rows:repeat(16, ${container.clientHeight / 16}px)`
);

function makeSquare(num=16){
    let total = num * num;
    const div = document.createElement("div");
    for (let i = 0; i < total; i++ ){
        let div = document.createElement('div')
        div.addEventListener('click', () => {
            div.style.backgroundColor = colorNow;
        })
        container.appendChild(div);
    }
}

makeSquare();

colorInput = document.getElementById('color');
colorInput.oninput = (e) => setColor(e.target.value);

function setColor(val){
    colorNow = val;
}


