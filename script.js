
//Function for 16*16 grid
function smallGrid() {
    const drawSection = document.querySelector(".draw-section");
    for (let i = 0; i < 256; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.cssText = "border: 1px solid #333;";
        drawSection.appendChild(gridItem);
    }
    penPlain()
}

//Default dark colored pen
function penPlain() {
    const defaultPen = document.querySelectorAll(".grid-item");
    defaultPen.forEach((defaultPen)=>{
        defaultPen.addEventListener("mouseenter", ()=> {
            defaultPen.style.cssText = "background-color: #333";
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
        reset.style.cssText = "border: 1px solid #333; background-color: azure;";
    })
}

smallGrid()

