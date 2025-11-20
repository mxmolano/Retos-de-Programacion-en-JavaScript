// Tipos de datos de JS

// Boolean ( True | False )
let tieneVisa = false;

// String ( Cadena de texto )
let apellido = "Molano Bohorquez"

// Number ( Numero enteros y decimales )
let edad = 19

// BigInt ( Numero Grande que finaliza en n )
let criptografia = 12345678901234567890n;

// Null ( Valor nulo → no tiene valor )
let valorNulo = null;

// Undefined ( Variable indefinida → no se le asigno ningún valor )
let valorIndefinido = undefined;

// Symbol ( Identificador único e inmutable)
const id = Symbol('id');

// Objeto ( almacenar varios valores )
let persona = {
  nombre: "John",
  edad: 30
};

// Array  ( almacenar listas ordenadas de valores )
let frutas = ["manzana", "banana", "pera"];

// Function ( bloques de código ejecutables )
function saludar(nombre) {
  console.log("Hola " + nombre);
}

// RegExp (Expresiones Regulares - buscar texto en cadenas )
let patron = /hola/i;

// Date (Fecha)
let hoy = new Date();
