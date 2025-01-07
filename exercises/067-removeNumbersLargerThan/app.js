let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    for (const key in obj) {
        if(typeof obj[key] === 'number' && obj[key]> num){
            delete obj[key];
        }
    }
    
}

removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
