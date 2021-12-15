export function checkWin(correct, wrong, word) {
  var status = "win";

  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = " ";
    }
  });
  if (wrong === 6) {
    status = "loss";
  }
  return status;
}
