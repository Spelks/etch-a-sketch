const drawSection = document.querySelector(".draw-section");

for (let i = 0; i < 256; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.cssText = "border: 1px solid #333;";
    drawSection.appendChild(gridItem);
}

const defaultPen = document.querySelectorAll(".grid-item");
defaultPen.forEach((defaultPen)=>{
    defaultPen.addEventListener("mouseenter", ()=> {
        defaultPen.style.cssText = "background-color: #333";
    })
})

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetGrid);

function resetGrid() {
    const reset = document.querySelectorAll(".grid-item");
    reset.forEach((reset)=> {
        reset.style.cssText = "border: 1px solid #333; background-color: azure;";
    })
}

