class Game {
  name: string
  winningNumbers: number[]
  playerNumbers: number[]

  constructor(name: string, winningNumbers: number[], playerNumbers: number[]) {
    this.name = name
    this.winningNumbers = winningNumbers
    this.playerNumbers = playerNumbers
  }

  getScore() {
    return this.winningNumbers.reduce((score, winningNumber) => {
      return this.playerNumbers.includes(winningNumber)
        ? score === 0 ? 1 : score * 2 : score
    }, 0)
  }
}

function parseGames(lines: string[]): Game[] {
  return lines.map(line => {
    const [card, numbers] = line.split(':')
    const [winningNumbers, playerNumbers] = numbers.split('|')

    const parsedWinningNumbers = winningNumbers.trim().split(' ')
      .filter(n => n !== '').map(n => Number(n.trim()))
    const parsedPlayerNumbers = playerNumbers.trim().split(' ')
      .filter(n => n !== '').map(n => Number(n.trim()))

    const game = new Game(
      card,
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
  return 0
}

export default {
  p1,
  p2,
}