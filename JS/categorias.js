fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json();
})
.then(
    function(data){
        console.log(data);
        let seccion_cat = document.querySelector(".picante")
        let categoria = ""
        let categoriasMostradas = []

        for (let i=0; i<data.recipes.length; i++){
            if(!categoriasMostradas.includes(data.recipes[i].cuisine)){categoriasMostradas.push(data.recipes[i].cuisine)}
            categoria += `<article>
            <a class="categoria8" href= "./detallecat.html">${data.recipes[i].cuisine}</a>
            </article>`;
            
        } 
        seccion_cat.innerHTML=categoria
       
    }
)
.catch(function(error)
{
    console.log(error)
})