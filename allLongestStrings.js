/* 
Given an array of strings, return another array containing all of its longest strings.

Dada una matriz de cadenas, devuelve otra matriz que contiene todas sus cadenas más largas.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].
*/

function solution(inputArray) {

    const hash = {}
    let longest = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length >= longest) {
            longest = inputArray[i].length
        }
        if (hash[inputArray[i].length]) {
            hash[inputArray[i].length] = [
                ...hash[inputArray[i].length],
                inputArray[i]
            ]
        } else {
            hash[inputArray[i].length] = [inputArray[i]]
        }
    }

    return hash[longest];
}

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]))