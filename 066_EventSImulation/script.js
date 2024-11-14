const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

// const intervalId = setInterval(() => {
//     if (count > 999){
//         clearInterval(intervalId)
//     }
//     addCardBtn.click()
// }, 5)


// setTimeout(() => {
//     console.log('Input Focused');
//     input.focus()

// }, 2000)


// setTimeout(() => {
//     console.log('Input Blurred');
//     input.blur()
// }, 3000)


// setTimeout(() => {
//     console.log('Form Submitted');
//     form.submit()
// }, 3000)


// setTimeout(() => {
//     console.log('Form Reset');
//     form.reset()
// }, 3000)
