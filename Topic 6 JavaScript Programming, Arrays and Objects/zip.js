function cityStateAddress(city, state) {
    let address = city + ', ' + state.toUpperCase() // wi - WI
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))

function cityStateAddress(city, state) {
    let address = `${city} + ', ' + ${state.toUpperCase()}` //template string similar to f string
}

function isMinnesotaZip(code) {
    if (code >= 55001 && code <= 56763) { // ampersands are used for an AND logic
        return true 
    } else {
        return false // booleans are lowercase, unlike python
    }
}
// will check if zip code is minnesotan
// should return true
console.log(isMinnesotaZip('55408'))

console.log(isMinnesotaZip('24556')) // should be false