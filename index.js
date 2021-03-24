const express = require('express')
const cors = require('cors')
const  bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const fruits = {
        name: "banana",
        price: "200"
    }
    res.send(fruits)
})

app.get('/country/name', (req, res) => {
    const country = {
        name: "Bangladesh",
        area: "1,47,570"
    }

    res.send(country)
})

const users = ['rafi', 'rakib', 'tasib', 'tawrat', 'tabassum', 'tanha']

app.get('/user/:id', (req, res) => {
    const id = req.params.id
    const name = users[id]
    res.send({id, name})
})


app.post('/adduser', (req, res) => {
    const user = req.body
    user.id = 55
    res.send(req.body)
})


app.listen(3000, () => console.log('listen to port 3000'))

