let email = document.getElementById('email').value;
let password = document.getElementById('password').value;


let boton= document.querySelector(`.boton_login`)
boton.addEventListener("click",function(){

    if (email === "") {
        alert("El campo de email no puede estar vacío");
    } else if(password===""){
        alert("El campo de contraseña no puede estar vacío");
    }
})
