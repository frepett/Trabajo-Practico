let queryString = location.search
let queryStringObjeto = new URLSearchParams(queryString)
let extraer = queryStringObjeto.get("id")
console.log(extraer)
let seccion_Detalles_De_Recetas=document.querySelector(".seccion_detalles_de_recetas")
let h2 = document.querySelector("h2")
let img = document.querySelector(".imagen_receta_detalles")
let tiempo = document.querySelector(".tiempo")
let tiempoC = document.querySelector(".tiempoC")
let CategoriaLista = document.querySelector(".Categoriasul")
let Instrucciones = document.querySelector(".InstruccionesD")

fetch(`https://dummyjson.com/recipes/${extraer}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    h2.innerText = data.name
    img.src = data.image
    tiempo.innerText += data.prepTimeMinutes
    tiempoC.innerText += data.cookTimeMinutes
    Instrucciones.innerText += data.instructions

    for(let i = 0; i<data.tags.length; i++){
        CategoriaLista.innerHTML +=  `<li class="liCat"><a class="liCate" href="./category.html?tags=${data.tags[i]}">${data.tags[i]}</a></li>`
    }
   
})

let formulario =document.querySelector(".formulario_index")
let buscador=document.querySelector(".buscador")
let div_Error=document.querySelector(".formulario_index_menos_que3")

 formulario.addEventListener("submit",function(evento){
    evento.preventDefault()


    if (buscador.value.length < 3){
        div_Error.style.display="block"
        div_Error.innerHTML="<p>La busqueda tiene que tener mino 3 caracteres</p>"
    }else{
     this.submit()
    }

 }  
)

.catch( function (error){
    console.log(error);
})