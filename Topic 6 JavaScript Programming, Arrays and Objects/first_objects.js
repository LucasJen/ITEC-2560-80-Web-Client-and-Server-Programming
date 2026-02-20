let user = {username: 'Lucas',  password: 'password'}

console.log(user.username)
console.log(user['username']) // typically used when a variable is story within

let whatProperty = 'password' 
console.log(user[whatProperty])

// JavaScript Object Notation is a dictionary like structure
// can story arrays and various data types within

user.password = 'elephant' // will update the password element value to the new value

user.email = 'lucas@gmail.com' // can add a new property within the object
console.log(user) // will print entire object

// other objects can be stored within the object. akin to nested dictionaries

dreamJob = {
    name: 'Lucas', 
    email: 'lucas@gmail.com', 
    password: 'password', 
    contact: {
        office: '123 st',
        telephone: 243653654
    },
    roles: ['secretary', 'developer']
 }

 dreamJob.salary = 500
 
 dreamJob.roles.push('server admin')
 console.log(dreamJob)