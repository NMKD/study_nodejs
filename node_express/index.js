const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
// регистрируем, что в express есть движок express-handlebars, его значение hbs.engine
app.engine('hbs', hbs.engine) 
// используем движок
app.set('view engine', 'hbs')
// где будут шаблоны
app.set('views', 'views')

app.get('/', (req, res) => {
   res.render('index')
})

app.get('/about', (req, res) => {
   res.render('about')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server is running on PORT: ', PORT)
})