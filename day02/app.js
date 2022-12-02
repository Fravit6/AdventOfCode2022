console.clear()
import { readFileSync } from 'fs'
import { join } from 'path'

const input = readFileSync(join(__dirname, 'input.txt'))
const demo = readFileSync(join(__dirname, 'demo.txt'))

const array = input.toString().split(/\r?\n/)

/*
 * A = X = Rock       => 1 point
 * B = Y = Paper      => 2 points
 * C = Z = Scissors   => 3 points
 *
 * Lost               => 0 point
 * Draw               => 3 point
 * Win                => 6 point
 */

const scelte = {
  A: 1, // Rock
  B: 2, // Paper
  C: 3, // Scissors

  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
}

const punteggi = [
  [3, 6, 0],
  [0, 3, 6],
  [6, 0, 3],
]

// Part 1
let score = 0
array.map((turno) => {
  const avversario = turno.split(' ')[0]
  const io = turno.split(' ')[1]

  const x = avversario.charCodeAt(0) % 65
  const y = io.charCodeAt(0) % 88

  const punti = punteggi[x][y]
  score += +scelte[io] + punti
})
console.log('Soluzione 1: ', score)

// Part 2
const risposte = [
  [3, 1, 2],
  [1, 2, 3],
  [2, 3, 1],
]
score = 0
array.map((turno) => {
  const avversario = turno.split(' ')[0]
  const risultato = turno.split(' ')[1]

  const x = avversario.charCodeAt(0) % 65
  const r = risultato.charCodeAt(0) % 88

  const scelta = risposte[x][r]
  score += r * 3 + scelta
})
console.log('Soluzione 2: ', score)
