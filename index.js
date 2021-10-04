"use strict"


alert("Bienvenidxs a la calculadora.");

let ope;
let repetir = false;

do {
    ope = prompt("¿Qué operación quieres realizar?(+,-,*,/)");
    ope = ope.trim(); //Esta función sirve para que ignore los espacios.

    if (ope === "+" || ope === "-" || ope === "*" || ope === "/") {

        let operador1 = " ";
        let operador2 = " ";
        let salir = false;

        while (!salir) {
            let operadores = prompt("Introduce dos números: ")

            let i = 0;
            for (; i < operadores.length; i++) {
                if (operadores[i] !== " ") {
                operador1 += operadores[i];
                } else {
                    if (operador1 !== " ") {
                    break;
                    }
                }
            }
            console.log(operador1);

            for (; i < operadores.length; i++) {
                if (operadores[i] !== " ") {
                operador2 += operadores[i];
                } else {
                if (operador2 !== " ") {
                    break;
                    }
                }
            }
            console.log(operador2);


            operador1 = Number(operador1);
            operador2 = Number(operador2);
            if (isNaN(operador1) || isNaN(operador2)) {
                alert("Tienes que introducir números.")
                salir = false;
            } else {
                salir = true;
                }
        }


        let resultado;
        switch (ope) {
            case "+":
                resultado = operador1 + operador2;
                break;
            case "-":
                resultado = operador1 - operador2;
                break;
            case "*":
                resultado = operador1 * operador2;
                break;
            case "/":
                resultado = operador1 / operador2;
                break;  
            }

            
        
        alert("El resultado es: " + resultado);

        repetir = confirm("¿Quieres repetir la operación?");

    } else {
        alert("La operación introducida es errónea. Introduce valores válidos.")
    }
} while ((ope !== "+" && ope !== "-" && ope !== "*" && ope !== "/") || (repetir));

console.log(op);