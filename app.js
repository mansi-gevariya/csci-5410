const express = require('express');
const app = express()

app.get('/', function (request, response) {
  response.send('Hi')
})

app.get('/home', function (request, response) {
  response.send("Sample API Running")
})

app.listen(3000, function () {
  console.log("Listening to port 3000")
})