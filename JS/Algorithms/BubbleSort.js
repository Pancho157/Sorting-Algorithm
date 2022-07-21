async function bubbleSort() {
  const bars = document.querySelectorAll(".algorithm__bar");
  // First loop iterates each bar
  // Second loop iterates the array till the last sorted bar
  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      // Stops algorithm when the stopButton is pressed
      if (hasPressedStop == true) return;

      // Puts red bg on bars
      bars[j].style.background = "#EAEBB2";
      bars[j + 1].style.background = "#EAEBB2";

      await delayTime(delay);

      // Swaps bars if left is higher than the right one
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        swap(bars[j], bars[j + 1]);
      }

      // Sets yellow bg on comparing bars
      bars[j].style.background = "#e43f5a";
      bars[j + 1].style.background = "#e43f5a";
    }
    // Sets green bg on already sorted bars
    bars[bars.length - 1 - i].style.background = "#2BA153";
  }
  // Sets green bg on last bar
  bars[0].style.background = "#2BA153";
}
