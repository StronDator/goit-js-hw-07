"use strict";

const items = document.querySelectorAll(".item");
const numberOfcategories = `Number of categories: ${items.length}`;
console.log(numberOfcategories);

const sortedCategories = items.forEach((item) => {
  const headers = item.firstElementChild.textContent;
  const itemsByCategories = item.lastElementChild.children;

  console.log(`Category: ${headers}`);
  console.log(`Elements: ${itemsByCategories.length}`);
});
