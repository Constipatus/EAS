
//Creates base black sketch markings on the grid
const sketch = document.querySelector('.sketchGrid');
sketch.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'Black';
});

//Buttons to override black to randomized colros and back
const rainbowSketch = document.querySelector('#randomColor');
const blackSketch = document.querySelector('#blackColor');

rainbowSketch.addEventListener('click', () => {
    sketch.removeEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'Black';
    })
    sketch.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "#" + (Math.floor(Math.random()*16777215).toString(16));
    });
});


blackSketch.addEventListener('click', () => {
    sketch.removeEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "#" + (Math.floor(Math.random()*16777215).toString(16));
    })
    sketch.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'Black';
    })
})


//Base settings to create grid divs
newGrid = document.createElement('div');
grid = document.querySelector('.sketchGrid');


//Base grid size
let a = 30

//Create grid with input scales
function gridSize () {
    if (a>100||a<10){
        return
    };
    for (i=0; i<(a*a); i++) {
        newGrid = document.createElement('div');
        newGrid.classList.add('box');
        grid = document.querySelector('.sketchGrid');
        grid.appendChild(newGrid);
}}

//Standard grid on window load-up
window.addEventListener('load',gridSize)


//Function and parameters prompt for a new grid
const newSize = document.getElementById('newSize');
newSize.addEventListener('click', () => {
    a = prompt ("Pick a size from 10-100");

    while (sketch.firstChild) {
        sketch.removeChild(sketch.firstChild)
    };

    sketch.style.cssText = `grid-template-columns: repeat(${a}, 1fr); 
        grid-template-rows: repeat(${a}, 1fr);`;
    gridSize ();
})