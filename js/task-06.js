const inputData = document.querySelector(`#validation-input`);

//console.dir(inputData);
//console.dir(inputData.classList); // шлях до списку класів.
//console.log(inputData.dataset.length); // data-length="6"

//inputData.addEventListener("input", hendlerCheck);
inputData.addEventListener("blur", hendlerCheck);

function hendlerCheck (evt){
    const inputValue = evt.currentTarget.value;

    //console.log(inputValue.length); // Кількість символів
    // якщо кількість символів що ввели быльша за значення обмеження (6), то рамка червона, ящо меньша - зелена. 
    if (inputValue.length > inputData.dataset.length){
        
        inputData.classList.value = "invalid"; 
                  
        console.log(`Рамка червона!`);
        console.dir(inputData.classList.value); 
    } else {
        inputData.classList.value = "valid";

        console.log(`Рамка зелена!`);
        console.dir(inputData.classList.value);
    }
}
