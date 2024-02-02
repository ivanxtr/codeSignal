function solution(n) {
    let sum = 1;

    for (let i = 1; i <= n; i++) {
        sum += (i * 4) - 4;
    }

    return sum
}
/* 
 explanation
 - sum starts as 1 because we're counting the center
 - the loops start at 1 and ends at n this because we're already have accounted the center
 - n times 4 (sides or square), minus 4 as we are counting the corners twice 
 - math explanation: https://www.youtube.com/watch?v=H52DT1sGCiM
*/
console.log(solution(2)); // 5 2 * 4 = 8 - 4 = 4 + 1 = 5
console.log(solution(3)); // 13 2 * 4 = 8 - 4 = 4 + 1 = 5
                          // 3 * 4 = 12 - 4 = 8 + 5 = 13