const isCargoTooTall = (yPos, cargoHeight, grid) => {
  const gridHeight = grid.length;

  if (yPos + cargoHeight > gridHeight) {
    return true;
  } else {
    return false;
  }
};
