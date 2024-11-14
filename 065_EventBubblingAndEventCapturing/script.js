const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')
 
// Key Note : alt + click --- duplicate or cursor duplicate

// 1.) Event Bubbling Method -------------

// window.addEventListener('click', (e) => {
//     console.log('6.Window Event Listener');
// })


// document.addEventListener('click', (e) => {
//     console.log('5.Document Event Listener');
// })


// document.body.addEventListener('click', (e) => {
//     console.log('4.Body Event Listener');
// })

// green.addEventListener('click', (e) => {
//     console.log('3.Green Event Listener');
// })


// pink.addEventListener('click', (e) => {
//     console.log('2.Pink Event Listener');
// })


// blue.addEventListener('click', (e) => {
//     console.log('1.Blue Event Listener');
// })
// If we do not apply event listener on blue but we apply Event listener on Parent Element,
// so whenever we call or click on blue then parent elements of blue will also be fired and,
// print in console.It is called propagation....mean spread.


// if we want stop propagation so use this method "stopPropagation()"
// blue.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log('1.Blue Event Listener');
// })


    // 2.) Event Capturing Method------------ we will pass third argument({capture: (true or false)} or once: true or false) in this
// Third argument = Use Capture == mean(Event will not bubble or It will execute reverse)

// --> It will fire multi times

// window.addEventListener('click', (e) => {
//     console.log('6.Window Event Listener');
// }, {capture: true})


// document.addEventListener('click', (e) => {
//     console.log('5.Document Event Listener');
// }, {capture: true})


// document.body.addEventListener('click', (e) => {
//     console.log('4.Body Event Listener');
// }, {capture: true})

// green.addEventListener('click', (e) => {
//     console.log('3.Green Event Listener');
// }, {capture: true})


// pink.addEventListener('click', (e) => {
//     console.log('2.Pink Event Listener');
// }, {capture: true})


// blue.addEventListener('click', (e) => {
//     console.log('1.Blue Event Listener');
// }, {capture: true})

//--> when we give 'once: true' condition then Event listener will work once
// blue.addEventListener('click', (e) => {
//     console.log('1.Blue Event Listener');
// }, {once: true})