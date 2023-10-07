const isOccupied = (x, y, cargoWidth, cargoHeight, grid, cargo) => {
  for (let i = 0; i < cargoHeight; i++) {
    for (let j = 0; j < cargoWidth; j++) {
      if (grid[y + i][x + j] !== 0 && cargo[i][j] === 1) return true;
    }
  }

  return false;
};


