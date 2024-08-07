/* 
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
solution(name) = true;
For name = "qq-q", the output should be
solution(name) = false;
For name = "2w2", the output should be
solution(name) = false.
*/

function correctVariables(name) {
    if (!name) return false
    const chars = Array.from(name)
    if (!isNaN(Number(chars[0]))) return false

    let regex = /^[A-Za-z0-9_]+$/i;
    return regex.test(name);

}

console.log(correctVariables("var_1__Int")) // true
console.log(correctVariables("qq-q")) // false
console.log(correctVariables("2w2")) // false

console.log(correctVariables("_Aas_23")) // true
console.log(correctVariables("a")) // true
console.log(correctVariables("variable0")) // true
console.log(correctVariables("0ss")) // false
