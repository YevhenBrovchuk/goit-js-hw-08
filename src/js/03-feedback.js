
const formEl = document.querySelector(".feedback-form")


formEl.addEventListener("input", handlerInput)
const data = {};
function handlerInput(evt) {
    data[evt.target.name] = evt.target.value
    
}


// const data = Object.fromEntries(new FormData(evt.target))