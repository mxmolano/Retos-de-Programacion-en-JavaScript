// Operadores aritméticos
const numero1 = 4;
const numero2 = 5;

function operadorSuma(numero1, numero2) {
    let resultado = undefined;
    
    resultado = numero1 + numero2;
    console.log("Suma:", resultado); 
}

function operadorResta(numero1, numero2) {
    let resultado = undefined;

    resultado = numero1 - numero2;
    console.log("Resta:", resultado);
}

function operadorMultiplicacion(numero1, numero2){
    let resultado = undefined;

    resultado = numero1 * numero2;
    console.log("Multiplicacion:", resultado)
}

function operadorDivision(numero1, numero2){
    let resultado = undefined;

    resultado = numero1 / numero2;
    console.log("Division:", resultado)
}

function operadorResiduo(numero1, numero2){
    let resultado = undefined;

    resultado = numero1 % numero2;
    console.log("Residuo:", resultado)
}

function operadorExponenciacion (numero1, numero2){
    let resultado = undefined;

    resultado = numero1 ** numero2;
    console.log("Exponenciación:", resultado)
}

// Ejecucion de operadores
console.log("\n=== OPERADORES ARITMETICOS ===");
operadorSuma(numero1, numero2);
operadorResta(numero1, numero2);
operadorMultiplicacion(numero1, numero2);
operadorDivision(numero1, numero2);
operadorResiduo(numero1, numero2);
operadorExponenciacion(numero1, numero2);


