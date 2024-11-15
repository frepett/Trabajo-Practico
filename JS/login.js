let formulario = document.querySelector("form");
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let errorEmail = document.querySelector('.email')
let errorPassword = document.querySelector('.password')


formulario.addEventListener("submit", function(event){
    event.preventDefault()
    if(email.value == ''){
        alert("Por favor complete el campo de email")
    }
    else if(password.value == ''){
        alert("Por favor complete el campo de email")
    } else{
        formulario.submit()
    }
})
