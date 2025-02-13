//! Problem 1

const age = (x) => {
    return (message = x > 18 ? "You are good to go" : "Sorry! you must be 18 or older")

}
console.log(age(17))

    

//! Problem 2

const is_raining = (val) => {
    return val ? "Get you rain Jacket!" : "No rain on today's forecast"
}

console.log(is_raining(true))

//! Problem 3

const num = (n) => {
    return n % 2 === 0 ? "This is an even number" : "This is an odd Number"
}

console.log(num(5))

//! Problem 4

const compareTwoVar = (a,b) => {
    return a > b ? `${a} is bigger than ${b}` : `${a} is less than ${b}`;

}
console.log(compareTwoVar(5,12))


