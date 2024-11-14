fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json();
})
.then(
    function(data){
        console.log(data);
        let seccion_cat = document.querySelector(".picante")
        
        let categoria =""

        for (let i=0; i<data.recipes.length; i++){
            categoria += `<article>
            <a>Categoria:${data.recipes[i].mealType}</a>
            </article>`;
            
        } 
        seccion_cat.innerHTML=categoria
        
    }
)
.catch(function(error)
{
    console.log(error)
})