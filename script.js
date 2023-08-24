//Function to draw grid size based on input
function drawGrid(num) {
    const drawSection = document.querySelector(".draw-section");
    for (let i = 0; i < num * num; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        drawSection.appendChild(gridItem);
        gridItem.style.cssText = `border: 1px solid #666; flex-basis: ${100 / num}%;`;
    }
    colorPicker();
}

//Pick pen color from pop up
function colorPicker() {
    const penColor = document.querySelectorAll(".grid-item");
    const colorChoice = document.querySelector("#pen-color");
    colorChoice.addEventListener("input", ()=> {
        penColor.forEach((penColor)=>{
            penColor.addEventListener("mouseenter", ()=> {
                penColor.style.backgroundColor = colorChoice.value;
            })
        })
    })
    penColor.forEach((penColor)=>{
        penColor.addEventListener("mouseenter", ()=> {
            penColor.style.backgroundColor = colorChoice.value;
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
    const num = prompt("Please pick a draw size between 2 and 70", "(e.g '16' will create a '16x16' grid)");
    if (num >= 2 && num <= 70) {
        drawGrid(num);
    } else {
        alert("You need to pick between 2 and 70");
    }
});

//Strips the grid from the container when selecting new dimensions
function removeGrid() {
    const removeSection = document.querySelector(".draw-section");
    removeSection.textContent = "";
}