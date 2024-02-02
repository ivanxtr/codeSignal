/* 
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Dadas dos cadenas, encuentre la cantidad de caracteres comunes entre ellas.

Ejemplo

Para s1 = "aabcc" y s2 = "adcaa", la salida debe ser
solución(s1, s2) = 3.

Las cadenas tienen 3 caracteres comunes: 2 "a" y 1 "c".

aabcc
adcaa

hash = {
    a: 2
    b: 1
    c: 2
}
*/

function solution(s1, s2) {
    const hash = {}
    let count = 0;

    for (let i = 0; i < s1.length; i++) {
        if (hash[s1[i]]) {
            hash[s1[i]]++;
        } else {
            hash[s1[i]] = 1;
        }
    }

    for (let f = 0; f < s2.length; f++) {
        if (hash[s2[f]]) {
            count += 1;
            hash[s2[f]]--;
        }
    }

    return count;
}


console.log(solution("aabcc", "adcaa"))