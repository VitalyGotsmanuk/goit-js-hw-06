
const list = document.querySelectorAll(".item");
console.log('Number of categories:', list.length);

//console.log(list)
//console.log([...list])
//console.log(document.children)

//console.log('Category:', list[0].firstElementChild.textContent);
//console.log('Elements:', list[0].lastElementChild.children.length);

list.forEach ((list) => {
    console.log('Category:', list.firstElementChild.outerText);
    console.log('Elements:', list.lastElementChild.children.length);
});






