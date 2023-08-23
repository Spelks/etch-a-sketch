
//Function to draw grid size based on input
function drawGrid(num) {
    const drawSection = document.querySelector(".draw-section");
    for (let i = 0; i < num * num; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        drawSection.appendChild(gridItem);
        gridItem.style.cssText = `border: 1px solid #666; width: ${400 / num}px; height: ${400 / num}px;`;
    }
    penPlain()
}

//Default dark colored pen
function penPlain() {
    const defaultPen = document.querySelectorAll(".grid-item");
    defaultPen.forEach((defaultPen)=>{
        defaultPen.addEventListener("mouseenter", ()=> {
            defaultPen.style.backgroundColor = "#333";
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
        // reset.style.cssText = `border: 1px solid #333; background-color: azure;`;
        reset.style.backgroundColor = "azure";
        reset.style.border = "1px solid #666";
    })
}

//Button to set the grid size
gridBtn = document.querySelector(".grid-btn");
gridBtn.addEventListener("click", ()=> {
    removeGrid()
    const num = prompt("Please pick a draw size between 16 and 70", "(e.g '16' will create a '16x16' grid)");
    if (num >= 16 && num <= 70) {
        // const gridItem = document.querySelector(".draw-section");
        // gridItem.classList.add("grid-item");
        // gridItem.style.cssText = `background-color: green;`
        drawGrid(num);
    } else {
        alert("You need to pick between 16 and 70");
    }
});

//Strips the grid from the container when selecting new dimensions
function removeGrid() {
    const removeSection = document.querySelector(".draw-section");
    removeSection.textContent = "";
}

