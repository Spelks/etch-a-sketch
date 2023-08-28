const resetBtn = document.querySelector(".reset-btn");
const slider = document.querySelector("#slider-range");
const output = document.querySelector("#grid-size");
const eraserBtn = document.querySelector(".eraser-btn");
const drawSection = document.querySelector(".draw-section");
const colorChoice = document.querySelector("#pen-color");

resetBtn.addEventListener("click", resetGrid);
slider.addEventListener("input", handleSliderInput);
eraserBtn.addEventListener("click", toggleEraser);

function toggleEraser() {
    isErasing = !isErasing;
    drawSection.classList.toggle("eraser-mode", isErasing);
    eraserBtn.classList.toggle("active", isErasing);
}

//Applies new grid size and removes old one whenever slider moves
function handleSliderInput() {
    const gridSize = parseInt(slider.value);
    output.innerText = `${slider.value} x ${slider.value}`;
    removeGrid()
    drawGrid(gridSize);
}

//Function to draw grid size based on input
function drawGrid(num) {
    for (let i = 0; i < num * num; i++) {
        const divItem = document.createElement("div");
        divItem.classList.add("grid-item");
        drawSection.appendChild(divItem);
        divItem.style.cssText = `border: 1px solid lightgrey; flex-basis: ${100 / num}%;`;
    }
    colorPick();
}

//Pick pen color from pop up
function colorPick() {
    const penColor = document.querySelectorAll(".grid-item");
    penColor.forEach((item) => {
        item.addEventListener("pointerdown", ()=> {
            isDrawing = true;
        })
        item.addEventListener("pointermove", ()=> {
            if (isDrawing === false) return;
            if (isErasing) {
                item.style.backgroundColor = "";
              } else {
                item.style.backgroundColor = colorChoice.value;
              }
        })
    })
    document.addEventListener("pointerup", ()=> {
        isDrawing = false;
    })
}

//Reset the grid to default background color
function resetGrid() {
    const reset = document.querySelectorAll(".grid-item");
    reset.forEach((reset)=> {
        reset.style.backgroundColor = "";
    })
}

//Strips the grid from the container when selecting new dimensions
function removeGrid() {
    drawSection.textContent = "";
}

let isErasing = false; //Set default status of Eraser button
let isDrawing = false; //Prevents drawing until 'pointerdown' eventListener fires

output.innerText = `${slider.value} x ${slider.value}`; // Default slider value
drawGrid(parseInt(slider.value)); //Set the initial grid


