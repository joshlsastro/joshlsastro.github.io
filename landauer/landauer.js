function getNumber(id, minimum) {
  // Returns nonnegative number from document with the id id
  // and gives an alert if it goes below the minimum.
  var number;
  number = document.getElementById(id).valueAsNumber;
  if (number < minimum) {
    alert("Error: "+number+" is too small. It must be at least "+minimum+".");
    return minimum;
  } else {
    return number;
  }
}

function main() {
  var kB, temperature, opsPerInstruction, instructionsExecuted;
  kB = 1.380649e-23;
  temperature = getNumber("temperature", 0);
  opsPerInstruction = getNumber("opsPerInstruction", 1);
  instructionsExecuted = getNumber("instructionsExecuted", 0);
  var energy, energyPerBitOp;
  energyPerBitOp = kB * temperature * Math.LN2; // I don't know why Math.LN2 is in JavaScript, but it's convenient
  energy = energyPerBitOp * opsPerInstruction * instructionsExecuted; // Dimensional analysis
  document.getElementById("output").innerHTML = "Your computation requires " + energy + " Joules. 1 Joule is roughly the energy needed to lift an apple 1 meter up on Earth's surface.";
}
