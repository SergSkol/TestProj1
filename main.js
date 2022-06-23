'use strict';
// Information to reach API

// Selecting page elements
const inputField = document.getElementById('input');
const submit = document.getElementById('submit');
const responseField = document.getElementById('responseField');

submit.addEventListener('click', displayResponse);

// display results to webpage
function displayResponse(event){
    event.preventDefault();
    responseField.value = " result";
}