createGrid();

function createGrid(gridLength = 16) {
    const WIDTH = 500;


    const boxSize = `${WIDTH / gridLength}px`;

    const grid = document.querySelector('.grid');
    grid.style.width = `${WIDTH}px`;
    grid.textContent = '';



    for (let i = 0; i < gridLength ** 2; i++) {

        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = boxSize;
        box.style.height = boxSize;

        box.addEventListener('mouseover', sketch);      // mouse events to start and stop sketching
        grid.addEventListener('mouseup', function(){
            box.addEventListener('mouseover', sketch);
        });
        grid.addEventListener('mousedown', function(){
            box.removeEventListener('mouseover', sketch);
        });


        grid.appendChild(box);
    }
}

function sketch(e) {
    const RED = Math.floor(Math.random() * 256);
    const GREEN = Math.floor(Math.random() * 256);
    const BLUE = Math.floor(Math.random() * 256);

    let alphaVal = Number(e.target.getAttribute('alpha'));
    let rgbStr = `${RED}, ${GREEN}, ${BLUE}`;

    if (alphaVal) {
        alphaVal += 0.1;
        rgbStr = e.target.getAttribute('rgbStr');
        e.target.setAttribute('alpha', alphaVal);
        e.target.style['background-color'] = `rgba(${rgbStr}, ${alphaVal})`;

    }
    else {
        alphaVal = 0.1;
        e.target.setAttribute('alpha', alphaVal);
        e.target.setAttribute('rgbStr', rgbStr);
        e.target.style['background-color'] = `rgba(${rgbStr}, ${alphaVal})`;
    }
};

function setGridLength() {

    let gridLength = 16;
    do {
        gridLength = prompt("Enter a valid grid size (between 10 and 100): ", 10) || 16;
    }
    while (gridLength < 10 || gridLength > 100);

    createGrid(gridLength);
}