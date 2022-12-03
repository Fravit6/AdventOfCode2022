console.clear()
import { readFileSync } from 'fs'
import { join } from 'path'

const input = readFileSync(join(__dirname, 'input.txt'))
const demo = readFileSync(join(__dirname, 'demo.txt'))

let array = input.toString().split(/\r?\n/)

const calcolaPriorita = (items) => {
  let soluzione = 0
  items.forEach((item) => {
    if (item === item.toUpperCase()) {
      soluzione += item.charCodeAt(0) - 38
    } else {
      soluzione += item.charCodeAt(0) - 96
    }
  })
  return soluzione
}

// Part 1
const items = []
array.forEach((stringa) => {
  const first = stringa.slice(0, stringa.length / 2)
  const last = stringa.slice(first.length, stringa.length)

  const trovati = new Set([])
  for (let i = 0; i < first.length; i++) {
    const char = first.charAt(i)
    if (last.indexOf(char) >= 0) {
      trovati.add(char)
    }
  }
  // console.log(trovati)
  trovati.forEach((e) => items.push(e))
})

console.log('Soluzione 1: ', calcolaPriorita(items))

// Part 2
const itemsB = []
for (let i = 0; i < array.length; i += 3) {
  const first = array[i]
  const second = array[i + 1]
  const last = array[i + 2]

  const trovati = new Set([])
  for (let j = 0; j < first.length; j++) {
    const char = first.charAt(j)
    if (second.indexOf(char) >= 0 && last.indexOf(char) >= 0) {
      trovati.add(char)
    }
  }
  trovati.forEach((e) => itemsB.push(e))
}

console.log('Soluzione 2: ', calcolaPriorita(itemsB))
