let formulario = document.querySelector("form");
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let errorEmail = document.querySelector('.errorEmail')
let errorPassword = document.querySelector('.errorPassword')

console.log(formulario);
console.log(email);

formulario.addEventListener('submit', function(event){
    event.preventDefault()
    if(email.value == ''){
        alert("Por favor completa el campo email")
    }
    else if(password.value == ''){
        alert("Por favor completa el campo contraseña")
    } else{
        formulario.submit()
    }
})
