const handleInput = (e) => {
  let dataLength = parseInt(e.target.getAttribute("data-length"));
  e.target.className = "";
  if (e.target.value.length === dataLength) {
    e.target.classList.add("valid");
  } else {
    e.target.classList.add("invalid");
  }
};

document
  .querySelector("#validation-input")
  .addEventListener("blur", handleInput);
