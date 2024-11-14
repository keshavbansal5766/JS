fetch('https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000')

fetch("https://dummyjson.com/products")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => {
    console.log(err);
})

fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: "BMW Pencil",
      category: "Stationary",
    }),
})
.then((res) => res.json())
.then(console.log)
.catch((err) => {
    console.log(err);
})
