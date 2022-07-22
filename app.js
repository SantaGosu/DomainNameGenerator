let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let mixedArr = [];

mixedArr.push(pronoun, adj, noun);
console.log(mixedArr)
for(i = 0; i<mixedArr.length; i++){
    for(k =0; k<mixedArr.length; k++){
        console.log(mixedArr[i][k]);
        }
    }