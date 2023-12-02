import { first, isDigit, last } from "../util"

function p1(lines: string[]) {
    return lines.map(line => {
        const digits: string[] = []

        for (const char of line) {
            if (isDigit(char)) {
                digits.push(char)
            }
        }

        return [first(digits), last(digits)].join("")
    }).reduce((sum, digit) => {
        return sum + parseInt(digit)
    }, 0)
}

function p2(lines: string[]) {
    const wordsToNumbers: Record<string, string> = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    }

    return lines.map(line => {
        const regex = new RegExp(`(?=(\\d|${Object.keys(wordsToNumbers).join('|')}))`, 'g')

        const digits = [...line.matchAll(regex)].map(matches => {
            return matches[1]
        }).map(match => {
            if (isDigit(match)) {
                return match
            }

            return wordsToNumbers[match]
        })

        return [first(digits), last(digits)].join("")
    }).reduce((sum, digit) => {
        return sum + parseInt(digit)
    }, 0)
}

export default {
    p1,
    p2
}