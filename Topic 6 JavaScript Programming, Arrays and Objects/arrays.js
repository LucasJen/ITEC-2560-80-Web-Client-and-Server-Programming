// arrays are similar to lists in java or python
// they are not fixed in size

// syntax :

let array = ['example', 'example2']

let animals = ['lion', 'tiger', 'cheetah']

console.log(animals)

console.log(animals[1])

animals[6] = 'giraffe' // will fill in empty items if there is space between the defined element and existing elements
console.log(animals)

animals.push('elephant') // will push the new element to the end

animals.unshift('deer') // will add element to the beginning of the array

let firstAnimal = animals.shift() // will show the first item in the array
console.log(firstAnimal)


animals.pop() // will return value and remove it from the end of the list
let poppedAnimal = animals.pop() // will store the popped value from the end of the array

animals.reverse() // will reverse the order of the array
animals.sort() //will sort alphabetically

let numberOfAnimals = animals.length //will output the amount of elements in the array

console.log(animals.indexOf('Lion')) // will output the element index that matches the defined value
// will return -1 if the searched value is not found

if (animals.indexOf('walrus') == -1 ) {
    console.log('walrus is not in the array') // will check if the value is in the array
}

console.log(animals.join(' * '))// will present the values in the list separated by a *

animals.forEach( function(animal) {
    console.log(animal.toUpperCase()) // will loop through and convert all animals to uppercase
})

animals.forEach(function(animal) {
    
})

