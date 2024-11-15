fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json();
})
.then(
    function(data){
        console.log(data);
        let menu = document.querySelector(".menu")
        let titulo =""

        for (let i=0; i<10; i++){
            console.log(i)
            titulo += `<article class="article_de_fotos">
            <img src=${data.recipes[i].image} alt = "" >
            <a class="plato" href="./index.html?id=${data.recipes[i].id}">
            Plato: ${data.recipes[i].name}</a>
            <p class="dificultad" >Dificultad: ${data.recipes[i].difficulty}</p>
            </article>`;
            
        } 
        menu.innerHTML=titulo
        
        let cargarmas = document.querySelector('.button_cargarmas')
        cargarmas.addEventListener('click', function(){
            for(let i=10;i<20;i++){
                titulo += `<article class="article_de_fotos">
                 <img src=${data.recipes[i].image} alt = "" ><div>
                 <a class="plato" href="./index.html?id=${data.recipes[i].id}">
                 Plato: ${data.recipes[i].name}</a>
                 <p class="dificultad" >Dificultad: ${data.recipes[i].difficulty}</p></div>
                </article>`;
                menu.innerHTML=titulo
            }
        })
    }
)
.catch(function(error)
{
    console.log(error)
})


fetch('https://dummyjson.com/recipes/search?q=Margherita')
.then(res => res.json())
.then(function(buscar){
    console.log(buscar);
    let buscador = document.querySelector(`.button_cargarmas`)
    buscador = `<a>./detalles.html</a>`
});

