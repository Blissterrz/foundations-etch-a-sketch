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

//Start the game
createGrid(16);

//Reset button
function reset() {
    cells.forEach(cell => cell.setAttribute('style', 'background: white;'));
}
let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', reset);

//Setting the number of cells button
function getSetSize() {
    let setNum = prompt('Choose the number of squares per side for the grid.');
    if (setNum > 100) {
        alert('The number you have entered is too large, please enter a smaller number.');
        return getSetSize();
    } else if (setNum <= 0) {
        alert('The number you have entered is too small, please enter a larger number');
        return getSetSize();
    } else if (isNaN(setNum)) {
        alert('Please enter a number.');
        return getSetSize();
    } else {
        return setNum;
    }
}
function setSize() {
    grid.textContent = '';
    let setNum = getSetSize();
    createGrid(setNum);
    cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => cell.addEventListener('mouseover', (e) => {
        cell.setAttribute('style', 'background: black;');
    }));
};
let setBtn = document.querySelector('.setCells');
setBtn.addEventListener('click', setSize);



//Main hover functionality
let cells = document.querySelectorAll('.cell');
cells.forEach((cell) => cell.addEventListener('mouseover', (e) => {
    cell.setAttribute('style', 'background: black;');
}));