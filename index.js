const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/camera', (req, res) => {
	res.render('camera')
})

app.use((req, res, next) => {
	res.sendFile(__dirname + '/public' + req.path)
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})