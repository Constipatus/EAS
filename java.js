

const sketch = document.querySelector('.sketchGrid')
sketch.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'black';
})

//newGrid = document.createElement('div');
//grid = document.querySelector('.sketchGrid');


for (i=0; i<100; i++) {
    newGrid = document.createElement('div');
    newGrid.classList.add('box')
    grid = document.querySelector('.sketchGrid');
    grid.appendChild(newGrid);
}