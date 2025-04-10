/*console.log("Hello, World")

// ************************** VARIABLES *************************************
var name = "John" // Sconsigliatissimo!
console.log(name)

let age = 20 // Molto meglio
console.log(age)
age = 30
console.log(age)

const isStudent = true // Quando voglio essere sicuro che non cambi il suo valore
console.log(isStudent)
// isStudent = false <-- ERRORE!

let notDefined
console.log(notDefined)

console.log(typeof isStudent) // "boolean"
console.log(typeof age) // "number"
console.log(typeof name) // "string" */

// ************************** OPERATORS *************************************
const x = 10
const y = 5

// Arithmetic Operators
const sum = x + y
const difference = x - y
const product = x * y
const quotient = x / y
const modulus = x % y
const exponent = x ** y

// console.log("La somma di " + x + " e " + y + " è: ", sum)
// console.log("La differenza tra " + x + " e " + y + " è: ", difference)
// console.log(product)
// console.log(quotient)
// console.log(modulus)
// console.log(exponent)

// console.log(sum, difference, product, quotient, modulus, exponent)

// Comparison Operators
// console.log(x == "10") // = =
// console.log(x === "10") // = = =
// console.log(y != "5") // ! =
// console.log(y !== "5") // ! = =
// console.log(x > 100)
// console.log(y < 0)

// Logical Operators
const a = true
const b = false
// console.log(a && b) // false (AND)
// console.log(a || b) // true (OR)
// console.log(!a) // false (NOT)

const age = 20
const hasLicence = true
// console.log(age < 18 || age > 65) // (OR)
// console.log(age > 18 && hasLicence)

// ************************** OBJECTS *************************************

const frodo = {
  name: "Frodo Baggins",
  race: "Hobbit",
  age: 33,
  role: "Ring Bearer",
  isHero: true,
}

console.log(frodo.age)
console.log(frodo.isHero)
console.log(frodo.race)

const legolas = {
  name: "Legolas",
  race: "Elf",
  age: 2000,
  role: "Archer",
  isHero: true,
  abilities: {
    strength: 6,
    dexterity: 10,
    agility: 10,
  },
}
console.log("La forza di Legolas è: ", legolas.abilities.strength)
legolas.abilities.strength = 5
console.log("La nuova forza di Legolas è: ", legolas.abilities.strength)

console.log("La destrezza di Legolas è: ", legolas.abilities.dexterity)

console.log(legolas.abilities.agility > 5)
