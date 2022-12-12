let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click",function(e){
    e.preventDefault();

    let emailREX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;;

    let alerta = document.getElementById("alerta");
    let inputTextArea = document.getElementById("inputTextArea");
    let inputEmail = document.getElementById("inputEmail");
    let inputArea = inputTextArea.value.replaceAll("  ","");
    let input = inputEmail.value;
    alerta.style.display = "none";

    if(inputArea.length < 20){
        alerta.style.display = "block";
        alerta.innerHTML = "El texto debe contener mas de 20 caracteres<br>";
    }

    if(!input.match(emailREX)){
        alerta.style.display = "block";
        alerta.innerHTML += "El correo no es valido";
    }


});