import { describe, expect, it } from "bun:test";

import day2 from ".";
import { readFile } from "../util";

describe('day2', () => {
    it("p1 example", async () => {
        const lines = await readFile("day2/example_1.txt")

        const actual = day2.p1(lines)

        expect(actual).toBe(8)
    })

    it("p1 full", async () => {
        const lines = await readFile("day2/input.txt")

        const actual = day2.p1(lines)

        expect(actual).toBe(2716)
    })

    it.skip("p2 example", async () => {
        const lines = await readFile("day2/example_2.txt")

        day2.p2(lines)
    })

    it.skip("p2 example", async () => {
        const lines = await readFile("day2/input.txt")

        day2.p2(lines)
    })
})
