/*El objetivo es implementar una función recursiva para calcular el factorial de un número.

Ejercicio: Cálculo del Factorial
Escribe una función llamada calcularFactorial que toma un número entero positivo como parámetro y devuelve su factorial. 
El factorial de un número n se define como el producto de todos los enteros positivos desde 1 hasta n.

Por ejemplo:

El factorial de 5 (representado como 5!) es 5 * 4 * 3 * 2 * 1.
Tu tarea es implementar la función calcularFactorial de manera recursiva. Intenta resolver el problema utilizando la recursividad, sin utilizar bucles.

Una vez que hayas intentado implementar la función, puedes verificar su funcionamiento probándola con diferentes valores.

¡Buena suerte! Si tienes alguna pregunta o necesitas ayuda, no dudes en preguntar.*/

const factorial = n =>{
    if(n <= 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(5))