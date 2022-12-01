console.clear()
var fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'input.txt'))
const demo = fs.readFileSync(path.join(__dirname, 'demo.txt'))

const array = input.toString().split(/\r?\n/)
array.push('')

// Part 1
let max = 0
let window = 0
for (const elem of array) {
  if (elem != '') window += +elem
  else {
    if (window >= max) max = +window
    window = 0
  }
}
console.log('Soluzione 1: ', max)

// Part 2
let somme = []
window = 0
max = [0, 0, 0]
for (const elem of array) {
  if (elem != '') window += +elem
  else {
    somme.push(window)
    window = 0
  }
}
//console.log(somme)

for (const somma of somme) {
  const minimo = max.find((e) => e <= somma)
  if (somma >= minimo) {
    max.splice(max.indexOf(minimo), 0, somma)
    max.pop()
  }
}

console.log(
  'Soluzione 2: ',
  max.reduce((a, b) => a + b, 0)
)
