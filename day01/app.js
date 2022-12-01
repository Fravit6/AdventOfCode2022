console.clear()
var fs = require('fs')

console.log('------------------------------------------')

// fs.readFile('input.txt', 'utf8', function (err, data) {
fs.readFile('demo.txt', 'utf8', function (err, data) {
  if (err) throw err

  var lines = data.split(/\r?\n/)
})
