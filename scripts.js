
let container = document.querySelector(".container");
let r = true;
makeGrid(5,5,container,r);




function makeGrid(width,height,parent,randomColor){
    removeGrid(parent);
    if(width > 100) width = 100;
    if(height> 100) height = 100;    

    for(let i=0;i<height;i++){
        let rowContainer = document.createElement("div");    
        rowContainer.classList.add("row");

        for(let j=0;j<width;j++){

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

