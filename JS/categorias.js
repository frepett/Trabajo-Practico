fetch("https://dummyjson.com/recipes/tags")
.then(function(response){
    return response.json();
})
.then(
    function(data){
        console.log(data);
        let seccion_Cat = document.querySelector(".picante")
        let categoria = ""

        for (let i=0; i<data.length;i++){
            categoria += `<article class="article_de_cada_categoria">
            <a class="cada_categoria" href= "./category.html?tags=${data[i]}">${data[i]} </a>
            </article>`
       }
       seccion_Cat.innerHTML=categoria
            
        } 
        
       
      
)
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


.catch(function(error)
{
    console.log(error)
})