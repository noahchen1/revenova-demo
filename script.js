const form = document.getElementById("form");
const width = DATA.GRID_WIDTH;
const height = DATA.GRID_HEIGHT;

let grid = getGrid(width, height);

form.onsubmit = (e) => {
  e.preventDefault();

  const input = document.getElementById("input").value;
  const error = document.getElementById("error");
  const ans = document.getElementById("answer");

  grid = getGrid(width, height);

  error.classList.add("hidden");
  loadCargos(input).then((grid) => {
    renderGrid(grid);

    ans.innerText = `the highest 0-indexed y-axis that has an occupied square is ${getIndex(grid)}`;
  });
};

renderGrid(grid);
