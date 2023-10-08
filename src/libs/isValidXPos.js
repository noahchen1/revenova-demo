const isValidXPos = (xPos, input) => {
  if (xPos < 0 || isNaN(xPos) || input.length !== 2) {
    return false;
  } else {
    return true;
  }
};
