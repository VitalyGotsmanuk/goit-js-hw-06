function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const butn = document.querySelector(`.change-color`);
const bodyColor = document.querySelector(`body`);
const colorValue = document.querySelector(`.color`)

//console.dir(bodyColor);
// console.log(bodyColor.style.backgroundColor);
//console.log(colorValue.textContent);

butn.addEventListener(`click`, handlerClick);

function handlerClick (evt){
  let randmColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randmColor;
  colorValue.textContent = randmColor;
};

