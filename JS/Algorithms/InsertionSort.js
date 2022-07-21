async function insertionSort() {
  const bars = document.querySelectorAll(".algorithm__bar");

  // Sets first bar bg as green
  bars[0].style.background = "#2BA153";

  for (let i = 1; i < bars.length; i++) {
    // Stops algorithm when stop button is pressed
    if (hasPressedStop == true) return;

    let j = i - 1; // Last iterated bar
    let key = bars[i].style.height;
    // Compares key element with the previous elements
    // If the previous elements are greater than key element, moves the previous element to the next position

    // Sets bar bg as yellow
    bars[i].style.background = "#EAEBB2";

    await delayTime(delay);

    // Stops algorithm when stop button is pressed
    if (hasPressedStop == true) {
      return;
    }

    // Iterates till it founds a shorter bar than the key
    while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {
      // Stops algorithm when stop button is pressed
      if (hasPressedStop == true) {
        return;
      }

      // Sets bar bg as yellow and sets current bar height as last bar height
      bars[j].style.background = "#EAEBB2";
      bars[j + 1].style.height = bars[j].style.height;

      j--;

      await delayTime(delay);

      if (hasPressedStop == true) return;

      // Sets sorted barrs bg as green
      for (let k = i; k >= 0; k--) {
        bars[k].style.background = "#2BA153";
      }
    }

    // Sets last sorted bar height as it originally was
    bars[j + 1].style.height = key;
  }
}
