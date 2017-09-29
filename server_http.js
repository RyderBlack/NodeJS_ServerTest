/*
let http = require('http')
let fs = require('fs')
let url = require('url')


let server = http.createServer()

server.on('request', (request, response) => {

  response.writeHead(200)
  let query = url.parse(request.url, true).query
  let name = query.name === undefined ? 'anonyme' : query.name

  fs.readFile('index.html', 'utf-8', (err, data) => {

    if (err) {
      response.writeHead(404)
      response.end('Ce fichier n\'existe pas')
    } else {
      response.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
      })
      data = data.replace('{{ name }}', name)
      response.end(data)
    }

  })


})


server.listen(8080);
*/

//2eme exemple
/*
const EventEmitter = require('events');

let myEcouteur = new EventEmitter()

myEcouteur.on('saute', function() {
  console.log('J\'ai sauté !');
})

myEcouteur.emit('saute')

*/


//3eme exemle
let http = require('http')
let fs = require('fs')
let url = require('url')
const EventEmitter = require('events');

let myApp = {

  start: function (port) {
    let emitter = new EventEmitter()
    let server = http.createServer((request, response) => {

      response.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
      })

      if(request.url === '/') {
        emitter.emit('root', response)
      }
      response.end()

    }).listen(port)
    return emitter
  }
}

let app = myApp.start(8080)
app.on ('root', function (response) {
  response.write('Je suis à la racine(mon Homepage)')
})