import { describe, expect, it } from 'bun:test'

import day2 from '.'
import { readFile } from '../util'

describe('day2', () => {
  it('p1 example', async () => {
    const lines = await readFile('day2/example.txt')

    const actual = day2.p1(lines)

    expect(actual).toBe(8)
  })

  it('p1 full', async () => {
    const lines = await readFile('day2/input.txt')

    const actual = day2.p1(lines)

    expect(actual).toBe(2716)
  })

  it('p2 example', async () => {
    const lines = await readFile('day2/example.txt')

    const actual = day2.p2(lines)

    expect(actual).toBe(2286)
  })

  it('p2 full', async () => {
    const lines = await readFile('day2/input.txt')

    const actual = day2.p2(lines)

    expect(actual).toBe(72227)
  })
})
