
const elements = {
    count: document.querySelector(`#value`), 
    minus: document.querySelector(`[data-action="decrement"]`), 
    plus: document.querySelector(`[data-action="increment"]`),
};

let counterValue = 0;

elements.minus.addEventListener(`click`, hendlerClick);
elements.plus.addEventListener(`click`, hendlerClick);

function hendlerClick (evt){

    //console.log (evt);
    //console.log (evt.currentTarget);
    //console.log (evt.srcElement.dataset.action);

    switch (evt.srcElement.dataset.action) {
        case "decrement":
            //console.log (`-1`);
            counterValue -= 1;
            break;
        
        case "increment":
            //console.log (`+1`);
            counterValue += 1;
            break;
    }

    elements.count.innerHTML = counterValue;

    //console.log(`counterValue`, counterValue);
    //console.log(`span`, elements.count.innerHTML);
};

//console.log(elements.count);

//console.log(elements.minus);
//console.log(elements.plus);

//console.log(`counterValue`, counterValue);
//console.log(`span`, elements.count.innerHTML);