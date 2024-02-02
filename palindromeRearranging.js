/* 
    Given a string, find out if its characters can be rearranged to form a palindrome.

    Example

    For inputString = "aabb", the output should be
    solution(inputString) = true.

    We can rearrange "aabb" to make "abba", which is a palindrome.

    palindrome = A string that doesn't change when reversed (it reads the same backward and forward).
*/

/* solution 1 forming palindromes
    const temp = []
    const reversed = []
    for (let i = 0; i < ar.length; i++) {
        if (i <= 1) {
            temp.push(ar[i])
            reversed.push(ar[i])
            continue;
        }
        const middle = Math.floor(temp.length / 2);
        temp.splice(middle, 0, ar[i])
        reversed.splice(middle, 0, ar[i])
    }

    return temp.join('') === reversed.reverse().join('') 
*/

function solution(inputString) {
    const charCounts = [...inputString].reduce((counts, char) => {
      counts[char] = counts[char] ? counts[char] + 1 : 1;
      return counts;
    }, {});

    return Object.values(charCounts).filter(count => count % 2 !== 0).length <= 1;
}

 console.log(solution("aabb")) // true
 console.log(solution("abbcabb")) // true
 console.log(solution("abcad")) // false
 console.log(solution("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa")) // false
 