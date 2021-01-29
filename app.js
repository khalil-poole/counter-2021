let count = 0;

const value = document.querySelector("#numerical") //Grabbing the attribute from the numerical-value class.
const decrease = document.querySelector('.btn-left') //How to control the buttons and the value on the screen
const reset = document.querySelector(".btn-reset") //How to control the buttons and the value on the screen
const increase = document.querySelector(".btn-right") //How to control the buttons and the value on the screen

decrease.addEventListener("click", function (e) { //The event listener will detect a click within the button, (e) is short for event
    const actions = e.currentTarget.classList; //Event of the current target will return the class list
    if (actions.contains("btn-left")) {
        count-- //count decreased by 1 because the action within the if statement contains btn-left.
    }
    value.textContent = count //Take the value above, and convert it into text to be manipulated.
})

increase.addEventListener("click", function (e) { //The event listener will detect a click within the button, (e) is short for event
    const actions = e.currentTarget.classList; //Event of the current target will return the class list
    if (actions.contains("btn-right")) {
        count++ //count increased by 1 because the action within the if statement contains btn-right.
    }
    value.textContent = count //Take the value above, and convert it into text to be manipulated.
})

reset.addEventListener("click", function (e) { //The event listener will detect a click within the button, (e) is short for event
    const actions = e.currentTarget.classList; //Event of the current target will return the class list
    if (actions.contains("btn-reset")) {
        count = 0 //count is reset to 0 because the action within the if statement contains btn-reset.
    }
    value.textContent = count //Take the value above, and convert it into text to be manipulated.
})

