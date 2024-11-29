let queryString = location.search
let queryStringObjeto = new URLSearchParams(queryString)
let tag = queryStringObjeto.get("tags")

fetch(`https://dummyjson.com/recipes/tag/${tag}`)
.then(function(response){
    return response.json();
})

.then(
    function(data){
        console.log(data);
        let seccion_Cat = document.querySelector(".seccion_detalles_cat")
        let categoria = ""
        

        for (let i=0; i<data.recipes.length; i++){
            if(data.recipes[i].tags.includes(tag)){
                categoria += `<article class="articleDC">
            <img class="imgDC" src=${data.recipes[i].image} alt = "" >
            <article class="article_foto_plato"><a class="plato" href="./receta.html?id=${data.recipes[i].id}">
            Plato: ${data.recipes[i].name}</a>
            <p class="dificultad" >Dificultad: ${data.recipes[i].difficulty}</p></article>
            </article>`} 
        
        seccion_Cat.innerHTML = categoria
    }})
.catch(function(error){
    console.log(error)
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

let fepe = document.querySelector(".h212")
console.log(fepe)
    fepe.innerText =`Resultados: ${tag}`
    