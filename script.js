function makeASquare(){
    const container = document.querySelector('#sketch');
    const square = document.createElement('div');
    square.classList.add('square');

    container.appendChild(square);
}

function makeARow(){
    for( let i = 0; i < 16; i++){
        makeASquare();
    }
}

function makeASketch(){
    for (let i = 0; i < 16; i++){
        makeARow();
    }
}

makeASketch();