const specialCharacters = ['@', '#', '$', '%', '&', '*', '=', '+', '/', '-']

export function p1(lines: string[]) {
  const grid = lines.map(line => line.split(''))

  const adjacents = [
    [0, 1],   // Top
    [0, -1],  // Bottom
    [-1, 0],  // Left
    [1, 0],   // Right
    [1, 1],   // Top right
    [-1, 1],  // Top left
    [1, -1],  // Bottom right
    [-1, -1]  // Bottom left
  ]

  const isSurroundedBySpecial = (x: number, y: number): boolean => {
    return adjacents.some(([adjecantX, adjecantY]) => {
      const posX = x + adjecantX
      const posY = y + adjecantY

      return posX >= 0 // Check if out of bounds on the left.
        && posX < grid.length //   Check if out of bounds on the right
        && posY >= 0 && posY < grid[0].length // Check if out of bounds on the top or bottom
        && specialCharacters.includes(grid[posX][posY])
    })
  }

  const surroundedNumbers: number[] = []

  grid.forEach((line, y) => {
    return [...line.join('').matchAll(/\d+/g)].map(match => {
      const startOfMatch = match.index

      let matchSurrounded = false

      for (let x = 0; x < match[0].length; x++) {
        if (typeof startOfMatch === 'undefined') {
          continue
        }

        if (isSurroundedBySpecial(y, startOfMatch + x)) {
          matchSurrounded = true
          break
        }
      }

      if (matchSurrounded) {
        surroundedNumbers.push(parseInt(match[0]))
      }
    })
  })

  return surroundedNumbers.reduce((acc, curr) => acc + curr, 0)
}

export function p2(lines: string[]) {
  return 0
}

export default {
  p1,
  p2,
}