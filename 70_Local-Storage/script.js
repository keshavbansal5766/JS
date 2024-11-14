// this is not good-way
// const nameElement = document.querySelector('.name-tag');
// const nameInput = document.querySelector('.name');

// nameElement.innerText = localStorage.myName;

// nameInput.addEventListener('input', (e) => {
//     localStorage.myName = e.target.value;
//     nameElement.innerText = localStorage.myName;
// })

// this is second and best method
const nameElement = document.querySelector('.name-tag');
const nameInput = document.querySelector('.name');
const ageElement = document.querySelector('.age-tag');
const ageInput = document.querySelector('.age');


// nameElement.innerText = localStorage.getItem('myName');
// nameInput.addEventListener('input', (e) => {
//     localStorage.setItem('myName', e.target.value);
//     nameElement.innerText = localStorage.getItem('myName');
// })

// ageElement.innerText = localStorage.getItem('myAge');
// ageInput.addEventListener('input', (e) => {
//     localStorage.setItem('myAge', e.target.value);
//     ageElement.innerText = localStorage.getItem('myAge');
// })

// if we want to store name and age in object
const myData = JSON.parse(localStorage.getItem('myData')) || {};

if (myData.name) {
    nameElement.innerText = myData.name;
}

if (myData.age) {
    ageElement.innerText = myData.age;
}

nameInput.addEventListener('input', (e) => {
    myData.name = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    nameElement.innerText = e.target.value;
})

ageInput.addEventListener('input', (e) => {
    myData.age = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    ageElement.innerText = e.target.value;
})