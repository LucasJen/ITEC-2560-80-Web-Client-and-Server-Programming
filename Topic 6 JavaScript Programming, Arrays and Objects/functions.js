function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('hello world'))

let message = shout('hellow web programmers')
console.log(message)

// functions created using "function keyword". syntax is similar to python but uses curly braces.
function f_to_c(f, decimalPlaces) {
    let celcius = (f - 32) * 5 / 9
    if (decimalPlaces) {
        // undefined is considerd to be falsey
        return celcius.toFixed(decimalPlaces)

    } else {
        return celcius
    }
}

let todayTemp = 75
todayCelcius = f_to_c(todayTemp) // if no second argument provided for function, will default to no rounding.
// toFixed rounds to 2 decimal places
console.log(todayCelcius.toFixed(2))


// falsy values - undefined, null, empty lists. empty objects, 0, false.
// these can be assessed in conditional statements
// using === can be used to avoid type coersion and explicitely compare values.