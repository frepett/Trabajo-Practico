let queryString = location.search
let queryStringObjeto = new URLSearchParams(queryString)
let extraer = queryStringObjeto.get("article_de_cada_categoria")

fetch(`https://dummyjson.com/recipes/${extraer}`)
.then(function(response){
    return response.json();
})
.then(
    function(data){
        console.log(data);
        let seccion_cat = document.querySelector(".seccion_detalles_cat")
        let categoria = ""
        

        for (let i=0; i<data.recipes.length; i++){
            if(!categoriasMostradas.includes(data.recipes[i].mealType)){categoriasMostradas.push(data.recipes[i].mealType)}
            categoria += `<article>
            <a class="categoria8" href= "./detallecat.html">${data.recipes[i].mealType}</a>
            </article>`;
            
        } 
        seccion_cat.innerHTML=categoria
       
    }
)
.catch(function(error)
{
    console.log(error)
})