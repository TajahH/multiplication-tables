const readline = require("readline-sync");
let userInput = readline.question(`Which multiplication table would you like to see?: `)

for (let i = 1; i <= 12; i++){
    let value = i * userInput
    console.log(`${i} x ${userInput} = ${value}`)
}
