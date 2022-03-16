const vowels = ["a","e","i","o","u"];
const newArray=[];

function countVowels (str){
    for (let char of str){
        if (vowels.includes(char)){
            newArray.push(char)
            console.log ((newArray).length)
        }
    }
}
countVowels("Friday");
