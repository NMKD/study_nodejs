const uuid = require('uuid').v4
const fs = require('fs')
const path = require('path')

class Course {
    constructor(title, price, url) {
        this.title = title
        this.price = price
        this.url = url
        this.id = uuid()
    }

    // преобразовать в формат JSON и сохранить файл
    async save() {
        const courses = await this.getAll()
        courses.push(this)

        return new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname, '..', 'data', 'courses.json'),
              JSON.stringify(courses),
              (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
              }
            )
        })
    }

    static getAll() { 
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '..', 'data', 'courses.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        })

    }

    static async update(course) {
        const courses = await this.getAll()
        const i = courses.findIndex(k => k.id === course.id)
        courses[i] = course

        return new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname, '..', 'data', 'courses.json'),
              JSON.stringify(courses),
              (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
              }
            )
        })
    }

    static async getId(id) {
        const courses = await this.getAll()
        return courses.find(c => c.id === id)
    }
}

module.exports = Course