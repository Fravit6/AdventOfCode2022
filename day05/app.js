console.clear()
import { readFileSync } from 'fs'
import { join } from 'path'

const input = readFileSync(join(__dirname, 'input.txt'))
const demo = readFileSync(join(__dirname, 'demo.txt'))

/*
 * DEMO:
 *     [D]
 * [N] [C]
 * [Z] [M] [P]
 *  1   2   3
 */

/*
 * INPUT:
 *
 * [Q] [J]                         [H]
 * [G] [S] [Q]     [Z]             [P]
 * [P] [F] [M]     [F]     [F]     [S]
 * [R] [R] [P] [F] [V]     [D]     [L]
 * [L] [W] [W] [D] [W] [S] [V]     [G]
 * [C] [H] [H] [T] [D] [L] [M] [B] [B]
 * [T] [Q] [B] [S] [L] [C] [B] [J] [N]
 * [F] [N] [F] [V] [Q] [Z] [Z] [T] [Q]
 *  1   2   3   4   5   6   7   8   9
 */
const stacks_demo = [['Z', 'N'], ['M', 'C', 'D'], ['P']]

const stacks_input = [
  ['F', 'T', 'C', 'L', 'R', 'P', 'G', 'Q'],
  ['N', 'Q', 'H', 'W', 'R', 'F', 'S', 'J'],
  ['F', 'B', 'H', 'W', 'P', 'M', 'Q'],
  ['V', 'S', 'T', 'D', 'F'],
  ['Q', 'L', 'D', 'W', 'V', 'F', 'Z'],
  ['Z', 'C', 'L', 'S'],
  ['Z', 'B', 'M', 'V', 'D', 'F'],
  ['T', 'J', 'B'],
  ['Q', 'N', 'B', 'G', 'L', 'S', 'P', 'H'],
]

let array = input.toString().split(/\r?\n/)
const stacks = stacks_input

array.forEach((stringa) => {
  const numbers = stringa.match(/\d+/g)

  for (let move = 1; move <= numbers[0]; move++) {
    stacks[numbers[2] - 1].push(stacks[numbers[1] - 1].pop())
  }
})
console.log('Soluzione 1: ')
stacks.forEach((s) => console.log(s.pop()))

// Part 2
array.forEach((stringa) => {
  const numbers = stringa.match(/\d+/g)

  const to_move = stacks[numbers[1] - 1].slice(-numbers[0])
  for (let move = 1; move <= numbers[0]; move++) {
    stacks[numbers[1] - 1].pop()
  }
  stacks[numbers[2] - 1].push(...to_move)
})

console.log('Soluzione 2: ')
stacks.forEach((s) => console.log(s.pop()))
