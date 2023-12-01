import { describe, expect, it } from "bun:test"

import day1 from "."

describe("day1", () => {
    it("p1", async () => {
        const actual = await day1.p1()
        expect(actual).toBe(54597)
    })

    it("p2", async () => {
        const actual = await day1.p2()
        expect(actual).toBe(54504)
    })
})