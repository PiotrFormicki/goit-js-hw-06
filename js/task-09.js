const colorChangeButton = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const body = document.querySelector("body");

colorValue.textContent = "#fff";

colorChangeButton.addEventListener("click", () => {
  let currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  colorValue.textContent = currentColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
