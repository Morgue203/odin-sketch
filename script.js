//TODO
//1. create a 16x16 with javascript & style with flexbox
//2. find out how to set up a hover effect for the div grid
//3. add a button that reset current grid and allows user to enter the size for the new grid


//set up constants 
const GRIDSIDE = 700;
let rows = 16;
let cols = 16;

//container sizing
const container = document.querySelector(".container");
container.style.width = GRIDSIDE + 'px';
container.style.height = GRIDSIDE + 'px';

//function to create a grid 
function createGrid() {
    for (let i = 0; i < (rows * cols); i++) {
        const gridCell = document.createElement("div");
        //cell sizing
        gridCell.style.width = (GRIDSIDE / cols) - 2 + 'px';
        gridCell.style.height = (GRIDSIDE / rows) - 2 + 'px';
        //add a class name cell for each gridCell
        gridCell.classList.add("cell");
        container.appendChild(gridCell);
    }
}

createGrid();

//simple black mouse over effect 
let cells = document.querySelectorAll('.cell');
cells.forEach(function(cell) {
    cell.addEventListener("mouseover", function() {
        cell.style.backgroundColor = 'black';
    });
});