import express from 'express'

const host = '127.0.0.1'
const port = 8000
const app = express()

app.get('/hello', (req, res) => {
    res.send('Привет')
})

app.listen(port, () => {
    console.log(`Сервер запущен на ${host}:${port}`)
})
