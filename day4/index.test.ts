import { describe, expect, it } from 'bun:test'

import day4 from '.'
import { readFile } from '../util'

describe('day4', () => {
  it('p1 example', async () => {
    const lines = await readFile('day4/example.txt')

    const actual = day4.p1(lines)

    expect(actual).toBe(13)
  })

  it('p1 full', async () => {
    const lines = await readFile('day4/input.txt')

    const actual = day4.p1(lines)

    expect(actual).toBe(32001)
  })

  it.skip('p2 example', async () => {
    const lines = await readFile('day4/example.txt')

    const actual = day4.p2(lines)

    expect(actual).toBe(467835)
  })

  it.skip('p2 full', async () => {
    const lines = await readFile('day4/input.txt')

    const actual = day4.p2(lines)

    expect(actual).toBe(80253814)
  })
})
