let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let mixArr = pronoun.concat(adj, noun);

for(i = 0; i<pronoun.length; i++){
    for(k =0; k<adj.length; k++){
        for(j =0; j<noun.length; j++){ 
        console.log(pronoun[i] + adj[k] + noun[j] + ".com");
        }
    }
}

// pronoun.forEach((index) => {
//     console.log(index + '.com');
// });

//try for each loop
//Add several types of extensions: .com, .net, .us, .io, etc.

