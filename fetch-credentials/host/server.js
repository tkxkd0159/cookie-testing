import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import dirname from './utils/dirname.js'

const app = express()
const __dirname = dirname(import.meta.url)

app.use(cookieParser())

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://192.168.0.14:8080')
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    next()
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'index.html'))
})

app.use('/set-cookies', async (req, res) => {
    res.cookie('None', 'Host', {sameSite: 'none', secure: true})
    res.cookie('Lax', 'Host', {sameSite: 'lax'})
    res.cookie('Strict', 'Host', {sameSite: 'strict'})
    res.send('Host cookies set.')
})

// Simply to log what cookies are present
app.post('/log', async (req, res) => {
    console.log(req.cookies)
})

app.listen(3000, function () {
    console.log('App listening at http://lvh.me:3000/')
})
