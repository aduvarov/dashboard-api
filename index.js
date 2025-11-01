import express from 'express'
import { userRouter } from './users/users.js'

const host = '127.0.0.1'
const port = 8000
const app = express()

app.get('/hello', (req, res) => {
    res.send('Привет')
})

app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Сервер запущен на ${host}:${port}`)
})
