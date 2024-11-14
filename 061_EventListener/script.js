// const h1 = document.querySelector('h1')
// const card = document.querySelector('.card')
// // // function sayHi() {
// // //     console.log('hiiiiii');
// // // }
// // // card.addEventListener('click', sayHi)
// // card.addEventListener('click', function() {
// //     console.log('card clicked');
// // })

// const newContainer = document.createElement('.Container')
// const newCard = document.createElement('.Card')
// newContainer.appendChild(newCard)


// dupicate card on click ---code

// const h1 = document.querySelector('h1')
// const card = document.querySelector('.card')
// const container = document.querySelector('.container')


// let count = 1 

// card.addEventListener('click', function() {
//      const newCard = document.createElement('div')
//      newCard.classList.add('card')
//      newCard.innerText = count
//      count++
//      container.append(newCard)
//     })


//     If We Want To Clone Card Not Creating Extra <Div>


const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

card.addEventListener('click', function() {
          const newCard = card.cloneNode('div')
          newCard.classList.remove('add-card')
          newCard.innerText = count
          count++
          container.append(newCard)
         })
