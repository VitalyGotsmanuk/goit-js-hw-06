const inputData = document.querySelector(`#name-input`);
const spanData = document.querySelector(`#name-output`);

//console.dir(inputData);
//console.dir(spanData);
//console.log(spanData.textContent); //шлях до значення "Anonymous", сюди треба підставити, те що будуть вводити. з innerHTML теж працює.

inputData.addEventListener("input", hendlerInsert);

function hendlerInsert (evt){
    const inputValue = evt.currentTarget.value.trim(); //.trim() - прибирає пробіли на початку та наприкінці строки.
    spanData.textContent = inputValue;

    //console.log(spanData.innerHTML);
    //console.log(spanData.textContent);

    if (inputValue === "") {
        spanData.textContent = "Anonymous"; 
        //inputData.placeholder = "Please enter your name";
    }
};