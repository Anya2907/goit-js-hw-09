const formData = {
    email: "",
    message: "",
}

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

function onInput(evt) {    
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    
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

    const email = evt.currentTarget.elements.email.value;
    const message = evt.currentTarget.elements.message.value;

    if (!(email && message)) {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        form.reset();
    }
}


