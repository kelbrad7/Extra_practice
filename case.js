
const mySentence = "testing this sentence isn't easy."

let words = mySentence.split(" ")
let newArray = []

for (let word of words) {newArray.push(word[0].toLocaleUpperCase() + word.substring(1))
} 

newArray = newArray.join(" ");

console.log(newArray)




