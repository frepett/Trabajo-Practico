let queryString = location.search
let queryStringObjeto = new URLSearchParams(queryString)
let tag = queryStringObjeto.get("tags")

fetch(`https://dummyjson.com/recipes`)
.then(function(response){
    return response.json();
})

.then(
    function(data){
        console.log(data);
        let seccion_cat = document.querySelector(".seccion_detalles_cat")
        let categoria = ""
        

        for (let i=0; i<data.recipes.length; i++){
            if(data.recipes[i].tags.includes(tag)){
                categoria+= `<article>
            <img src=${data.recipes[i].image} alt = "" >
            <article class="article_foto_plato"><a class="plato" href="./detalles.html?id=${data.recipes[i].id}">
            Plato: ${data.recipes[i].name}</a>
            <p class="dificultad" >Dificultad: ${data.recipes[i].difficulty}</p></article>
            </article>`} 
        seccion_cat.innerHTML
    }})

    

.catch(function(error){
    console.log(error)
})