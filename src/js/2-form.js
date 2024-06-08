const formData = {
    email: " ",
    message: " ",
}
// const formData = {
//     email: "neplokh@ukr.net",
//     message: "Hello",
// }

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInput);
// form.addEventListener('submit', onSubmit);

function onInput(evt) {
    formData.email = evt.currentTarget.elements.email.value;
    formData.message = evt.currentTarget.elements.message.value;    
}



console.log(formData);
localStorage.setItem("feedback-form-state", JSON.stringify(formData));