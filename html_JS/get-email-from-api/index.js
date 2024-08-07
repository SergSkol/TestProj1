import { getPinFromEmail } from './emailUtils.js';

// Selecting page elements
const username = document.getElementById('username').value;
const submit = document.getElementById('submit');
const responseField = document.getElementById('responseField');

// display results to webpage
function displayResponse(event){
    event.preventDefault();
    getPinFromEmail(username, responseField);
}

submit.addEventListener('click', displayResponse);
