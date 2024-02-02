/* 
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example

For inputString = "172.16.254.1", the output should be
solution(inputString) = true;

For inputString = "172.316.254.1", the output should be
solution(inputString) = false.

316 is not in range [0, 255].

For inputString = ".254.255.0", the output should be
solution(inputString) = false.

There is no first number.
*/

function solution(inputString) {
    const spt = inputString
        .split('.')
    if (spt.length !== 4) return false;
    const result = spt.reduce((acc, current) => {
        if (current === '') return false;
        if (current === '00') return false;
        const n = parseInt(current, 10)
        if (isNaN(n)) return false;
        if (n.toString() !== current) return false;
        if (n < 0) return false;
        if (n > 255) return false;
        return acc;
    }, true)
    return result;
}

console.log(solution('172.16.254.1')) // true
console.log(solution("172.316.254.1")) // false
console.log(solution(".254.255.0")) // false
console.log(solution("64.233.161.00")) // false
console.log(solution("64.00.161.131")) // false
console.log(solution("1")) // false
console.log(solution("1.1.1.1a")) // false
console.log(solution("01.233.161.131")) // false
console.log(solution("a0.1.1.1")) //false
console.log(solution("255.255.255.255abcdekjhf")) // false 
console.log(solution("172.16.254.1")) // true
console.log(solution("0.254.255.0")) // true