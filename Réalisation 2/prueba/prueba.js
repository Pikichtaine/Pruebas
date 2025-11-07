let spawn=document.getElementById("buton")
let input= document.getElementById("search")
let contenedor=document.getElementById("grid")
let categorias=document.getElementById("category")
let orden=document.getElementById("sort")



// (Refresh)
window.onload = fetchito();
// (/Refresh)



// (Fetch)
function fetchito(){
fetch('https://fakestoreapi.com/products')
.then(reponce=>reponce.json())
.then(data=>{
    console.log("Your Data is completed ", data)
let valor = input.value.toLowerCase();
let selectValue = categorias.value; 
let ordenValue= orden.value

    contenedor.innerHTML=""
    if(valor==="" && selectValue==="all" && ordenValue==="default"){
    data.forEach(aray=>{ 
            spanwCard(aray);
        })    
    }else{

let produitsFiltres = data.filter(p => (p.title.toLowerCase()).includes(valor) && p.category === selectValue );
produitsFiltres.forEach(p => {
    spanwCard(p)
})

}

});
}
// (/Fetch)



// (Input Function)
input.addEventListener("input", function(){
    fetchito()
})
// (/Input Function)



// (Spawn Product)
  function spanwCard(p){
let tarjeta = document.createElement("article")
tarjeta.classList.add("card");
tarjeta.innerHTML=`
    <div class="imgwrap">
    <img src="${p.image}" alt="fotito">
    </div>
    <div class="title">${p.title}</div>
    <div class="cat">${p.category}</div>
    <div class="price">Prix: ${p.price}€</div>
    `;
  contenedor.appendChild(tarjeta)
}
// (/Spawn Product)



categorias.addEventListener("change", () => {
    input.value=""
    fetchito()
});

orden.addEventListener("change", () => {
    input.value=""
    fetchito()
});

