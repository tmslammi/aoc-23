const constraints: Record<string, number> = {
    "red": 12,
    "green": 13,
    "blue": 14,
}

class Cube {
    color: string;
    size: number

    constructor(color: string, size: number) {
        this.color = color;
        this.size = size;
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
        return this.cubes.every(({ size, color }) => size <= constraints[color]);
    }

    getMaxForEachColor() {
        return this.cubes.reduce<Record<string, number>>((scores, { size, color }) => {
            scores[color] = Math.max(scores[color] ?? 0, size)
            return scores
        }, {})
    }

    getPower() {
        const { red, green, blue } = this.getMaxForEachColor()
        return red * green * blue
    }
}

function parseGame(line: string): Game {
    const [gameName, cubes] = line.split(":")
    const gameId = parseInt(gameName.split(" ")[1])
    const game = new Game(gameId);

    cubes.split(",").forEach(cubes => {
        cubes.split(";").forEach(cube => {
            const [size, color] = cube.trim().split(" ")
            game.addCube(new Cube(color, parseInt(size)))
        });
    });

    return game;
}

export function p1(lines: string[]): number {
    return lines.map(parseGame).filter(game => {
        return game.isValid();
    }).reduce((acc, game) => {
        return acc + game.id;
    }, 0);
}

export function p2(lines: string[]): number {
    return lines.map(parseGame).reduce((acc, game) => {
        return acc + game.getPower();
    }, 0);
}

export default {
    p1,
    p2,
};
