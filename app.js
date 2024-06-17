/*-------------------------------- Constants --------------------------------*/
// const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const calculator = document.querySelector('#calculator');
// console.log(calculator)
const display = document.querySelector('.display')
console.log(display)
/*-------------------------------- Variables --------------------------------*/
let operator = null
let result = null
let firstNo = []
let secondNo = []
/*------------------------ Cached Element References ------------------------*/
const numOne = parseInt(firstNo.join(''))
const numTwo = parseInt(secondNo.join(''))
/*----------------------------- Event Listeners -----------------------------*/
//This forEach add an eventListener to all buttons, It maybe more eficient to use event delegation.
// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         console.log(event.target.innerText)
//     })
// })

//Using event delegation
calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
if (event.target.innerText === 'C') {

}

    // Example
    if (event.target.innerText === 'C') {
        reset()
    }else if (event.target.classList.contains('number') && !operator) {
        //Save innerText of the event
        let buttonVal = event.target.innerText
        //Push the value to the firstNo array
        firstNo.push(buttonVal)
        //Displaing the choosen numbers              
        display.innerText = firstNo.join('')
        console.log(`first number type ${firstNo}`)
    }else if (event.target.innerText === '*', '+', '/', '-' && event.target.innerText !== '=' && !event.target.classList.contains('number')) {
        operator = event.target.innerText
        console.log(`This is an operator ${operator}`)
    }else if (event.target.classList.contains('number') && operator) {
        let buttonValTwo = event.target.innerText
        secondNo.push(buttonValTwo)
        console.log(`Second number type ${secondNo}`)
        display.innerText = `${secondNo.join('')}`
    }else if (event.target.innerText === '=') {
        calculate()
        display.innerText = `${result}`
    }
})
// Example


/*-------------------------------- Functions --------------------------------*/

const calculate = () => {
    const numOne = parseInt(firstNo.join(''))
    const numTwo = parseInt(secondNo.join(''))

    if (operator === '/') {
        result = numOne / numTwo
    }else if (operator === '*') {
        result = numOne * numTwo
    }else if (operator === '-') {
        result = numOne - numTwo
    }else if (operator === '+') {
        result = numOne + numTwo
    }
    console.log(`Result ${result}, first ${firstNo}, Second ${secondNo}`)
}

const reset = () => {
    display.innerText = ''
    result = null
    firstNo = [];
    secondNo = [];
    operator = null
    console.log(`Result: ${result}, first: ${firstNo}, second: ${secondNo}`)
}

