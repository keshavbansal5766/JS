const image = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    // we don't xml it is for interview
  const xhr = new XMLHttpRequest();
  //   console.log(xhr);

  xhr.responseType = "json";

  //   xhr.addEventListener("load", () => {
  //     image.src = xhr.response.message;
  //     console.log(xhr);
  //   });

//   xhr.onload = () => {
//     image.src = xhr.response.message;
//     console.log(xhr);
//   }

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
});
