/* 
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3.
*/

function solution(inputArray) {
    const result = inputArray.reduce((acc, current, idx) => {
        const rest = Math.abs(current - inputArray[idx + 1])
        return rest > acc ? acc = rest : acc
    }, 0)
    return result
}

console.log(solution([2, 4, 1, 0])) // 3
console.log(solution([10, 11, 13])) // 2