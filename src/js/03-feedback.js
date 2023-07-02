
const formEl = document.querySelector(".feedback-form")
const LS_KEY_FORM="feedback-form-state"
var throttle = require('lodash.throttle');
formEl.addEventListener("input", throttle(handlerInput, 500, { 'leading': false }))
formEl.addEventListener("submit", onSubmit)
window.addEventListener("load", lSHistory)
let data = {};


function handlerInput(evt) {
    data[evt.target.name] = evt.target.value.trim()
    localStorage.setItem(LS_KEY_FORM, JSON.stringify(data))
}

function onSubmit(evt) {
    evt.preventDefault();
    console.log(data);
    evt.target.reset();
    localStorage.removeItem(LS_KEY_FORM);
    data = {};
}


function lSHistory() {
    try {
        const lSGetItem = localStorage.getItem(LS_KEY_FORM)
        if (!lSGetItem) return;
        data = JSON.parse(lSGetItem);
        Object.entries(data).forEach(([key, val]) => {
            formEl.elements[key].value = val;
        })
    } catch (error) {
        console.log(error.message);
    }
    
}

// const data = Object.fromEntries(new FormData(evt.target))