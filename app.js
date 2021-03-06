const pixelCanvas = document.querySelector(".pixel-canvas");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");
const submitButton = document.querySelector(".submit");

window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", resetSize);
submitButton.addEventListener("click", changeSize);
 

//The starting canvas size
function setDefaultGrid() {
    setCanvasSize(20);
    fillGrid(20);
}

//Creates grid template for canvas
function setCanvasSize (size) {
    pixelCanvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

//Creates each div for canvas
function fillGrid (size) {
    for (let i = 0; i < size * size; i++) {
        
        const divGrid = document.createElement("div");
        divGrid.classList = "div-grid";
        divGrid.addEventListener("mouseover", fillColor);
        pixelCanvas.appendChild(divGrid);
        
    }
}

//Randomizes blue and green color values
function fillColor(e) {
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(20, ${randomG}, ${randomB})`;
}

//Changes canvas size
function changeSize() {
    let newSize = userInput.value;
  
    if (newSize !== null) {
      if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
        alert("Enter a number from 1-64");
      } else {
        clearGrid();
        setCanvasSize(newSize);
        fillGrid(newSize);
      }
    }
  }

//Removes the divs created by fillGrid function
function clearGrid() {
    const gridArray = Array.from(pixelCanvas.childNodes);
    gridArray.forEach((element) => {
      pixelCanvas.removeChild(element);
    });
  }

//Resets the grid to the original demensions 
function resetSize() {
    clearGrid();
    setDefaultGrid();
    clearFields();

}

//removes input filed dropdown menu
function clearFields() {
    document.getElementById("quantity").value="";
}