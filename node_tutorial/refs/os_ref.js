// Operation System
const os = require('os')
// console.log(os.networkInterfaces())
console.log(os.hostname())
console.log(os.release())
// darwin - MacOS
console.log(os.platform())
// Архитектура
// console.log(os.arch())
// Иформация CPU
// console.log(os.cpus())
//Свободная память
console.log(os.freemem())
//Сколько памяти
console.log(os.totalmem())
// Коренвая директория
console.log(os.homedir())
// Сколько система работает
console.log(os.uptime() / 36000)