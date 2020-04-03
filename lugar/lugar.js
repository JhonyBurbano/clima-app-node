const axios = require('axios');

const getLugarLogLat = async(dir) => {
    const encodedURI = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURI}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '8aa3fa8135msh9a84bd11b717601p1e72b7jsn52b43b1a7338'
        }
    });

    const resp = await instance.get()

    if (resp.data.Results.length == 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const log = data.lon

    return {
        direccion,
        lat,
        log
    }
}

module.exports = {
    getLugarLogLat
}