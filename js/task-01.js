const item = document.querySelectorAll(".item");

const liValue = item.length;
const getEverything = () => {
  console.log("Number of categories: " + liValue);
};

//   for (const part of item) {
//     let category = part.querySelector("h2").innerHTML;
//     let unordList = part.querySelector("ul");
//     let categoryItemQuant = unordList.children.length;
//     console.log(`Category: ${category}`);
//     console.log(`Elements: ${categoryItemQuant}`);
//   }
// };
getEverything();
const yep = () => {
  item.forEach((part) => {
    let category = part.querySelector("h2").innerHTML;
    let unordList = part.querySelector("ul");
    let categoryItemAmount = unordList.children.length;
    console.log(`Category: ${category}`);
    console.log(`Elements: ${categoryItemAmount}`);
  });
};

yep();
