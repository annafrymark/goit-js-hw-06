function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();
  const elements = [];
  for (let i = 0; i < amount; i++) {
    elements.push(document.createElement("div"));
    elements[i].style.width = (30 + i * 10).toString() + "px";
    elements[i].style.height = elements[i].style.width;
    elements[i].style.backgroundColor = getRandomHexColor();
    elements[i].style.color = elements[i].style.backgroundColor;
  }
  document.querySelector("div#boxes").append(...elements);
}

const handleCreateBoxes = () => {
  createBoxes(parseInt(document.querySelector("input").value));
};

function destroyBoxes() {
  document.querySelector("div#boxes").textContent = "";
}

document
  .querySelector("button[data-create]")
  .addEventListener("click", handleCreateBoxes);

document
  .querySelector("button[data-destroy]")
  .addEventListener("click", destroyBoxes);
