console.clear()
import { readFileSync } from 'fs'
import { join } from 'path'

const input = readFileSync(join(__dirname, 'input.txt'))
const demo = readFileSync(join(__dirname, 'demo.txt'))

const array = demo.toString().split(/\r?\n/)

const tree = {}
const stack = [{}]
let nodo_attuale = {}
array.forEach((line) => {
  const nome_nodo = stack.pop()

  // comando cd
  if (line.startsWith('$ cd ')) {
    const dir = line.replace('$ cd ', '')
    if (dir == '..') return

    stack.push(dir)
    nodo_attuale = {
      nodo: dir,
      files: [],
      dir: [],
    }
    tree[dir] = nodo_attuale
  } else if (line.startsWith('$ ls')) {
  }
  // folder
  else if (line.startsWith('dir ')) {
    const folder = line.replace('dir ', '')
    nodo.dir.push({ nodo: folder, files: [], dir: [] })
    stack.push(nodo)
  }
  // file
  else {
    nodo.size += +line.match(/\d+/)[0]
    stack.push(nodo)
  }

  stack.push(nodo)
})
console.log(tree)

/* const calcolaPeso = nodo => {
  if (tree[nodo].children.length > 0) {
    const peso_figli = tree[nodo].children.reduce((n) => calcolaPeso(n))
    console.log({nodo, peso_figli})
    return +tree[nodo].size + peso_figli
  } else {
    return +tree[nodo].size
  }
}


let soluzione
Object.keys(tree).forEach(nodo => {
  const peso = calcolaPeso(nodo)
  console.log(nodo, peso);
  if (peso < 100000) soluzione += nodo
})

console.log(soluzione) */
