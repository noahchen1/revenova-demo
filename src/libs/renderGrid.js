const renderGrid = (grid) => {
  const container = document.getElementById("table-container");
  const gridElement = document.getElementById("grid");
  gridElement.innerHTML = "";

  for (let i = 0; i < grid.length; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < grid[i].length; j++) {
      const cell = document.createElement("td");

      if (grid[i][j] !== 0) {
        cell.classList.add("cargo-" + grid[i][j]);
      }

      row.appendChild(cell);
    }

    gridElement.insertBefore(row, gridElement.children[0]);
  }

  container.scrollTop = container.scrollHeight;
};
