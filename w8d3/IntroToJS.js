
//------madLib----------
function madLib(verb, adj, noun) {
    let sentence = `We shall ${verb} the ${adj} ${noun}`
    console.log(sentence);
}

// madLib('make', 'best', 'guac');

//----isSubstring------
function isSubstring(searchString, subString) {
    let sentence = searchString.split(' ')
    for(let i = 0; i < sentence.length; i++) {
        if (subString === sentence[i]) {
            return true;
        }
    }
    return false;
}

// console.log(isSubstring("time to program", "time"));
// console.log(isSubstring("Jump for joy", "joys"));
