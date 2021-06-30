const bodyParser = require('body-parser')
const express = require('express')
const saudacao = require('./saudacaomid')
const usuario = require('./api/usuario')

app.post('/usuario', usuario.salvar)
app.get('/usuario', usuario.obter)

require('./api/produto')(app, 'com param')

const app = express()

const saudacao = require('./saudacao')
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(saudacao('guilherme'))

app.use((req,res)=>{
    res.render('index.html')
    /*res.json({
        nome: "Rodrigo",
        idade: 22
    })*/
    //res.send('<h1>Body</h1>')
})

app.get('/cliente/relatorio', (req, res) =>{
    console.log(`relatorio: completo= ${req.query.completo} ano= ${req.query.ano}`)
})

app.post('/corpo', (req,res) =>{
    let corpo = ''
    req.on('data', function(parte){
        corpo += parte
    })
    req.on('end', function(){
        res.send(corpo)
    })
})
app.get('/clientes/:id', (req, res) =>{
    console.log(`Clientes ${req.params.id} selecionado`)
})


app.listen(3000, () =>{
    console.log('operação foi startada.')
})