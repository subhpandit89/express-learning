const request = require('request')

const forecast = (url)=>{
    request({url}, (error, response)=>{
        if(error){
            console.log(`Error occurred`)
        }else{
            const parsedResponse = JSON.parse(response)
            const {latitude, longitude} = parsedResponse.location;
            console.log(`latitude is: ${latitude}`)
            console.log(`longitude is: ${longitude}`)
        }
    })
}

module.exports = forecast;