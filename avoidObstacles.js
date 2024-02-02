/* 
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
solution(inputArray) = 4.
*/

/* 
El fragmento de código seleccionado está utilizando la función `every` de JavaScript en un array llamado `inputArray`. La función `every` verifica si todos los elementos del array cumplen con una condición especificada en la función de callback proporcionada.

En este caso, la función de callback es una función de flecha `(element => element % i)`. Esta función devuelve el residuo de dividir cada `element` del array por `i`. Si el residuo es 0 (lo que significa que `i` es un divisor de `element`), la función de callback devuelve `false` porque en JavaScript, 0 es un valor "falsy". Si el residuo no es 0, la función de callback devuelve un valor "truthy".

Por lo tanto, `inputArray.every(element => element % i)` devuelve `true` si `i` no es un divisor de ningún elemento en `inputArray`, y `false` en caso contrario.

Si `inputArray.every(element => element % i)` devuelve `true`, entonces el código `return i` se ejecuta. Esto significa que la función que contiene este código devuelve `i` si `i` no es un divisor de ningún elemento en `inputArray`.
*/

function solution(inputArray) {
    const max = Math.max(...inputArray)
    for (let i = 1; i <= max + 1; i++) {
        if (inputArray.every(element => element % i))
        return i
    }
}

// 3, 5, 6, 7, 9 - 4
// console.log(solution([5, 3, 6, 7, 9]))
// 2, 3 - 4
// console.log(solution([2, 3]))
// 1, 2, 4, 6, 10 - 7
// console.log(solution([1, 4, 10, 6, 2]))
// 999, 1000 - 6
 console.log(solution([1000, 999]))
// 11, 19, 23, 32 - 3
// console.log(solution([19, 32, 11, 23]))
// 5, 8, 9, 13, 14 - 6
// console.log(solution([5, 8, 9, 13, 14]))