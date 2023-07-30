const elements = {
    loginForm: document.querySelector(`.login-form`),
};


//console.dir(elements.loginForm.elements);
//console.dir(elements.loginForm);

elements.loginForm.addEventListener(`submit`, handlerSubmit);

function handlerSubmit(evt) {
    
    evt.preventDefault();
    //console.log(evt.currentTarget.elements);

    const {email, password} = evt.currentTarget.elements;
      
    //console.log(email.value);
    //console.log(password.value);
    if (password.value === "" || email.value === ""){ 
            //console.log(email.value);
            alert(`Увага! Всі поля повинні бути заповнені.`);
    } else {
        const userCard = {
        email: email.value,
        password: password.value, };
            
        console.log(`E-mail:`, userCard.email);
        console.log(`Password:`, userCard.password);
    };
};



//alert(`ALARM!!!!`);

// elements.loginForm.addEventListener("blur", () => {
//     elements.loginForm.elements.value = "";
//   });

