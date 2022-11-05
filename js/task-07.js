const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
let currentValue = input.value;
text.style.fontSize = currentValue + "px";

input.addEventListener("input", () => {
  currentValue = input.value;
  text.style.fontSize = currentValue + "px";
});
