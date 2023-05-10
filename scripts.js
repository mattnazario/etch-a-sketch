
let container = document.querySelector(".container");
makeGrid(16,16,container);

function makeGrid(width,height,parent){

    for(let i=0;i<height;i++){
        let rowContainer = document.createElement("div");    
        rowContainer.classList.add("row");

        for(let j=0;j<width;j++){

            let square = document.createElement("div");
            square.classList.add("square");
            rowContainer.appendChild(square);

        }
        parent.appendChild(rowContainer);
    }
}

