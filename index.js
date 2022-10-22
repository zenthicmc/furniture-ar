const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/camera', (req, res) => {
	res.render('camera')
})

app.use((req, res, next) => {
   res.status(404).send('<h1>404 Not Found</h1>');
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})