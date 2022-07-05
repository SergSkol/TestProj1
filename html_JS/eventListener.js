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

//
}

var btn = document.getElementById('btn');

/* This sets the action to perform on a click event */
btn.onclick = function() {
    /* This changes the button's label */
    btn.innerHTML++;
}