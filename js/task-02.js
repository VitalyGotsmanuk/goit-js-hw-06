const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`);

function createList(arr) {
  
  const myList= [];
  
  arr.forEach(element => {
    const li = document.createElement(`li`);
    li.textContent = [element];
    li.classList.add(`item`);
    myList.push(li)
  });
  
  console.dir(myList);
  
  list.append(...myList)
}
createList (ingredients);

// console.log(...list);