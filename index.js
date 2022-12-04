'use strict';

const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/katalog/kursi-kantor-modern', (req, res) => {
	res.render('kursi-kantor-modern')
})

app.get('/katalog/kursi-kantor-exclusive', (req, res) => {
	res.render('kursi-kantor-exclusive')
})

app.get('/katalog/meja-bundar-minimalis', (req, res) => {
	res.render('meja-bundar-minimalis')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})