var gallonsInput = parseInt(prompt("How many gallons?"));

var convert = function(gallons) {
  alert("That's " + gallons * 3.785 + " liters.");
}

convert(gallonsInput);
