const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('../utils/forecast');
const request = require('request')

const app = express()

const pathName=path.join(__dirname, "../public")
const viewsPath=path.join(__dirname, "../templates/views")
const partialsPath=path.join(__dirname, "../templates/partials")

app.use('', express.static(pathName))
app.set('view engine','hbs')
app.set('views', viewsPath  )
hbs.registerPartials(partialsPath)



app.get('', (req, res)=>{
    res.sendFile('index.html')
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: "About Page",
        name: "Subhash Pandit"
    })
})
app.get('/weather', (req, res)=>{

    if(!req.query.address){
        return res.send({
            error: "Please provide the address along with the request"
        })
    }
    const apiAccessKey = "c65a214ca3db8363acffd2e54a4a1839";
    const query_address = req.query.address;
    const url = `http://api.weatherstack.com/current?access_key=${apiAccessKey}&query=${query_address}`
    // coordinates(url)
    request({url}, (error, response)=>{
        if(error){
            res.send(error)
        }else{
            const parsedResponse = JSON.parse(response.body)
            const {lat:latitude, lon:longitude} = parsedResponse.location
            return res.send({
                // latitude, longitude
                serverResponse : parsedResponse.location
            })
        }
    })
    
})
app.get('/help/*', (req, res)=>{
    res.send('the route path is: ' + req.path)
})

app.get('/test', (req, res) =>{
    res.send(req.query)
})

app.get('*', (req,res)=>{
    res.send("Not a valid Page, 404")
})

app.listen(3000, ()=>{
    console.log('server is up and listening on port 3000')
})