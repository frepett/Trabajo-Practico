etch('https://dummyjson.com/recipes/meal-type/snack')
.then(function(response){
    return response.json();
})
.then(
    function(data){
        console.log(data);
        let seccion_cat = document.querySelector(".lpm")
        let categoria = ""
        let categoriasMostradas = []

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