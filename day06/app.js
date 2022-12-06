console.clear()
import { readFileSync } from 'fs'
import { join } from 'path'

const input = readFileSync(join(__dirname, 'input.txt'))
const demo = readFileSync(join(__dirname, 'demo.txt'))

const array = input.toString().split(/\r?\n/)

const trovaSet = (array, limit) => {
  let soluzione = 0
  array.forEach((stringa) => {
    for (let i = limit - 1; i < stringa.length; i++) {
      const finestra = new Set([])

      for (let index = 0; index < limit; index++) {
        finestra.add(stringa[i - index])
      }

      if (finestra.size === limit) {
        soluzione += i + 1
        break
      }
    }
  })

  return soluzione
}

console.log('Soluzione 1: ', trovaSet(array, 4))
console.log('Soluzione 2: ', trovaSet(array, 14))
