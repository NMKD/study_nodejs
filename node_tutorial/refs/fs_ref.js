// File System
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if(err) throw err

//     console.log('Ура получилось')
// })
fs.mkdir(path.join(__dirname, '../views'), (err) => {
    if (err) throw err
    console.log('Ура получилось')
})

fs.writeFile(path.join(__dirname, '../refs', 'events_ref.js'),
    `console.log('yes')`,
    err => {
        if (err) throw err;
        console.log("File done")
    })

// fs.writeFile(path.join(__dirname, "notes", 'mynote.txt'),
//     'Hello world\n',
//     err => {
//         if (err) throw err;
//         console.log('Файл создан');

//         fs.appendFile(path.join(__dirname, 'notes', 'mynote.txt'),
//             'My name is Kristina',
//             err => {
//                 if (err) throw err;
//                 console.log('Файл изменен');

//                 fs.readFile(path.join(__dirname, 'notes', 'mynote.txt'),
//                     'utf-8',
//                     (err, data) => {
//                         if (err) throw err;
//                         console.log(data);
//                     }
//                 )
//             }
//         )
//     },

// )


// fs.rename(
//     path.join(__dirname, 'notes', 'test.txt'), 
//     path.join(__dirname, 'notes', 'mynote.txt'), 
//     err => {
//         if (err) throw err;
//         console.log('Файл переименован');
//     }
// )

// fs.rename(
//     path.join(__dirname, '../refs', 'path.js'),
//     path.join(__dirname, '../refs', 'path_ref.js'),
//     err => {
//         if (err) throw err;
//         console.log('Файл переименован');
//     }

// )