const container = document.createElement('div');
container.setAttribute('id', 'container');

let dimension = 16


container.style.display = "grid";
container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
container.style.height = "500px";
container.style.width = "500px";
container.style.rowGap = "5px";
container.style.columnGap = "5px";


document.body.appendChild(container);

let numOfCells = dimension * dimension;

for (let i = 0; i < numOfCells; i++) {
        let cell = document.createElement('div');
        cell.classList.add('pixel');
        cell.style.border = "1px solid black";
        cell.style.width = "auto";
        cell.style.height = "auto";
        container.appendChild(cell);
    }


const btn = document.createElement('button');
btn.setAttribute('id', 'btn');
btn.textContent = "Make Grid";
const above = document.querySelector('header');
above.appendChild(btn);


btn.addEventListener('click', function (e) {

    let dimension = prompt("How many rows and columns for your grid?");

    if (dimension > 100 || dimension < 0) {
        alert("Enter a number less than or equal to 100");
        return;
    }

    document.body.removeChild(document.getElementById('container'));
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    container.style.display = "grid";
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    container.style.height = "500px";
    container.style.width = "500px";
    container.style.rowGap = "5px";
    container.style.columnGap = "5px";
    
    
    document.body.appendChild(container);
    
    let numOfCells = dimension * dimension;
    
    for (let i = 0; i < numOfCells; i++) {
            let cell = document.createElement('div');
            cell.classList.add('pixel');
            cell.style.border = "1px solid black";
            cell.style.width = "auto";
            cell.style.height = "auto";
            container.appendChild(cell);
        }
    
let pixels = document.querySelectorAll('.pixel');

const onHover = (e) => {
    e.currentTarget.style["background-color"] = "red";
}
        
for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", onHover);
}


}); 


let pixels = document.querySelectorAll('.pixel');

const onHover = (e) => {
    e.currentTarget.style["background-color"] = "red";
  }

for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", onHover);
}
