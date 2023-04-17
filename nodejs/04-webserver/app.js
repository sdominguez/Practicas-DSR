const express = require('express')
const app = express()
const port = 8084

app.use(express.static('public'));

/*
app.get('/', (req, res)=>{
  res.send('Home Page')
})

app.get('/saludo', (req, res)=> {
  res.send('Hola desde Express')
})
*/

app.get('*', (req, res)=>{
  //res.send('404 | Page not found')
  res.sendFile(__dirname+'/public/404.html');
})

app.listen(port, ()=>{
  console.log(`app listening in http://localhost:${port}`)
})
