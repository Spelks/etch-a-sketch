const resetBtn = document.querySelector(".reset-btn");
const slider = document.querySelector("#slider-range");
const output = document.querySelector("#grid-size");
const eraserBtn = document.querySelector(".eraser-btn");
const drawSection = document.querySelector(".draw-section");
const colorChoice = document.querySelector("#pen-color");
const gridBtn = document.querySelector(".grid-btn");
const gridStatus = document.querySelector(".grid-status");
const colorfestBtn = document.querySelector(".colorfest-btn");

resetBtn.addEventListener("click", resetGrid);
slider.addEventListener("input", handleSliderInput);
eraserBtn.addEventListener("click", toggleEraser);
gridBtn.addEventListener("click", toggleGrid);
colorfestBtn.addEventListener("click", colorFest);

//Toggles the eraser effect on or off based on isErasing and eraserBtn status
function toggleEraser() {
    isErasing = !isErasing;
    drawSection.classList.toggle("eraser-mode", isErasing); //applies the mouse eraser icon
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
        if (!isGrid) {
            divItem.classList.add("grid-toggle");
        }
        drawSection.appendChild(divItem);
        divItem.style.cssText = `flex-basis: ${100 / num}%;`;
    }
    colorPick();
}

//Pick pen color from pop up
function colorPick() {
    const penColor = document.querySelectorAll(".grid-item");
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFC300", "#FF33EA", "#33EAFB", "#FF9933", "#33FFD1", "#E533FF", "#FF3333"];
    penColor.forEach((item) => {
        item.addEventListener("pointerdown", ()=> {
            isDrawing = true;
        })
        item.addEventListener("pointermove", ()=> {
            if (isDrawing === false) return;
            if (isErasing) {
                item.style.backgroundColor = "";
              } else if (isColorFest) {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                item.style.backgroundColor = randomColor;
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

//Grid function to apply or remove 1px border 'grid' based on gridBtn state
function toggleGrid() {
    const gridBorder = document.querySelectorAll(".grid-item");
    isGrid = !isGrid;
    gridBorder.forEach((item) => {
        if (isGrid) {
            item.classList.remove("grid-toggle");
            gridStatus.innerText = "On";        
        } else {
            item.classList.add("grid-toggle");
            gridStatus.innerText = "Off";
        }
    })
}

function colorFest() {
    isColorFest = !isColorFest;
    colorfestBtn.classList.toggle("active", isColorFest);
}

let isErasing = false; //Set default status of Eraser button
let isDrawing = false; //Prevents drawing until 'pointerdown' eventListener fires
let isGrid = !true; //Status of grid on the draw area
let isColorFest = false; //Dormant default status of the multi-color pen tool

output.innerText = `${slider.value} x ${slider.value}`; // Default slider value
gridStatus.innerText = "Off"; //global default grid text

drawGrid(parseInt(slider.value)); //Set the initial grid


