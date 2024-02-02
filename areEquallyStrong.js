/* 
Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

Example

For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
10, 15, 15, 10 = true

For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
15, 10, 10, 15 = true

For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
solution(yourLeft, yourRight, friendsLeft, friendsRight) = false.
15 10, 15, 9
*/

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    const friend = [friendsLeft, friendsRight]
    const result = friend.reduce((acc, current) => {
        if (current === yourRight) return acc + 1;
        if (current === yourLeft) return acc + 1
        return acc
    }, 0)
    return result === 2 
}

console.log(solution(10, 15, 15, 10)); // true
console.log(solution(15, 10, 15, 10)); // true
console.log(solution(15, 10, 15, 9)); // false
console.log(solution(1, 10, 10, 0)); // false