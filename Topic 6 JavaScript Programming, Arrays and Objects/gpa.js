function validGPA(GPA) {
    if (GPA >= 0 && GPA <= 4){
        return true
    } else {
        return false
    }
}

function alsoValidGPA(GPA) {
    return GPA >= 0 && GPA <= 4
}

console.log(validGPA(3))

console.log(alsoValidGPA(5))