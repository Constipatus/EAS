
//Creates black sketch markings on the grid
const sketch = document.querySelector('.sketchGrid')
sketch.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'black';
})

//Base settings to create grid divs
newGrid = document.createElement('div');
grid = document.querySelector('.sketchGrid');

//Base grid size
a = 30


//Create grid with input scales
function gridSize () {
    if (a>100){
        return
    } 
    
    for (i=0; i<(a*a); i++) {
        newGrid = document.createElement('div');
        newGrid.classList.add('box')
        grid = document.querySelector('.sketchGrid');
        grid.appendChild(newGrid);
}}

//Standard grid on window load-up
window.addEventListener('load',gridSize)


//Function and parameters to set the new grid
const newSize = document.getElementById('newSize');
newSize.addEventListener('click', () => {
    a = prompt ("Pick a size from 10-100");
    newGrid ();
})

function newGrid () {
    while (sketch.firstChild) {
        sketch.removeChild(sketch.firstChild)
    }
    sketch.style.cssText = `grid-template-columns: repeat(${a}, 1fr); 
        grid-template-rows: repeat(${a}, 1fr)`;
    gridSize ()
}