
var throttle = require('lodash.throttle');


const formElement = document.querySelector('form');

if(localStorage.getItem('feedback-form-state')){
    formElement.firstElementChild.firstElementChild.value = JSON.parse(localStorage.getItem('feedback-form-state')).email
    formElement.children[1].lastElementChild.value = JSON.parse(localStorage.getItem('feedback-form-state')).message
}


formElement.addEventListener('input', throttle(() => {
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email : formElement.firstElementChild.firstElementChild.value,
        message : formElement.children[1].lastElementChild.value
    }))
}, 500))

formElement.addEventListener('submit', (e) =>{
    e.preventDefault()
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email : formElement.firstElementChild.firstElementChild.value,
        message : formElement.children[1].lastElementChild.value
    }))
    if(formElement.firstElementChild.firstElementChild.value != '' && formElement.children[1].lastElementChild.value != ''){
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')))
        formElement.reset()
        localStorage.removeItem('feedback-form-state')
    }
    else{
        alert("Both fields must be completed")
    }

})
