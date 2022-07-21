async function selectionSort() {
  const bars = document.querySelectorAll(".algorithm__bar");
  for (let i = 0; i < bars.length; i++) {
    // Stops algorithm when stop button is pressed
    if (hasPressedStop == true) return;

    let min_index = i;

    // Sets bar in comparation as light green
    bars[i].style.background = "#42D674";
    for (let j = i + 1; j < bars.length; j++) {
      if (hasPressedStop == true) {
        return;
      }
      // Sets current bar bg as yellow
      bars[j].style.background = "#EAEBB2";

      await delayTime(delay);

      if (hasPressedStop == true) return;

      if (
        parseInt(bars[j].style.height) < parseInt(bars[min_index].style.height)
      ) {
        if (min_index !== i) {
          // new min_index is found so change prev min_index color back to normal
          bars[min_index].style.background = "#e43f5a";
        }
        min_index = j;
      } else {
        // if currennt comparision is higher than min_index change is back to green
        bars[j].style.background = "#e43f5a";
      }
    }
    await delayTime(delay);
    if (hasPressedStop == true) {
      return;
    }
    swap(bars[min_index], bars[i]);

    // change the min element index back to normal as it is swapped
    bars[min_index].style.background = "#e43f5a";

    // change the sorted elements color to green
    bars[i].style.background = "#2BA153";
  }
}
