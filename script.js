const resetBtn = document.querySelector(".reset-btn"); //Attach resetGrid function to button
resetBtn.addEventListener("click", resetGrid);

const slider = document.querySelector("#slider-range");
const output = document.querySelector("#grid-size");
output.innerText = `${slider.value} x ${slider.value}`; // Default slider value

const EraserBtn = document.querySelector(".eraser-btn");
let isErasing = false;

//Function to draw grid size based on input
function drawGrid(num) {
    const drawSection = document.querySelector(".draw-section");
    for (let i = 0; i < num * num; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        drawSection.appendChild(gridItem);
        gridItem.style.cssText = `border: 1px solid lightgrey; flex-basis: ${100 / num}%;`;
    }
    colorPick();
}

//Pick pen color from pop up
function colorPick() {
    const penColor = document.querySelectorAll(".grid-item");
    const colorChoice = document.querySelector("#pen-color");
    let isDrawing = false;

    penColor.forEach((penColor) => {
        penColor.addEventListener("pointerdown", ()=> {
            isDrawing = true;
        })
    })

    document.addEventListener("pointerup", ()=> {
        isDrawing = false;
    })

    penColor.forEach((penColor) => {
        penColor.addEventListener("pointermove", ()=> {
            if (isDrawing === true) {
                if (isErasing === true) {
                    penColor.style.backgroundColor = "";
                } else {
                    penColor.style.backgroundColor = colorChoice.value;
                }
            }
        })
    })
}

//Reset the grid to default background color
function resetGrid() {
    const reset = document.querySelectorAll(".grid-item");
    reset.forEach((reset)=> {
        reset.style.backgroundColor = "";
    })
}

//Applies new grid size and removes old one whenever slider moves
slider.addEventListener("input", ()=> {
    const gridSize = parseInt(slider.value);
    output.innerText = `${slider.value} x ${slider.value}`;
    removeGrid()
    drawGrid(gridSize);
})

//Strips the grid from the container when selecting new dimensions
function removeGrid() {
    const removeSection = document.querySelector(".draw-section");
    removeSection.textContent = "";
}

//Set the initial grid
drawGrid(parseInt(slider.value));

function eraserActive() {
    isErasing = true;
    const drawSection = document.querySelector('.draw-section');
    drawSection.classList.add("eraser-mode");
}

function eraserDeactive() {
    isErasing = false;
    const drawSection = document.querySelector('.draw-section');
    drawSection.classList.remove("eraser-mode");
}

EraserBtn.addEventListener("click", ()=> {
    if (!isErasing) {
        eraserActive()
        EraserBtn.classList.add("active");
    } else {
        eraserDeactive()
        EraserBtn.classList.remove("active");
    }
})
