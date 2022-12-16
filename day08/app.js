console.clear()
import { readFileSync } from 'fs'
import { join } from 'path'

const input = readFileSync(join(__dirname, 'input.txt'))
const demo = readFileSync(join(__dirname, 'demo.txt'))

const array = demo.toString().split(/\r?\n/)

const matrice = []

array.forEach((line) => {
  matrice.push([...line].map((n) => +n))
})
// console.log(matrice.length)

let visibili = new Set([])

// Scan sinistra-destra
for (let i = 0; i < matrice.length; i++) {
  let max = matrice[i][0]
  for (let j = 0; j < matrice[i].length; j++) {
    const element = matrice[i][j]

    if (
      i == 0 ||
      j == 0 ||
      i == matrice.length - 1 ||
      j == matrice[i].length - 1
    ) {
      visibili.add(i + '-' + j)
      continue
    }

    if (element > max) {
      visibili.add(i + '-' + j)
      max = element
    }
  }
}

// Scan destra-sinistra
for (let i = matrice.length - 1; i >= 0; i--) {
  let max = matrice[i][matrice.length - 1]
  for (let j = matrice[i].length - 1; j >= 0; j--) {
    const element = matrice[i][j]

    if (element > max) {
      visibili.add(i + '-' + j)
      max = element
    }
  }
}

// Scan alto-basso
for (let i = 0; i < matrice.length; i++) {
  let max = matrice[0][i]
  for (let j = 0; j < matrice[i].length; j++) {
    const element = matrice[j][i]

    if (element > max) {
      visibili.add(j + '-' + i)
      max = element
    }
  }
}

// Scan basso-alto
for (let i = matrice.length - 1; i >= 0; i--) {
  let max = matrice[matrice.length - 1][i]
  // console.log(max)
  for (let j = matrice[i].length - 1; j >= 0; j--) {
    const element = matrice[j][i]
    // console.log(element)

    if (element > max) {
      visibili.add(j + '-' + i)
      max = element
    }
  }
}
// console.log(visibili)
console.log(visibili.size)

let max_visibili = 0
// Scan intorno
for (let i = 0; i < matrice.length; i++) {
  for (let j = 0; j < matrice[i].length; j++) {
    const element = matrice[i][j]

    let visibili = 1

    let local_a = 0
    let local_b = 0
    let local_c = 0
    let local_d = 0
    let max_a = 0
    let max_b = 0
    let max_c = 0
    let max_d = 0
    // verso l'alto
    for (let ii = i - 1; ii >= 0; ii--) {
      if (i == 3 && j == 2) console.log(matrice[ii][j])
      if (matrice[ii][j] <= element && matrice[ii][j] > max_a) {
        local_a++
        max_a = matrice[ii][j]
      }
      if (i == 3 && j == 2) console.log(local_a)
      if (matrice[ii][j] >= element) break
    }
    // verso il basso
    for (let ii = i + 1; ii < matrice.length; ii++) {
      if (i == 3 && j == 2) console.log(matrice[ii][j])
      if (matrice[ii][j] <= element && matrice[ii][j] > max_b) {
        local_b++
        max_b = matrice[ii][j]
      }
      if (i == 3 && j == 2) console.log(local_b)
      if (matrice[ii][j] >= element) break
    }
    // verso sx
    for (let jj = j - 1; jj >= 0; jj--) {
      if (i == 3 && j == 2) console.log(matrice[i][jj])
      if (matrice[i][jj] <= element && matrice[i][jj] > max_c) {
        local_c++
        max_c = matrice[i][jj]
      }
      if (i == 3 && j == 2) console.log(local_c)
      if (matrice[i][jj] >= element) break
    }
    // verso dv
    for (let jj = j + 1; jj < matrice.length; jj++) {
      if (i == 3 && j == 2) console.log(matrice[i][jj])
      if (matrice[i][jj] <= element && matrice[i][jj] > max_d) {
        local_d++
        max_d = matrice[i][jj]
      }
      if (i == 3 && j == 2) console.log(local_d)
      if (matrice[i][jj] >= element) break
    }

    visibili = local_a * local_b * local_c * local_d
    if (i == 3 && j == 2) console.log(element, visibili)
    max_visibili = Math.max(max_visibili, visibili)
  }
}

console.log(max_visibili)
