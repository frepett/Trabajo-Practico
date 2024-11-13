fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json();
})
.then(
    function(data){
        console.log(data);
        let menu = document.querySelector(".recipes")
        let titulo =""
        for (let i=0; i<data.recipes.length; i++){
            console.log(i)
            titulo = titulo + `<article>
            <img src=${data.recipes[i].image} alt = "">
            <a href="./index.html?id=${data.recipes[i].id}">Plato:${data.recipes[i].name}</a>
            <p>Ingredientes:${data.recipes[i].ingredients}</p>
            <p>Instrucciones:${data.recipes[i].instructions}</p>
            <p>Dificultad: ${data.recipes[i].difficulty}</p>
            <article>`
        } 
        menu.innerHTML = titulo
    }

)
.catch(function(error)
{
    console.log(error)
})
 
