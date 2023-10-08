const getIndex = (grid) => {
  if (!grid.length) return 0;

  for (let row = 0; row < grid.length; row++) {
    if (grid[0].every((el) => el === 0)) return 0;
    if (grid[row].every((el) => el === 0)) return row - 1;
    if (row === grid.length - 1) return grid.length - 1;
  }
};
