console.clear()
import { readFileSync } from 'fs'
import { join } from 'path'

const input = readFileSync(join(__dirname, 'input.txt'))
const demo = readFileSync(join(__dirname, 'demo.txt'))

const array = input.toString().split(/\r?\n/)
array.push('')

// Part 1
let max = 0
array.reduce((acc, elem) => {
  if (elem) return acc + +elem
  else max = Math.max(max, acc)
  return 0
}, 0)

console.log('Soluzione 1: ', max)

// Part 2
let somme = []
let window = 0
array.map((elem) => {
  window += +elem
  if (!elem) {
    somme.push(window)
    window = 0
  }
})

console.log(
  'Soluzione 2: ',
  somme
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0)
)
