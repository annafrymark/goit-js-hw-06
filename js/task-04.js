const handleClickDec = () => {
  let value = document.querySelector("#value");
  value.innerText = parseInt(value.innerText) - 1;
};

const handleClickInc = () => {
  let value = document.querySelector("#value");
  value.innerText = parseInt(value.innerText) + 1;
};

document
  .querySelector("div#counter button[data-action='decrement']")
  .addEventListener("click", handleClickDec);

document
  .querySelector("div#counter button[data-action='increment']")
  .addEventListener("click", handleClickInc);
