 let takenCSharp = false
 let takenJava = true

 if (takenCSharp || takenJava) { //pipes used for OR logic
    console.log('You meet the pre-reqs')
 } else {
    console.log('You do not meet the pre-reqs')
 }



 // can be senator condition

 let age = 35
 let usCitizenTime = 35
 let stateOfResidence = 'Wisconsin'
 let stateWantToRepresent = 'Minnesota'

if (age >= 35 && usCitizenTime >= 9 && stateOfResidence == stateWantToRepresent){
    console.log('you are eligible') // can check numerous conditions using AND / OR logic
 } else {
    console.log('You are not eligible')
 }