const isValidCargo = (cargoType) => {
  const types = ["O", "I", "S", "Z", "L", "J", "T"];

  if (types.includes(cargoType)) {
    return true;
  } else {
    return false;
  }
};
