const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`);

// const li = document.createElement(`li`);

function createList(arr) {
  arr.forEach(element => {
    const li = document.createElement(`li`);
    li.textContent = [element];
    li.classList.add(`item`);
    list.append(li);
  });
}
createList (ingredients);

// console.log(...list);