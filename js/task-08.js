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
      
    console.log(email.value);
    console.log(password.value);
       
    const userCard = {
        email: evt.currentTarget.email.value,
        password: evt.currentTarget.password.value,
        };
            
        console.log(`E-mail:`, userCard.email);
        console.log(`Password:`, userCard.password);

};

elements.loginForm.addEventListener("blur", () => {
    elements.loginForm.elements.value = "";
  });
