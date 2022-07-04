//UI
let grid = document.querySelector('.container');

//Creating the grid
function createGrid(cellNum) {
    for(i = 0; i < cellNum; i++) {
        let row = document.createElement('div');
        row.className = 'row';

        for (j = 0; j < cellNum; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        };

       grid.appendChild(row);
    };
}
    
createGrid(16);

let cells = document.querySelectorAll('.cell');

cells.forEach((cell) => cell.addEventListener('mouseover', (e) => {
    cell.setAttribute('style', 'background: black;');
}));

