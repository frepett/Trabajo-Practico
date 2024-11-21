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
            if (!categoriasMostradas.includes(data.recipes[i].tags[0])){
                categoriasMostradas.push(data.recipes[i].tags[0]);}
            
        } 
        console.log(categoriasMostradas)
        
       
        for (let i=0; i<categoriasMostradas.length;i++){
            categoria += `<article class="article_de_cada_categoria">
            <a class="cada_categoria" href= "./detallecat.html">${categoriasMostradas[i]} </a>
            </article>`
       }
       seccion_cat.innerHTML=categoria
    }
)
.catch(function(error)
{
    console.log(error)
})