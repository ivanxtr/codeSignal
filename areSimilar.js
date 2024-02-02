/* 
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
solution(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
solution(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
solution(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.

*/

function solution(a, b) {
    if (a.join('') === b.join('')) return true;
    
    let count = 0;
    for (let f = 0; f < a.length; f++) {
        if (a[f] !== b[f]) {
            count++;
        }
    }

    if (count > 2) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            continue;
        } else {
            for (let f = i; f < b.length; f++) {
                if (a[i] === b[f]) {
                    let temp = b[i]
                    b[i] = b[f]
                    b[f] = temp
                    break;
                }
            }
        }
    }

    const isEquals = a.filter((v, idx) => v !== b[idx])
    return isEquals.length <= 0
}

 console.log(solution([1, 2, 2], [2, 1, 1])) // false
 console.log(solution([1, 2, 3], [2, 1, 3])) // true
 console.log(solution([1, 2, 1, 2], [2, 2, 1, 1])) // true
 console.log(solution(
    [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
    [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
 )) // false