createGrid();

function createGrid(gridLength = 16) {
    const WIDTH = 540;


    const boxSize = `${WIDTH / gridLength}px`;

    const grid = document.querySelector('.grid');
    grid.style.width = `${WIDTH}px`;
    grid.textContent = '';



    for (let i = 0; i < gridLength ** 2; i++) {

        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = boxSize;
        box.style.height = boxSize;
        grid.appendChild(box);
    }

    grid.addEventListener('mouseover', sketch);
}

function sketch(e) {
    e.target.style.backgroundColor = "black";
};

function setGridLength() {

    let gridLength = 16;
    do {
        gridLength = prompt("Enter a valid grid size (between 10 and 100): ", 10) || 16;
    }
    while (gridLength < 10 || gridLength > 100);

    createGrid(gridLength);
}