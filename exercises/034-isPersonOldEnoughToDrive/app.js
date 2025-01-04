function isPersonOldEnoughToDrive(person) {
  if (person.age < 16) {
    return false;
  } else {
    return true;
  }
  
}

let obj = {
  age: 16
};
let output = isPersonOldEnoughToDrive(obj);
console.log(output);