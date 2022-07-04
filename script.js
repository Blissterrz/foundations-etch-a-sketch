//UI
let grid = document.querySelector('.container');

//Creating the grid
function createRow(cellNum) {
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
    
createRow(12);


