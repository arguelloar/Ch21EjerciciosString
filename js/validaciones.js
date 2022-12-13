let btnEnviar = document.getElementById("btnEnviar");
let idTimeout;

btnEnviar.addEventListener("click",function(e){
    e.preventDefault();

    let emailREX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let alerta = document.getElementById("alerta");
    let inputTextArea = document.getElementById("inputTextArea");
    let inputEmail = document.getElementById("inputEmail");
    let inputArea = inputTextArea.value.trim().replaceAll("  ","");
    let email = inputEmail.value;
    let checkbox = document.getElementById("flexCheckDefault");
    alerta.style.display = "none";
    alerta.innerHTML = "";
    let validos = 0;

    if(inputArea.length < 20){
        alerta.style.display = "block";
        alerta.innerHTML += "El texto debe contener mas de 20 caracteres<br>";
        inputTextArea.focus();
        inputTextArea.select();
        inputTextArea.style.border = "solid red 1px";
    }else{
        inputTextArea.style.border = "solid green 1px";
        validos++;
    }

    if(!email.match(emailREX)){
        alerta.style.display = "block";
        alerta.innerHTML += "El correo no es valido";
        inputEmail.style.border = "solid red 1px";
    }else{
        inputEmail.style.border = "solid green 1px";
        validos++;
    }

    let inputRFC = document.getElementById("inputRFC");

    let RFCRegex = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
    let RFC = inputRFC.value.toUpperCase();
    console.log(RFC);
    if (!RFC.match(RFCRegex)) {
        alerta.style.display="block";
        alerta.innerHTML += "<br/>El RFC no es válido.";
        inputRFC.style.border = "solid red 1px";
    }else {
        inputRFC.style.border = "solid green 1px";
        validos++;
    }

    if((idTimeout != undefined) && (idTimeout != null)){
        clearTimeout(idTimeout);
    }

    if(validos == 3){
        idTimeout = setTimeout(function(e){
            inputTextArea.style.border = "";
            inputEmail.style.border = "";
            inputRFC.style.border = "";
                },
        3000);
    }

    if(!checkbox.checked){
        alerta.style.display="block";
        alerta.innerHTML += '<br>Necesitas aceptar terminos y condiciones';
    }
});