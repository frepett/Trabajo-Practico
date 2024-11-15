let queryString = location.search
let queryStringObjeto = new URLSearchParams(queryString)
let extraer = queryStringObjeto.get("id")
console.log(extraer)
let seccion_detalles=document.querySelector(".seccion_detalles")


fetch(`https://dummyjson.com/recipes/search?q=Margherita${extraer}`)
.then(function(response){
    return response.json
})
.then(function(data){
    console.log(data);
 let nombre_receta=document.querySelector(".nombre_receta")
 nombre_receta.innerText = data.name;
 let imagen =document.querySelector(".imagen_receta")
imagen.src = data.image;

})

.catch( function (error){
    console.log(error);
})