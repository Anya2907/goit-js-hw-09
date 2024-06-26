const formData = {
    email: "",
    message: "",
}

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);


function onInput(evt) {    
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();    
    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));    
}

const data = JSON.parse(localStorage.getItem("feedback-form-state"));

if (data) {
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;    
} else {
    form.elements.email.value = '';
    form.elements.message.value = '';
    
}

function onSubmit(evt) {
    evt.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    formData.email = email;
    formData.message = message;    

    if (email === '' || message === '') {
        alert("Fill please all fields");        
    }else if (formData) {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        form.reset();
    }
}


