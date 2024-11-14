console.log("puto")


fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json();
})
.then(
    function(data){
        console.log(data);
        let seccion_cat = document.querySelector(".picante")
        
        let categoria =""
        for (let i=0; i.categoria.length; i++){
            categoria += `<article>
            <p>${data.recipes[i].mealType}</p>
            </article>`;
            
        } 
        picante.innerHTML=categoria
        
    }
)
.catch(function(error)
{
    console.log(error)
})