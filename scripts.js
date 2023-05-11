
let button = document.querySelector("#make-grid-button");
let gridSize = document.querySelector("#grid-size-input");
let size;
let randomColor = false;
let colorSwapper = document.querySelector("#color");
colorSwapper.addEventListener("click",swapColor);

button.addEventListener("click",makeGrid);

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click",makeGrid);

function swapColor(e){
    randomColor = !randomColor;
    colorSwapper.classList.toggle("colorful");
    makeGrid();
}

function makeGrid(evt){
    if(!gridSize.value){
        size = 16;
    }else{
        size = parseInt(gridSize.value);    
    }
    let parent = document.querySelector(".container");
    let gridText = document.querySelector("#grid-size-text");
    
    removeGrid(parent);
    if(size > 100) width = 100;  
    gridText.textContent = `${size} x ${size}`;

    for(let i=0;i<size;i++){
        let rowContainer = document.createElement("div");    
        rowContainer.classList.add("row");

        for(let j=0;j<size;j++){

            let square = document.createElement("div");
            square.classList.add("square");
            randomColor ? square.addEventListener('mouseover',fillSquareRandom,{once: true}) : square.addEventListener('mouseover',fillSquare,{once: true} );
            rowContainer.appendChild(square);

        }
        parent.appendChild(rowContainer);
    }
}

function removeGrid(parent){
    while(parent.firstChild){
        while(parent.firstChild.firstChild){
            parent.firstChild.removeChild(parent.firstChild.firstChild);
        }
        parent.removeChild(parent.firstChild);
    }

}

function fillSquare(element){
    this.classList.add("filled");

}

function fillSquareRandom(element){
    let hexStr = "#";
    for(let i=0;i<6;i++){
        hexStr += convertNumToHex(Math.floor(Math.random() * 16));        
    }
    this.setAttribute('style',`background-color: ${hexStr};`);
}

function convertNumToHex(num){
    switch(num){
        case 0:
            return '0';
        case 1:
            return '1';
        case 2:
            return '2';
        case 3:
            return '3';
        case 4:
            return '4';
        case 5:
            return '5';
        case 6:
            return '6';
        case 7:
            return '7';
        case 8:
            return '8';
        case 9:
            return '9';
        case 10:
            return 'A';
        case 11:
            return 'B';           
        case 12:
            return 'C';
        case 13:
            return 'D';
        case 14:
            return 'E';
        case 15:
            return 'F';
        
    }
}

