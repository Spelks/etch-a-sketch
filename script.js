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

