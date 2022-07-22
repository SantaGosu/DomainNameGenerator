let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let mixedArray = [];

mixedArray.push(...pronoun, ...adj, ...noun);

for(let i = 0; i < mixedArray.length; i++){
    console.log(mixedArray[i])
}

console.log(mixedArray);