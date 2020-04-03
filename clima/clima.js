const axios = require('axios')

const apiId = '77109f9f25526776b30fd5dd38f1b066'

const getClima = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiId}`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}