const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a8b1261703330a7aa9a8a265fc8cbe6a&query='+ encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude)

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('There was an error', undefined)
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}


module.exports = forecast