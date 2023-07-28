const inputData = document.querySelector(`#validation-input`);

//console.dir(inputData);
//console.dir(inputData.classList); // шлях до списку класів.
//console.log(inputData.dataset.length); // data-length="6"

//inputData.addEventListener("input", hendlerCheck);
inputData.addEventListener("blur", hendlerCheck);

function hendlerCheck (evt){
    const inputValue = evt.currentTarget; // Створюємо змінну для поточного об'єкту і всі зміни та порівняння проводимо через цю змінну.

    console.log(inputValue.value.trim().length); // Кількість символів
    // якщо кількість символів що ввели не дорівнює 6, то рамка червона, яkщо 6  - зелена. 

    if (inputValue.value.trim().length === Number(inputData.dataset.length)){
        inputValue.classList.remove("invalid"); 
        inputValue.classList.add("valid");

        console.log(`Рамка зелена!`);
        console.dir(inputData.classList.value);
        
    } else {
        inputValue.classList.remove("valid"); 
        inputValue.classList.add("invalid");
                          
        console.log(`Рамка червона!`);
        console.dir(inputData.classList.value);    
    }
}
