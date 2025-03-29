const colors = ["red", "blue", "green", "yellow", "orange", "purple", "black", "pink"];
const palette = document.getElementById("palette");
let selectedColor = "black";
let isDrawing = false;

// Create color palette
colors.forEach(color => {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color");
    colorDiv.style.backgroundColor = color;
    colorDiv.addEventListener("click", () => selectedColor = color);
    palette.appendChild(colorDiv);
});

// Create grid
const grid = document.getElementById("grid");
for (let i = 0; i < 400; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mousedown", () => {
        isDrawing = true;
        cell.style.backgroundColor = selectedColor;
    });
    cell.addEventListener("mouseover", () => {
        if (isDrawing) cell.style.backgroundColor = selectedColor;
    });
    grid.appendChild(cell);
}
document.addEventListener("mouseup", () => isDrawing = false);

// Clear button functionality
document.getElementById("clear-btn").addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach(cell => {
        cell.style.backgroundColor = "white";
    });
});
