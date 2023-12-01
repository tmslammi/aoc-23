export async function readFile(filename: string,) {
    const file = Bun.file(filename)

    const content = await file.text()

    const lines = content.split("\n")

    return lines
}

export function isDigit(char: string) {
    return new RegExp(/\d/).test(char)
}

export function first<T>(arr: T[]) {
    return arr[0]
}

export function last<T>(arr: T[]) {
    return arr[arr.length - 1]
}

export function join<T>(separator: string, ...args: T[]) {
    return args.join(separator)
}