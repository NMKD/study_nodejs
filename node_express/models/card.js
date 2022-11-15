const path = require('path')
const fs = require('fs')

// equire.main.filename

class Card {

    static async add(course) {
        const card = await this.fetch()
        console.log(course)
        const i = card.courses.findIndex(k => k.id === course.id)
        const candidate = card.courses[i]
        
        if (candidate) {
            // is
            candidate.count++
            card.courses[i] = candidate
        } else {
            // add course
            course["count"] = 1
            card.courses.push(course)
        }

        card.price += Number(course.price)

        return new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname, '..', 'data', 'card.json'), JSON.stringify(card), (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })

    }

    static async fetch() {
        return new Promise((resolve, rejects) => {
            fs.readFile(path.join(__dirname, '..', 'data', 'card.json'), 
            'utf-8', 
            (err, content) => {
                if (err) {
                    rejects(err)
                } else {
                    resolve(JSON.parse(content))
                }
            })
        })
    }

}

module.exports = Card

