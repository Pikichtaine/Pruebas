fetch('https://fakestoreapi.com/products')
.then(reponce=>reponce.json())
.then(data=>
    console.log("Your Data is completed ", data))

let tarjeta = document.getElementById("tarjeta")

let foto=document.createElement("img")
