const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')
const cardsList = document.querySelectorAll('.card')

let count = 1

// it will apply on container not specific cards
addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

container.addEventListener('click', (e) => {
//    e.target.remove()     ----- remove class from container first
        if(e.target !== container){
            e.target.remove()
        }
})


// click apply on all cards will be print so in huge application's code it will slow ur application
// addCardBtn.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++

//     newCard.addEventListener('click', () => {
//         newCard.remove()
//     })
//     container.append(newCard)
// })

