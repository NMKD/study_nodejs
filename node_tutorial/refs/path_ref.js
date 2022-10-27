const path = require('path')

console.log(path.basename(__filename))
console.log(path.basename(__dirname))
console.log(path.dirname(__dirname))
console.log(path.dirname(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename).dir)

// путь до папки
console.log(path.join(__dirname, 'test', 'index.html'))
console.log(path.resolve(__dirname, 'test2', '/second.html'))
