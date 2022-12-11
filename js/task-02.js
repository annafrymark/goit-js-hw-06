const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = [];

ingredients.forEach(function callback(ingredient, index) {
  elements.push(document.createElement("li"));
  elements[index].textContent = ingredient;
  elements[index].classList.add("item");
});

document.querySelector("ul#ingredients").append(...elements);
