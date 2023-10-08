const loadCargos = async (input) => {
  const error = document.getElementById("error");
  const CARGO_DATA = DATA.CARGO_DATA;
  const inputArr = getInputArr(input);

  const placeCargo = async (input) => {
    const xPos = parseInt(input[0]);
    let yPos = 0;

    if (!isValidXPos(xPos, input)) {
      error.innerText = `${input} is not a valid input, please try again!`;
      error.classList.remove("hidden");

      return;
    }

    const type = input[1].toUpperCase();

    if (!isValidCargo(type)) {
      error.innerText = `${input} is not a valid input, please try again!`;
      error.classList.remove("hidden");

      return;
    }

    const cargo = CARGO_DATA[type];
    const cargoHeight = cargo.length;
    const cargoWidth = cargo[0].length;

    if (isCargoTooWide(xPos, cargoWidth, grid)) {
      error.innerText = `Cargo ${input} is too big and cannot be loaded!`;
      error.classList.remove("hidden");

      return;
    }

    while (isOccupied(xPos, yPos, cargoWidth, cargoHeight, grid, cargo)) {
      yPos++;

      if (isCargoTooTall(yPos, cargoHeight, grid)) {
        error.innerText = `Cargo ${input} is too big and cannot be loaded!`;
        error.classList.remove("hidden");

        return;
      }
    }

    for (let row = 0; row < cargoHeight; row++) {
      for (let col = 0; col < cargoWidth; col++) {
        if (cargo[row][col] === 1) {
          grid[yPos + row][xPos + col] = type;
        }
      }
    }
  };

  inputArr.forEach((input) => placeCargo(input));

  return grid;
};
