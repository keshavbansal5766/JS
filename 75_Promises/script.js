const resolveBtn = document.querySelector('#resolve-btn');
const rejectBtn = document.querySelector('#reject-btn');

const p = new Promise ((resolve, reject) => {
  // resolve('Promise Resolved')
  resolveBtn.addEventListener('click', () => {
    resolve('Promise Resolved');
  });

  rejectBtn.addEventListener('click', () => {
    reject('Promise Rejected');
  });
});

// setTimeout(() => {
//   console.log('Hii');
// })


p.then((data) => {
  console.log(data);
  return 155;
}).then((data) => {
  console.log(data);
  return 'Keshav'
}).then((data) => {
  console.log(data);
}).catch ((err) => {
  console.log(err);
});










// function makeHttpRequest(method, url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = "json";
//   xhr.addEventListener("load", () => {
//     callback(xhr.response);
//   });

//   xhr.open(method, url);
//   xhr.send();
// }

// makeHttpRequest('GET','https://dummyjson.com/users', (usersData) => {
//    makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
//        makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`,(commentsData) => {
//           makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].id}`, (userData) => {
//               console.log(userData);
//             });
//         });
//     });
// });
