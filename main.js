const divContainer = document.getElementsByClassName("grid-container")[0];

const numOfSquares = 16;
const side = divContainer.offsetWidth / Math.sqrt(numOfSquares);


// Filling the grid with squares
for (let i = 0; i < numOfSquares; i++) {
  let div = document.createElement("div");

  div.className = "square";
  div.style.boxSizing = "border-box";
  div.style.border = "solid 2px black";
  [div.style.width, div.style.height] = [`${side}px`, `${side}px`];

  divContainer.appendChild(div);
}
