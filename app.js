let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for(i = 0; i<pronoun.length; i++){
    for(k =0; k<adj.length; k++){
        for(j =0; j<noun.length; j++){ 
        console.log(pronoun[i] + adj[k] + noun[j] + ".com");
        }
    }
}
//try for each loop
//Add several types of extensions: .com, .net, .us, .io, etc.