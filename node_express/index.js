const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')

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

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server is running on PORT: ', PORT)
})