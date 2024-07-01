const gridContainer = document.querySelector(".grid-container");
const computedGridContainer = getComputedStyle(gridContainer);

numOfSideSquares = 20;
const borderWidth = parseFloat(computedGridContainer.borderWidth)
const side = (gridContainer.offsetWidth - 2*borderWidth) / numOfSideSquares;


// Filling the grid with squares
for (let i = 0; i < numOfSideSquares*numOfSideSquares; i++) {
  let div = document.createElement("div");

  div.classList.add("square");
  div.style.border = "solid 1px black";
  [div.style.width, div.style.height] = [`${side}px`, `${side}px`];

  gridContainer.appendChild(div);
}
