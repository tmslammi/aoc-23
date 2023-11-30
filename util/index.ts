export async function readFileText(
    filename: string,
) {
    const file = Bun.file(filename)

    const content = await file.text()

    const lines = content.split("\n")

    return lines
}