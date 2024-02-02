/* 
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]

the output should be

solution(picture) = ["*****",
                     "*abc*",
                     "*ded*",
                     "*****"]
*/

function solution(picture) {
    let borderLength = 0

    for (let i = 0; i < picture.length; i++) {
        picture[i] = '*' + picture[i] + '*'
        let temp = picture[i].length
        if (temp > borderLength) {
            borderLength = temp;
        }
    }

    let borders = ''

    for (let i = 0; i < borderLength; i++) {
        borders += '*'
    }

    picture.unshift(borders) // like push but adds items to the begining of the array
    picture.push(borders) // add items to the end of the array

    return picture;
}


console.log(solution(["abc", "ded"]))