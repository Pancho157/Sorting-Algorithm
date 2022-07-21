
var colsRange = document.getElementById("colsQuantity");
var toDisplayColsQuantity = document.getElementById("colsValue");

var speedRange = document.getElementById("speedRange");
var toDisplaySpeedQuantity = document.getElementById("speedValue");

// Sets the numbers under the input Ranges when DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  toDisplayColsQuantity.innerHTML = colsRange.value;

  toDisplaySpeedQuantity.innerHTML = speedRange.value + " ms";
  delay = speedRange.value;
});

// Sets the numbers under the input Ranges when input value changes
document.getElementById("colsQuantity").addEventListener("change", function () {
  toDisplayColsQuantity.innerHTML = colsRange.value;
});

document.getElementById("speedRange").addEventListener("change", function () {
  toDisplaySpeedQuantity.innerHTML = speedRange.value + " ms";
  delay = speedRange.value;
});
