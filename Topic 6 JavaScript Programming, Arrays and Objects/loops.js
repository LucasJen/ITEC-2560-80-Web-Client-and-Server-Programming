let birds = ['owl', 'robin', 'eagle']
// in js the array size can be changed. more akin to a list than a java array

console.log(birds) //prints entire list

birds.forEach( function(bird) {
    // will repeat for each object in array
    // function will be called for each object
    console.log(bird) // will print each bird separately
})

// for loop, x is counter, counts for the length of birds, increment x by one 'x++'
for ( let x = 0 ; x < birds.length ;  x++) {
    let bird = birds[x]
    console.log(x, bird.toLowerCase()) // will print each bird 
    // x can be printed as well, showing position in loops
    //loops increment starting at 0
}


let text = ' The classes are itec 1150, itec 1250, itec 2560'

let replaced = text.replace('itec', 'ITEC')
console.log(replaced) // only replaces the first instance. 


let replacedAll = text.replace(/itec/g, 'ITEC') // the g is to search for all instances. 'global'
console.log(replacedAll) // replaces all instances 


// .trim() can be used to remove spaces, tabs or newlines from both ends of a string