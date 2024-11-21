let queryString = location.search
let queryStringObjeto = new URLSearchParams(queryString)
let extraer = queryStringObjeto.get("id")
console.log(extraer)
let seccion_detalles_de_recetas=document.querySelector(".seccion_detalles_de_recetas")


fetch(`https://dummyjson.com/recipes/${extraer}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    seccion_detalles_de_recetas.innerHTML += `<article class="article_detalles_receta">
                <div class="detalles_titulo_solo">
                    <h2>${data.name}</h2>
                </div>

                <img src="${data.image}" alt="" class="imagen_receta_detalles">
                <article class="detalles_titulo_tp_tc">
                    <p><b>Tiempo de preparación:</b> ${data.prepTimeMinutes} minutos</p>
                    <p><b>Tiempo de cocción:</b> ${data.cookTimeMinutes} minutos</p>
                    <a class="a_detalles_categoria" href="./detallecat.html"><b>Categorias: </b>${data.cuisine}</a>
                </article>
                <article class="instrucciones_de_detalle">
                    <p class="titulo_instrucciones"><b>Instrucciones:</b></p><p>${data.instructions}</p>
                </article>
            </article>`
})
.catch( function (error){
    console.log(error);
})