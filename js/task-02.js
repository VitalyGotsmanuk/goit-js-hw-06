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

ingredients.forEach(element => {
    const li = document.createElement(`li`);
    li.textContent = [element];
    li.classList.add(`item`);
    list.append(li);
});

// console.log(...list);