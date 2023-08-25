//Function to draw grid size based on input
function drawGrid(num) {
    const drawSection = document.querySelector(".draw-section");
    for (let i = 0; i < num * num; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        drawSection.appendChild(gridItem);
        gridItem.style.cssText = `border: 1px solid lightgrey; flex-basis: ${100 / num}%;`;
    }
    colorPicker();
}

//Pick pen color from pop up
function colorPicker() {
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
                penColor.style.backgroundColor = colorChoice.value;
            }
        })
    })
}

//Attach resetGrid function to button
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetGrid);

//Reset the grid to default background color
function resetGrid() {
    const reset = document.querySelectorAll(".grid-item");
    reset.forEach((reset)=> {
        reset.style.backgroundColor = "azure";
    })
}

const slider = document.querySelector("#slider-range");
const output = document.querySelector("#grid-size");

output.innerText = `${slider.value} x ${slider.value}`; // Default slider value


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
