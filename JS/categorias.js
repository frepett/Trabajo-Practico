fetch("https://dummyjson.com/recipes/tags")
.then(function(response){
    return response.json();
})
.then(
    function(data){
        console.log(data);
        let seccion_cat = document.querySelector(".picante")
        let categoria = ""

        for (let i=0; i<data.length;i++){
            categoria += `<article class="article_de_cada_categoria">
            <a class="cada_categoria" href= "./detallecat.html?tags=${data[i]}">${data[i]} </a>
            </article>`
       }
       seccion_cat.innerHTML=categoria
            
        } 
        
       
       
)
.catch(function(error)
{
    console.log(error)
})