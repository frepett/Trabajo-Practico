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
            <article class="article_foto_plato"><a class="plato" href="./receta.html?id=${data.recipes[i].id}">
            Plato: ${data.recipes[i].name}</a>
            <p class="dificultad" >Dificultad: ${data.recipes[i].difficulty}</p></article>
            </article>`;
            
        } 
        menu.innerHTML=titulo

        
        let cargarMas = document.querySelector('.button_cargarmas')
        let fotos_Cargadas=10;
        cargarMas.addEventListener('click', function(){
            for(let i = fotos_Cargadas;i<fotos_Cargadas+10 ;i++){
                titulo += `<article class="article_de_fotos">
                 <img src=${data.recipes[i].image} alt = "" >
                <article class="article_foto_plato"><a class="plato" href="./receta.html?id=${data.recipes[i].id}">
                 Plato: ${data.recipes[i].name}</a>
                 <p class="dificultad">Dificultad: ${data.recipes[i].difficulty}</p></article>
                </article>`;
            }
            fotos_Cargadas=fotos_Cargadas+10;
            menu.innerHTML=titulo

        })
})


let formulario =document.querySelector(".formulario_index")
let buscador=document.querySelector(".buscador")
let div_Error=document.querySelector(".formulario_index_menos_que3")

 formulario.addEventListener("submit",function(evento){
    evento.preventDefault()


    if (buscador.value.length < 3){
        div_Error.style.display="block"
        div_Error.innerHTML="<p>La busqueda tiene que tener mino 3 caracteres</p>"
    }else{
     this.submit()
    }

 }  
)

.catch(function(error){
    console.log(error)
})


