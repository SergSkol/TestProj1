'use strict';
// Information to reach API

// Selecting page elements
const inputField = document.getElementById('input');
const submit = document.getElementById('submit');
const responseField = document.getElementById('responseField');
const frame = document.getElementById('frame');

submit.addEventListener('click', displayResponse);

// display results to webpage
function displayResponse(event){
    event.preventDefault();
    responseField.value = inputField.value;
    frame.src = inputField.value;
}