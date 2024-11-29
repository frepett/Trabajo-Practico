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
    contenedorRecetas.innerHTML += `<article class="article_de_fotos_recetas_solo">
                 <img src=${data.recipes[i].image} alt = "" class="imagen_recetas_sola"><article class="articulo_titulo_dificultad">
                 <b><a class="plato_receta_solo" href="./receta.html?id=${data.recipes[i].id}">
                 Plato: ${data.recipes[i].name}</a></b>
                 <p class="dificultad_receta_solo" >Dificultad: ${data.recipes[i].difficulty}</p></article>
                </article>`;
    

 }

 let fepe = document.querySelector(".polaco")
 console.log(fepe)
 fepe.innerText =`Resultados: ${extraer}`
 if (data.recipes.length==0){
     fepe.innerText =`Resultados:No se encontro ${extraer}`
}

}).catch( function (error){
    console.log(error);
})

let formulario =document.querySelector(".formulario_index")
let buscador=document.querySelector(".buscador")
let div_Error=document.querySelector(".formulario_index_menos_que3")

 formulario.addEventListener("submit",function(evento){
    evento.preventDefault()


    if (buscador.value.length < 3){
        div_Error.style.display="block"
        div_Error.innerHTML="<p>La busqueda tiene que tener minimo 3 caracteres</p>"
    }else{
     this.submit()
    }
 }  
)


    