/* 
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
solution(n) = true;
For n = 642386, the output should be
solution(n) = false.
*/

function areGiven(n) {
    const data = Array.from(String(n), Number)
    let resp = true
    for (let i = 0; i < data.length; i += 1) {
        if (data[i] % 2 !== 0) {
            return resp = false
        }
    }
    return resp
} 

console.log(areGiven(248622))
console.log(areGiven(642386))