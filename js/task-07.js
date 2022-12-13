const handleInput = (e) => {
  document.querySelector("span#text").style.fontSize = e.target.value + "px";
};

document
  .querySelector("input#font-size-control")
  .addEventListener("input", handleInput);
