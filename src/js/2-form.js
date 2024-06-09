const formData = {
    email: "",
    message: "",
}

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInput);
// form.addEventListener('submit', onSubmit);

function onInput(evt) {    
    formData.email = form.elements.email.value;
    formData.message= form.elements.message.value;
     
}

console.log(formData);
localStorage.setItem("feedback-form-state", JSON.stringify(formData));