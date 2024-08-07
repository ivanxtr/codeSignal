/* 
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

solution(matrix) = [[1, 2, 1],
                    [2, 1, 1],
                    [1, 1, 1]]
*/

function solutionMatrix(matrix) {
    const res = []
    for (let y = 0; y < matrix.length; y++) {
        const line = []
        for (let x = 0; x < matrix[y].length; x++) {
            let count = 0
            for (let a = -1; a < 2; a++) {
                for (let b = -1; b < 2; b++) {
                    if (a === 0 && b === 0) continue
                    if (matrix[y + a] && matrix[y + a][x + b]) count++
                }
            }
            line.push(count)
        }
        res.push(line)
    }
    return res
}


const matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
]
          
console.log(solutionMatrix2(matrix))