function getAllLetters(str) {
    let array = []
    for (let i = 0; i < str.length; i++) {
        array[i] = str[i];
    }
    return array;
    
}

let output = getAllLetters('');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
