const express = require ('express')
const app = express()
const os = require('os')
const hostname = os.hostname()

console.log(hostname)


app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('pages/index', {hostname : hostname, title : 'home'})
})

app.get('/about', function(req, res) {
    res.render('pages/about', {title: 'about'})
})

app.listen(3000, function() {
    console.log('server is up on port 3000')
})
