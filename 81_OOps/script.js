// const user = {
//     firstName: 'akash',
//     lastName: 'singh',
//     age: 28,
//     getAgeYear () {
//         return new Date().getFullYear()-user.age
//     }
// }

// console.log(user.getAgeYear());

function createUser(fn, ln, age) {
  const user = {
    fn,
    ln,
    age,
    getAgeYear() {
      return new Date().getFullYear() - user.age;
    },
  };
  return user;
}


const user1 = createUser('aman', 'mishra', 22)