// Operadores unarios
let numero3 = 7;

// Primero incrementa el valor de contador a 8 y luego devuelve ese nuevo valor 8, que se imprime.
function operadorIncrementoPrefijo (numero3){
    let resultado = undefined;

    resultado = ++numero3;
    console.log("Incremento prefijo:", resultado)
}

/* Primero devuelve el valor actual de contador 7 y luego lo incrementa a 8. 
    Por eso imprime 7, pero contador ahora es 8.*/
function operadorIncrementoSufijo (numero3){
    let resultado = undefined;

    resultado = numero3++;
    console.log("Incremento sufijo:", resultado)
}

// Primero decrementa contador (actualmente 7) a 6 y devuelve ese nuevo valor 6, que se imprime 
function operadorDecrementoPrefijo (numero3){
    let resultado = undefined;

    resultado = --numero3;
    console.log("Decremento prefijo:", resultado)
}

/* Primero devuelve el valor actual de contador 7 y luego lo descrementa a 6. 
    Por eso imprime 7, pero contador ahora es 6.*/
function operadorDecrementoSufijo (numero3){
    let resultado = undefined;

    resultado = numero3--;
    console.log("Decremento prefijo:", resultado)
}

/* convierte el valor de su operando a tipo numérico si es necesario, 
    y luego invierte su signo: si el valor era positivo lo transforma a negativo, 
    y si era negativo lo transforma a positivo */
function operadorNegaciónUnaria (numero3){
    let resultado = undefined;

    resultado = -numero3;
    console.log("Negación unaria:", resultado)
}

// El operador unario + se usa para convertir un valor a tipo numérico si no lo es ya.
function operadorPositivoUnario () {
    const numero4 = "-6";
    let resultado = undefined;

    resultado = +numero4;
    console.log("Positivo unario:", resultado)
}

// Ejecucion de operadores
console.log("\n=== OPERADORES UNARIOS ===");
operadorIncrementoPrefijo(numero3);
operadorIncrementoSufijo(numero3);
operadorDecrementoPrefijo(numero3);
operadorDecrementoSufijo(numero3);
operadorNegaciónUnaria(numero3);
operadorPositivoUnario();

