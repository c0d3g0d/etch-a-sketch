createGrid();

function createGrid() {
    const grid = document.querySelector(".grid");

    for (let i = 0; i < 256; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        grid.appendChild(box);
    }

    grid.addEventListener('mouseover', sketch);
}

function sketch(e) {
    e.target.style.backgroundColor = "black";
};
