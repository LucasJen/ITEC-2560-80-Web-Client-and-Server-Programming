console.log('Hello World!')

// Three ways to create variables

let color = 'blue' // creates new variable that can be changed

var size = 'medium' // not recommended. scope is wider and can create bugs

const language = 'JavaScript' // final value, will throw error if new variable assignment occurs

let quantity = 5
let distance = 4.5

let text = 'Hello World'
let message = "Hi programmers"

let todayTemp = 75

console.log('Today\'s temperature is ' + todayTemp + 'F')

let tempC = (todayTemp - 32) * 5 / 9
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C')