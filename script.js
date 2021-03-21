const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming!";
// letter index
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  // extract section of text from 0 (1st char) to idx
  textEl.innerText = text.slice(0, idx);
  // increase index by 1
  idx++;
  // if index reaches length of text, reset to 1
  if (idx > text.length) {
    idx = 1;
  }
  // call function every [speed]ms
  setTimeout(writeText, speed);
}
// listen for input in speedEl, change speed to 300 / value
speedEl.addEventListener("input", e => (speed = 300 / e.target.value));
