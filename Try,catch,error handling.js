let a = prompt("Enter a value")
let b = prompt("Enter b value")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("I think you entered value is Not a Number")
}
let sum = parseInt(a) + parseInt(b)

// let x = 2
try {
    console.log("The sum is", sum * x)
} catch (error) {
    console.log("Error is there", error)
    // alert(error.name)
    // alert(error.message)
}
finally{
    console.log("Finally is over")
}
