function solution(inputString) {
    if (
        inputString.length === 0 ||
        !inputString
    ) return false;

    /*
    // solution with a loop
    // get the total length of the string
    const len = inputString.length;
    // getting the middle index
    const mid = Math.floor(len / 2);
    // loop through the string
     for (let i = 0; i < mid; i++) {
        // check if the first half is equal to the second half
        if (inputString[i] !== inputString[len - 1 - i]) {
            return false;
        }
    }
    return true; */

    // solution with reduce
    /* const charCounts = [...inputString].reduce((acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        return acc;
    }, {})

    return Object.values(charCounts).filter(count => count % 2 !== 0).length <= 1; */

    // solution with reverse
    return [...inputString]
        .reverse()
        .join('') === inputString

}

console.log(solution('aabaa')); // true
console.log(solution('abac')); // false
console.log(solution('')); // false
console.log(solution('aya')); // true