console.clear()
import { readFileSync } from 'fs'
import { join } from 'path'

const input = readFileSync(join(__dirname, 'input.txt'))
const demo = readFileSync(join(__dirname, 'demo.txt'))

let array = input.toString().split(/\r?\n/)

let full_overlap = 0
let basic_overlap = 0
array.forEach((stringa) => {
  const borders = stringa.split(/[,\s-]+/).map((e) => +e)

  // Part 1
  if (
    (borders[0] >= borders[2] && borders[1] <= borders[3]) ||
    (borders[0] <= borders[2] && borders[1] >= borders[3])
  ) {
    full_overlap++
  }

  // Part 2
  if (
    (borders[0] <= borders[3] && borders[1] >= borders[3]) ||
    (borders[0] <= borders[2] && borders[1] >= borders[2]) ||
    (borders[0] >= borders[2] && borders[1] <= borders[3])
  ) {
    basic_overlap++
  }
})
console.log('Soluzione 1: ', full_overlap)
console.log('Soluzione 2: ', basic_overlap)
