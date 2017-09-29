
/*let app = require('./app').start(8080)
app.on ('root', function (response) {
  response.write('Je suis à la racine(mon Homepage)')
})
*/

let app = require('express')()

app.get('/', function (request, response) {
  response.send('This is the homepage')
})

app.get('/demo', function (request, response) {
  response.send('This is the demo page')
})

app.listen(3000)
