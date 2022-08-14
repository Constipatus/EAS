
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

//newSize.addEventListener('submit', function(e) {
    //a = newSize.textContent
//})


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

window.addEventListener('load',gridSize) 


const newSize = document.getElementById('sizeSubmit').onSubmit = function () {newGrid()}
function newGrid () {
    let oldGrid = document.querySelectorAll('.box');
    oldGrid.forEach((e) => {
        sketch.removeChild(e);
    });
    a = document.querySelector('sizeText');
    sketch.cssStyleText = `grid-template-columns: repeat(${a}, 1fr)`;
    sketch.cssStyleText = `grid-template-rows: repeat(${a}, 1fr)`;
    gridSize ()
}