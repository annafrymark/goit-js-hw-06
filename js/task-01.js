document.addEventListener(
  "DOMContentLoaded",
  function () {
    const ListCategories = document.querySelectorAll("#categories > li");
    console.log(`Number of categories: ${ListCategories.length}`);

    ListCategories.forEach((e) => {
      console.log(`Category: ${e.querySelector("h2").textContent}`);
      console.log(`Elements: ${e.querySelector("ul").childElementCount}`);
    });
  },
  false
);
