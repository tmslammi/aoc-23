class Game {
  winningNumbers: number[]
  playerNumbers: number[]

  constructor(winningNumbers: number[], playerNumbers: number[]) {
    this.winningNumbers = winningNumbers
    this.playerNumbers = playerNumbers
  }

  getScore() {
    return this.winningNumbers.reduce((score, winningNumber) => {
      return this.playerNumbers.includes(winningNumber)
        ? score === 0 ? 1 : score * 2 : score
    }, 0)
  }

  getMatches() {
    return this.winningNumbers.reduce((matches, winningNumber) => {
      return this.playerNumbers.includes(winningNumber)
        ? matches + 1 : matches
    }, 0)
  }
}

function parseGames(lines: string[]): Game[] {
  return lines.map(line => {
    const [, numbers] = line.split(':')
    const [winningNumbers, playerNumbers] = numbers.split('|')

    const parsedWinningNumbers = winningNumbers.trim().split(' ')
      .filter(n => n !== '').map(n => Number(n.trim()))
    const parsedPlayerNumbers = playerNumbers.trim().split(' ')
      .filter(n => n !== '').map(n => Number(n.trim()))

    const game = new Game(
      parsedWinningNumbers,
      parsedPlayerNumbers
    )

    return game
  })
}

export function p1(lines: string[]) {
  return parseGames(lines).reduce((score, game) => {
    return score + game.getScore()
  }, 0)
}

export function p2(lines: string[]) {
  const games = parseGames(lines)
  const gameScoreMap = new Map<number, number>()

  games.forEach((game, index) => {
    const matches = game.getMatches()
    if (!gameScoreMap.has(index)) {
      gameScoreMap.set(index, 1)
    }

    const currentGameScore = gameScoreMap.get(index)!

    for (let matchIndex = 1; matchIndex <= matches; matchIndex++) {
      const nextGameIndex = index + matchIndex
      if (!gameScoreMap.has(nextGameIndex)) {
        gameScoreMap.set(nextGameIndex, 1)
      }

      const nextGameScore = gameScoreMap.get(nextGameIndex)!
      gameScoreMap.set(nextGameIndex, nextGameScore + currentGameScore)
    }
  })

  return [...gameScoreMap.values()].reduce((a, b) => {
    return a + b
  }, 0)
}

export default {
  p1,
  p2,
}