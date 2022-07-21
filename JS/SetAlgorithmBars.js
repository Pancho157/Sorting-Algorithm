const barsQuantity = document.getElementById("colsQuantity").value;

// Generates an array of intergers with the lenght indicated by the colsRange
var bars = Array.from(
  { length: barsQuantity },
  () => Math.floor(Math.random() * 29 + 1) // Math.random() * (max - min) + min
);

let barsContainer = document.getElementById("algorithm__algorithmContainer");

// Puts the initial bars of the algorithm
document.addEventListener("DOMContentLoaded", function () {
  bars.forEach((bar) => {
    barsContainer.innerHTML +=
      "<div class='algorithm__bar' style='height: " + bar * 10 + "px'></div>";
  });
});

// Generates an array of intergers with the lenght indicated by the colsRange and render each element as bars of the algorithm
document.getElementById("colsQuantity").addEventListener("change", function () {
  let barsQuantity = document.getElementById("colsQuantity").value;
  bars = Array.from(
    { length: barsQuantity },
    () => Math.floor(Math.random() * 29 + 1) // Math.random() * (max - min) + min
  );
  barsContainer.innerHTML = "";
  bars.forEach((bar) => {
    barsContainer.innerHTML +=
      "<div class='algorithm__bar' style='height: " + bar * 10 + "px'></div>";
  });
});

// Makes the swap of bars when called from an algorithm
function swap(bar1, bar2) {
  let temp = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = temp;
}

// Sets the delay of iterations in algorithms (called within algorithms)
function delayTime(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}
