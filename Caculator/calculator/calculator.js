

import readlineSync from 'readline-sync'

let a = readlineSync.question("Enter first number: ");
let operator = readlineSync.question("Enter operator (+, -, *, /): ");
let b = readlineSync.question("Enter second number: ");

let res
let result

switch (operator) {

    case "+":
        result = add(a, b)
        console.log(result)
        break

    case "-":
        result = substration(a, b)
        console.log(result)
        break

    case "*":
        result = multiply(a, b)
        console.log(result)
        break

    case "/":
        result = division(a, b)
        console.log(result)

        break
    default:
        console.log("please select the proper operator")

}





// addition of the two numbers :
function add(a, b) {

    res = Number(a) + Number(b);
    return `The addition of ${a}+${b} is: ${res}`

}

// substration of two numbers : 
function substration(a, b) {

    res = Number(a) - Number(b)
    return `The substration of ${a}-${b} is: ${res}`
}

// multiplying of two numbers:
function multiply(a, b) {

    res = Number(a) * Number(b);
    return `The multiply of ${a}*${b} is: ${res}`

}

// division of two numbers: 
function division(a, b) {

    res = Number(a) / Number(b)
    return `The division of ${a}/${b} is: ${res}`

}





