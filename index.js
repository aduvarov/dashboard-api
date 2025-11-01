import express from 'express'

const host = '127.0.0.1'
const port = 8000
const app = express()

app.all('/hello', (req, res, next) => {
    console.log('All')
    next()
})

const cb = (req, res, next) => {
    console.log('CB1')
    next()
}

app.route('/user')
    .get(cb, (req, res) => {
        res.send('Привет')
    })
    .post((req, res) => {
        res.send('Привет POST!')
    })

app.listen(port, () => {
    console.log(`Сервер запущен на ${host}:${port}`)
})
