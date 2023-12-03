import { describe, expect, it } from 'bun:test'

import day3 from '.'
import { readFile } from '../util'

describe('day3', () => {
  it('p1 example', async () => {
    const lines = await readFile('day3/example.txt')

    const actual = day3.p1(lines)

    expect(actual).toBe(4361)
  })

  it('p1 full', async () => {
    const lines = await readFile('day3/input.txt')

    const actual = day3.p1(lines)

    expect(actual).toBe(530495)
  })

  it('p2 example', async () => {
    const lines = await readFile('day3/example.txt')

    const actual = day3.p2(lines)

    expect(actual).toBe(467835)
  })

  it('p2 full', async () => {
    const lines = await readFile('day3/input.txt')

    const actual = day3.p2(lines)

    expect(actual).toBe(80253814)
  })
})
