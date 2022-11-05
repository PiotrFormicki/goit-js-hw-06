const buttonDecrement = document.querySelector(
  "button[data-action='decrement']"
);
const buttonIncrement = document.querySelector(
  "button[data-action='increment']"
);
const value = document.querySelector("#value");

let counterValue = 0;

buttonDecrement.addEventListener("click", () => {
  counterValue += -1;
  value.innerHTML = counterValue;
});
buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  value.innerHTML = counterValue;
});

// const clickerFml = () => {
//   counterValue += 1;
//   value.innerHTML = counterValue;
// };
// const clickerOmg=()=> {
//     counterValue+=-1;
//     value.innerHTML=counterValue;
// }
// buttonIncremenet.addEventListener("click", clickerFml);
// buttonDecremenet.addEventListener("click",clickerOmg);
