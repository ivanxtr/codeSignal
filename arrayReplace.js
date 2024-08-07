/* 
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example

For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].


*/

function solution(inputArray, elemToReplace, substitutionElem) {
    const resp = []
    for (let i = 0; i < inputArray.length; i += 1) {
        if (inputArray[i] === elemToReplace) {
            resp.push(substitutionElem) 
        } else {
            resp.push(inputArray[i])
        }
    }
    return resp
}

const inputArray = [1, 2, 1]
const elemToReplace = 1
const substitutionElem = 3 

console.log(solution(inputArray, elemToReplace, substitutionElem))