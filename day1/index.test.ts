import { describe, expect, it } from 'bun:test'

import day1 from '.'
import { readFile } from '../util'

describe('day1', () => {
  it('p1 example', async () => {
    const lines = await readFile('day1/example.txt')

    const actual = day1.p1(lines)
    expect(actual).toBe(142)
  })

  it('p1 full', async () => {
    const lines = await readFile('day1/input.txt')

    const actual = day1.p1(lines)
    expect(actual).toBe(54597)
  })

  it('p2 example', async () => {
    const lines = await readFile('day1/example_2.txt')

    const actual = day1.p2(lines)
    expect(actual).toBe(281)
  })

  it('p2 full', async () => {
    const lines = await readFile('day1/input.txt')

    const actual = day1.p2(lines)
    expect(actual).toBe(54504)
  })
})