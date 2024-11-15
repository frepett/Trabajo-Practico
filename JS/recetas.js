let queryString = location.search
let queryStringObjeto = new URLSearchParams(queryString)
let extraer = queryStringObjeto.get("buscador")
console.log(extraer)
let seccion_detalles=document.querySelector(".seccion_detalles")


fetch(`https://dummyjson.com/recipes/search?q=${extraer}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
 let contenedorRecetas=document.querySelector(".seccion_detalles")
 for(let i = 0; i<data.recipes.length; i++){
    contenedorRecetas.innerHTML += `<article class="article_de_fotos">
                 <img src=${data.recipes[i].image} alt = "" ><div>
                 <a class="plato" href="./index.html?id=${data.recipes[i].id}">
                 Plato: ${data.recipes[i].name}</a>
                 <p class="dificultad" >Dificultad: ${data.recipes[i].difficulty}</p></div>
                </article>`;
    

 }

})

.catch( function (error){
    console.log(error);
})