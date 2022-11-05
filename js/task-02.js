const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let list = document.getElementById("ingredients");

const scriptForLi = () => {
  ingredients.forEach((element) => {
    const item = document.createElement("li");
    item.innerHTML += element;
    item.classList.add("item");
    list.appendChild(item);
  });
};
scriptForLi();
