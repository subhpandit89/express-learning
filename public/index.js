const locationForm = document.querySelector('form')
const place = document.getElementById('textarea')

locationForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const locationGiven = place.value
    
    const apiAccessKey = "c65a214ca3db8363acffd2e54a4a1839";
    const url = `http://api.weatherstack.com/current?access_key=${apiAccessKey}&query=${locationGiven}`

    fetch(url).then((response)=>{

        response.json().then((jsonData)=>{

            if(jsonData.error){
                console.log(jsonData.error)
            }

            console.log(jsonData.location)
        })
        
    })

})