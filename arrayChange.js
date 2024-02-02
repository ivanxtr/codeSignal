/* 
You are given an array of integers. 
On each move you are allowed to increase exactly one of its element by one. 
Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
solution(inputArray) = 3.
*/

function solution(inputArray) {
    let moves = 0;
    for (let i = 1; i < inputArray.length; i++) {
        // check if the previous index is greather or equal to current indes
        if (inputArray[i] <= inputArray[i - 1]) { 
            // increase by one the value of the index
            inputArray[i] += 1 
            // add moves by 1
            moves += 1 
            // decrease the current index by one in order to re validate the condition.
            i = i - 1 
        }
    }

    return moves
}

 console.log(solution([1, 1, 1])) // 3
 console.log(solution([2, 1, 10, 1])) // 12
 console.log(solution([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]))
 //                          1,    1, 2, 4,      1,  4        // 13