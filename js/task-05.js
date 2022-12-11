const handleInput = () => {
  let nameInput = document.querySelector("#name-input");
  document.querySelector("span#name-output").innerText =
    nameInput.value == "" ? "Anonymous" : nameInput.value;
};

document.querySelector("#name-input").addEventListener("input", handleInput);
