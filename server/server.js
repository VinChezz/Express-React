const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(bodyParser.json())
app.use(cors())

const data = {
    messages: 'hello from the server'
}

app.get('/api', (req, res) => {
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})