const boxDiv = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const numberInput = document.querySelector("[type='number']");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
createButton.addEventListener("click", create);
destroyButton.addEventListener("click", clear);
function clear() {
  boxDiv.innerHTML = "";
}
function create() {
  let boxesToCreate = numberInput.value;

  for (let collection = 0; collection <= boxesToCreate - 1; collection++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("boxes__div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.setAttribute("id", `newDiv ${[collection + 1]}`);

    let size = collection * 10 + 30;
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    boxDiv.appendChild(newDiv);
  }
}
