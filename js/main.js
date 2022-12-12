
function stringRepetitions(name){
    name = name.toUpperCase();
    let counter = 1;
    let bestPosition = -1;
    for (let i = 0; i < name.length; i++) {
        let temp = 1;
        for (let j = 0; j < name.length; j++) {
            if(i == j)continue;
            if(name.charAt(i) == name.charAt(j))temp++;        
        }
        if(temp > counter && bestPosition != i){
            bestPosition = i;
            counter = temp;
        }
    }
    if(counter > 0 && counter != 1){
        return "El que mas se repite es "+name.charAt(bestPosition)+" => "+counter;
    }else{
        return "No se repite ninguno";
    }
}

let stringSubmit = document.getElementById("stringSubmit");

stringSubmit.addEventListener("click", function(e){
    e.preventDefault();

    let stringInput = document.getElementById("inputString").value;
    let result = document.getElementById("result");
    result.innerHTML = stringRepetitions(stringInput);
})


function alrevezString(name){
    let inverted = "";
    for (let i = name.length-1; i >= 0; i--) {
        inverted += name.charAt(i);
    }
    return name+" => "+inverted;
}

let alrevezSubmit = document.getElementById("alrevezSubmit");

alrevezSubmit.addEventListener("click", function(e){
    e.preventDefault();

    let stringInput = document.getElementById("inputString").value;
    let resultAlrevez = document.getElementById("resultAlrevez");
    resultAlrevez.innerHTML = alrevezString(stringInput);
})

function palindromeString(name){
    let inverted = "";
    for (let i = name.length-1; i >= 0; i--) {
        inverted += name.charAt(i);
    }
    let nameNoSpaces = name.replaceAll(" ","").toUpperCase();
    let invertedNoSpaces = inverted.replaceAll(" ","").toUpperCase();
    if(nameNoSpaces === invertedNoSpaces){
        return "Es palindromo";
    }else{
        return "No es palindromo";
    }
}