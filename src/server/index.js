var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()



app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

