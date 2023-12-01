import { first, isDigit, join, last, readFile } from "../util"

async function p1() {
    const lines = await readFile("day1/input.txt")

    return lines.map(line => {
        const digits: string[] = []

        for (const char of line) {
            if (isDigit(char)) {
                digits.push(char)
            }
        }

        return join("", first(digits), last(digits))
    }).reduce((sum, digit) => {
        return sum + parseInt(digit)
    }, 0)
}

async function p2() {
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

    const lines = await readFile("day1/input.txt")

    return lines.map(line => {
        // Find all digits and words, overlapping included (Ty stackoverflow)
        const regex = new RegExp(`(?=(\\d|${Object.keys(wordsToNumbers).join('|')}))`, 'g')

        const digits = [...line.matchAll(regex)].map(matches => {
            // Second element includes the actual match 
            return matches[1]
        }).map((match) => {
            // If it's a digit, all good
            if (isDigit(match)) {
                return match
            }

            // Otherwise, it's a word, so it has to be converted to a digit
            return wordsToNumbers[match]
        })

        return join("", first(digits), last(digits))
    }).reduce((sum, digit) => {
        return sum + parseInt(digit)
    }, 0)
}

export default {
    p1,
    p2
}