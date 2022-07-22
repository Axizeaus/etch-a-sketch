// select the container
let container = document.getElementById("container");
// create a div element
let div = document.createElement("div");
// add div to the container
container.appendChild(div);

// making places for divs in container
container.setAttribute(
  "style",
  `grid-template-columns:repeat(16, ${container.clientWidth / 16}px);
  grid-template-rows:repeat(16, ${container.clientHeight / 16}px)`
);

function makeSquare(num=16){
    let total = num * num;
    for (let i = 0; i < total; i++ ){
        let div = document.createElement('div')
        container.appendChild(div);
    }
}

makeSquare();