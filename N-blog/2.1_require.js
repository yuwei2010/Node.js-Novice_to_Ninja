// Create an object 'a' with a property 'name' set to 1
var a = {name: 1}

// Assign the reference of 'a' to 'b'
var b = a

// Print the value of 'a' and 'b'
console.log(a)
console.log(b)

// Modify the 'name' property of 'b'
b.name = 2

// Print the value of 'a' and 'b' after modification
console.log(a)
console.log(b)

// Create a new object 'b' with a property 'name' set to 3
var b = {name: 3}

// Print the value of 'a' and 'b' after reassignment
console.log(a)
console.log(b)


console.log(process.env.NODE_ENV) // Print the value of the NODE_ENV environment variable
