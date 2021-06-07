import { GRID, NUMBERS } from 'typings'
import { shuffle } from 'utils'

const gridExample: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking/recursive function to check all the possible combinations of numbers a solution is found
 * @param grid  9X9 Sudoku Grid
 */
function fillGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)

      for (let value of numbers) {
        // not in grid row?
        if (!grid[row].includes(value)) {
          // not in grid col?
          let isNotInCol = true
          for (let i = 0; i < 9; i++) {
            if (value === grid[i][col]) isNotInCol = false
          }
          if (isNotInCol) {
            // not in grid square?
            // ...if this is the case..
          }
        }
        grid[row][col] = value
        // check grid if full; if yes stop and return
        // otherwise we run fillGrid(grid)
      }

      break
    }
  }

  grid[row][col] = 0
}

export default fillGrid
