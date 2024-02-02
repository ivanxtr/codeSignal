function solution(inputArray) {
    let temp = [];
    for (let i = 0; i < inputArray.length - 1; i++) {
        res = inputArray[i] * inputArray[i + 1];
        temp.push(res)
    }
    return Math.max(...temp);
}

console.log(solution([3, 6, -2, -5, 7, 3])); // 21
console.log(solution([5, 1, 2, 3, 1, 4])); // 6
console.log(solution([-23, 4, -3, 8, -12])); // -12 