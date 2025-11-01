import express from 'express'

const host = '127.0.0.1'
const port = 8000
const app = express()

app.get('/hello', (req, res) => {
    // res.status(201).json({ success: true })
    // res.download('/test.pdf', 'tssst.pdf')
    // res.redirect(301, 'https://example.com')
    res.cookie('token', 'asdfasdfasdf', {
        domain: 'devlab.kz',
        path: '/',
        secure: true,
    })
    res.location('')
    res.links({
        next: 'asdf',
    })
    res.clearCookie('token')
    res.set('Content-Type', 'text/plain')
    res.type('application/json')
    res.append('Warning', 666)
    res.send('Привет')
})

app.listen(port, () => {
    console.log(`Сервер запущен на ${host}:${port}`)
})
