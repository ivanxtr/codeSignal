/* 
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false.

Los números de billete suelen constar de un número par de dígitos. Un número de billete se considera afortunado si la suma de la primera mitad de los dígitos es igual a la suma de la segunda mitad.

Dado un billete número n, determina si tiene suerte o no.

m = 2 - 1 = 1
*/

function solution(n) {
    const midddle = (n.toString().length / 2) - 1;
    let first = 0;
    let second = 0;

    for (let i = 0; i < n.toString().length; i++) {
        if (i <= midddle) {
            first += +n.toString()[i]
        } else {
            second += +n.toString()[i]
        }
    }

    return first === second;
}

console.log(solution(1230)) // true
console.log(solution(239017)) // false