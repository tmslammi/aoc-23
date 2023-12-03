import { describe, expect, it } from 'bun:test'

import day3 from '.'
import { readFile } from '../util'

describe('day3', () => {
  it('p1 example', async () => {
    const lines = await readFile('day3/example_1.txt')

    const actual = day3.p1(lines)

    expect(actual).toBe(4361)
  })

  it('p1 full', async () => {
    const lines = await readFile('day3/input.txt')

    const actual = day3.p1(lines)

    expect(actual).toBe(530495)
  })

  it.skip('p2 example', async () => {
    const lines = await readFile('day3/example_2.txt')

    const actual = day3.p2(lines)

    expect(actual).toBe(2286)
  })

  it.skip('p2 full', async () => {
    const lines = await readFile('day3/input.txt')

    const actual = day3.p2(lines)

    expect(actual).toBe(72227)
  })
})
