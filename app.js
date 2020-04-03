const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv

//lugar.getLugarLogLat(argv.direccion).then(console.log)

// clima.getClima(40.750000, -74.000000)
//             .then(console.log)
//             .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLogLat(direccion)
        const temp = await clima.getClima(coords.lat, coords.log)
        return `El clima de ${coords.direccion} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch()