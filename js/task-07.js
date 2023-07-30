const inputData = document.querySelector(`#font-size-control`);
const spanText = document.querySelector(`#text`);

//console.dir(inputData);
//console.dir(spanText);
//console.log(spanText.style.fontSize); // шлях до розміру шрифта в стилях об'єкту.

inputData.addEventListener("input", hendlerInsert);

function hendlerInsert (evt){
   
   //console.dir(evt.currentTarget);
   console.dir(evt.currentTarget.value); // Значення від  min="16" до max="96"
   spanText.style.fontSize = `${evt.currentTarget.value}px` // Для стилів треба зробити шаблонний рядок, де в змінній вказати зачення, що передаються, та одиниці вимірювання.

   console.log(spanText.style.fontSize);
};