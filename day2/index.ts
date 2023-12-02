type Color = 'red' | 'green' | 'blue'

const constraints: Record<Color, number> = {
  'red': 12,
  'green': 13,
  'blue': 14,
}

class Cube {
  color: Color
  size: number

  constructor(color: Color, size: number) {
    this.color = color
    this.size = size
  }
}

class Game {
  id: number
  cubes: Cube[] = []

  constructor(id: number) {
    this.id = id
    this.cubes = []
  }

  addCube(cube: Cube) {
    this.cubes.push(cube)
  }

  isValid() {
    return this.cubes.every(({ size, color }) => size <= constraints[color])
  }

  getPower() {
    const { red, green, blue } = this.cubes.reduce<Record<Color, number>>((scores, { size, color }) => {
      scores[color] = Math.max(scores[color] ?? 0, size)
      return scores
    }, {
      red: 0,
      green: 0,
      blue: 0,
    })

    return red * green * blue
  }
}

function parseGame(line: string): Game {
  const [gameName, games] = line.split(':')
  const gameId = parseInt(gameName.split(' ')[1])
  const game = new Game(gameId)

  games.split(',').forEach(parsedGames => {
    parsedGames.split(';').forEach(cube => {
      const [size, color] = cube.trim().split(' ')
      game.addCube(new Cube(color as Color, parseInt(size)))
    })
  })

  return game
}

export function p1(lines: string[]) {
  return lines.map(parseGame).filter(game => {
    return game.isValid()
  }).reduce((score, game) => {
    return score + game.id
  }, 0)
}

export function p2(lines: string[]) {
  return lines.map(parseGame).reduce((power, game) => {
    return power + game.getPower()
  }, 0)
}

export default {
  p1,
  p2,
}
