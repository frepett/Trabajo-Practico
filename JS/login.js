let formulario = document.querySelector("form");
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let errorEmail = document.querySelector('.email')
let errorPassword = document.querySelector('.password')

console.log(formulario);
console.log(email);

formulario.addEventListener('submit', function(event){
    event.preventDefault()
    if(email.value == ''){
        console.log('Por favor complete el campo de email')
        errorEmail.innerHTML = '<p>Por favor complete el campo de email</p>'
    }
    else if(password.value == ''){
        console.log('Por favor complete el campo de contraseña')
        errorPassword.innerHTML = '<p>Por favor complete el campo de contraseña</p>'
    } else{
        formulario.submit()
    }
})
