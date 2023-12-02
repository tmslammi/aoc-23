class Cube {
    amount: number
    color: string

    constructor(amount: number, color: string) {
        this.amount = amount
        this.color = color
    }
}

class Game {
    id: number
    cubes: Cube[]
    constraints: Record<string, number>

    constructor(id: number) {
        this.id = id
        this.cubes = []

        this.constraints = {
            "red": 12,
            "green": 13,
            "blue": 14,
        }
    }

    addCube(cube: Cube) {
        this.cubes.push(cube)
    }

    isValid() {
        return this.cubes.every(({ amount, color }) => {
            const constraint = this.constraints[color]
            return amount <= constraint
        })
    }
}

export function p1(lines: string[]) {
    return lines.map(line => {
        const [gameName, gameScores] = line.split(":")
        const gameId = gameName.split(" ")[1]
        const game = new Game(parseInt(gameId))

        gameScores.split(",").forEach(gameScore => {
            const scores = gameScore.split(";")

            return scores.map(s => {
                const [amount, color] = s.trim().split(" ")

                return game.addCube(new Cube(parseInt(amount), color))
            })
        })

        return game
    }).filter(game => {
        return game.isValid()
    }).map(({ id }) => {
        return id
    }).reduce((acc, id) => {
        return acc + id
    }, 0)
}

export function p2(lines: string[]) {
    throw new Error('Not implemented');
}

export default {
    p1,
    p2,
};
