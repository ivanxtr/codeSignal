/* 
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Algunas personas están paradas en fila en un parque. Hay árboles entre ellos que no se pueden mover. Tu tarea es reorganizar a las personas según su altura en orden no descendente sin mover los árboles. ¡La gente puede ser muy alta!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

[-1, 150, 190, 170, -1, -1, 160, 180]
[-1, 150, 170, 190, -1, -1, 160, 180]
[-1, 150, 160, 190, -1, -1, 170, 180]
[-1, 150, 160, 170, -1, -1, 190, 180]
[-1, 150, 160, 170, -1, -1, 180, 190]
*/

function solution(a) {
    let temp = 0;

    for (let i = 0; i < a.length; i++) {
        for (let f = i; f < a.length; f++) {
            if (a[i] > 0 && a[f] > 0) {
                if (a[i] > a[f]) {
                    temp = a[i];
                    a[i] = a[f];
                    a[f] = temp;
                    temp = 0;
                }
            }
        }
    }
    return a
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))