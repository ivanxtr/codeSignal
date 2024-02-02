/* 
After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

Example

For

matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
the output should be
solution(matrix) = 9.

example 1

There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.

For

matrix = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]]
the output should be
solution(matrix) = 9.

example 2

Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it). Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.


Después de hacerse famosos, los CodeBots decidieron mudarse juntos a un nuevo edificio. Cada una de las habitaciones tiene un coste diferente, y algunas de ellas son gratuitas, ¡pero corre el rumor de que todas las habitaciones gratuitas están embrujadas! Dado que los CodeBots son bastante supersticiosos, se niegan a permanecer en cualquiera de las habitaciones libres, o en cualquiera de las habitaciones debajo de cualquiera de las habitaciones libres.

Dada una matriz, una matriz rectangular de números enteros, donde cada valor representa el costo de la habitación, su tarea es devolver la suma total de todas las habitaciones que son adecuadas para los CodeBots (es decir: sumar todos los valores que no aparecen a continuación un 0).

solution : make the numbers after the zero to zero, and then sum the entire array

initial 
[
    [1, 1, 1, 0], 
    [0, 5, 0, 1], 
    [2, 1, 3, 10]
]

after
[
    [1, 1, 1, 0], 
    [0, 5, 0, 0], 
    [0, 1, 0, 0]
]

*/

function solution(matrix) {
    let sum = 0;

    for (let r = 0; r < matrix[0].length; r++) {
        for (let c = 0; c < matrix.length; c++) {
            if (matrix[c][r] === 0 && c < matrix.length -1) {
                matrix[c + 1][r] = 0;
            }
            sum += matrix[c][r]
        }
    }

    return sum;
}

console.log(solution(
    [
        [1, 1, 1, 0], 
        [0, 5, 0, 1], 
        [2, 1, 3, 10]
    ]
))

console.log(solution(
    [
        [0, 1, 1, 2], 
        [0, 5, 0, 0], 
        [2, 0, 3, 3]
    ]
))
