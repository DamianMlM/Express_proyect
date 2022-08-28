import express from 'express'
import {engine} from 'express-handlebars' 
import { getFrase, getFraseGraciosa, getFraseMotivacional, getFrasePelicula } from './lib/frases.js'

const app = express()

const port = process.env.port || 3000

app.engine('handlebars', engine())

app.set('view engine', 'handlebars')
app.set('views', './views')


app.get('/home',(req,res)=>{
    res.render('home')
})

app.get('/frasesmot',(req,res)=>{
    res.render('about', {frase:getFraseMotivacional})
})
app.get('/frasesgra',(req,res)=>{
    res.render('about', {frase:getFraseGraciosa})
})

app.get('/frasespel',(req,res)=>{
    res.render('about', {frase:getFrasePelicula})
})

app.get('/headers', (req, res)=>{
    res.type('text/plain')
    const headers = Object.entries(req.headers)
    .map(([key, value])=>`${key}:${value}`)
    res.send(headers.join('\n'))
})

app.get('/bloques',(req, res) =>{
    let data = {
        alumnos: [
            {ap: "Mariscal",
             am:"Mariscal",
              nombre:"Damian", 
              codigo: 217504002}
        ],
        solicitudes:[
            {codigo:12345,
            detalle:"Quiero dar de baja una materia"}
        ]
    }
    res.render('solicitudes', {datoses:datos})
})
app.use((req,res)=>{
    res.status(404)
    res.render('404')
})
app.use((err, req, res, next)=>{
    console.error(err.message)
    res.type('text/plain')
    res.status(500)})

app.listen(port, ()=>{
    console.log(`Express se ha iniciado en el puerto ${port}- Press Ctrl+c para terminar`)
})
