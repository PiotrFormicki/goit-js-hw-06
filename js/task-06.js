const inputValid = document.getElementById("validation-input");
let check = inputValid.value;
const symbols = inputValid.getAttribute("data-length");
inputValid.addEventListener("blur", verify);
function verify() {
  check = inputValid.value;

  if (check.length == symbols) {
    console.log("Hello there!");
    inputValid.classList.add("valid");
    inputValid.classList.remove("invalid");
  } else if (check === "") {
    console.log("Please fill all the gaps!");
    inputValid.classList.add("invalid");
    inputValid.classList.remove("valid");
  } else {
    console.log("Invalid password!");
    inputValid.classList.add("invalid");
    inputValid.classList.remove("valid");
  }
}
