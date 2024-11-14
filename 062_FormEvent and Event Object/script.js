const usernameInput = document.querySelector('#username')
const form = document.querySelector('form')
// usernameInput.addEventListener('click', () => {
//     console.log('Input-Clicked');
// })

// usernameInput.addEventListener('dblclick', () => {
//     console.log('Doubled-Input-Clicked');
// })

const paragraph = document.querySelector('p')
// let inputValue      

//  e,evt,event = event
// usernameInput.addEventListener('input', (e) => {                    
//     console.log(e.target.value);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
//     // console.log('Input Event Fired');
// })


// ChangeEvent = change
// usernameInput.addEventListener('change', (e) => {                    
//     console.log(e.target.value);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
//     // console.log('Input Event Fired');
// })


// // FocusEvent = focus
// usernameInput.addEventListener('focus', (e) => {                    
//     console.log(e);
//     // console.log(e.target.value);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
//     // console.log('Input Event Fired');
// })


// BlurEvent = blur
// usernameInput.addEventListener('blur', (e) => {                    
//    console.log(e);
//     // console.log(e.target.value);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
//     // console.log('Input Event Fired');
// })


//  SubmitEvent on Form
// form.addEventListener('submit', (e) => {
//     e.preventDefault()                                   // form's default behaviour will stop
//     console.log('Form Submitted');
// })  


// Form data value or event object
// form.addEventListener('submit', (e) => {
//     e.preventDefault()  
//     const myFormData = new FormData(form)                    //e.target = form   
//     // console.log(myFormData);

//     // console.log(myFormData.entries());                       // entries will give us object keys

//     for ( const p of myFormData.entries()) {
//         console.log(p);
//     }                        
// })



// form.addEventListener('click', (e) => {
//         e.preventDefault()                                   // form's default behaviour will stop
//         console.log(e.target);
//         console.log(e.currentTarget);
//     })  