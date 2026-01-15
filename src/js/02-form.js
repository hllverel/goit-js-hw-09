'use strict';

const feedbackForm = document.querySelector(".feedback-form");
const textarea = {
    email: feedbackForm.elements.email,
    message: feedbackForm.elements.message
};
const localStorageKey = "feedback-form-state";
const inputInfo = localStorage.getItem(localStorageKey);

feedbackForm.addEventListener("input", event => {
    const currentData = {
        email: textarea.email.value,
        message: textarea.message.value
    };
    localStorage.setItem(localStorageKey, JSON.stringify(currentData));
});

const parsedData = JSON.parse(localStorage.getItem(localStorageKey));
textarea.email.value = parsedData.email ?? "";
textarea.message.value = parsedData.message ?? "";

feedbackForm.addEventListener("submit", event => {
    event.preventDefault();
    
    const form = event.target;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    if (email === "" || message === "") {
        alert("All form fields must be filled in!")
    };

    const feedback = {
        email: email.trim(),
        message: message.trim(),
    };
    
    console.log(feedback);
    localStorage.removeItem(localStorageKey);
    form.reset();
});