const isCargoTooWide = (xPos, cargoWidth, grid) => {
  const gridLength = grid[0].length;

  if (xPos + cargoWidth > gridLength) {
    return true;
  } else {
    return false;
  }
};
