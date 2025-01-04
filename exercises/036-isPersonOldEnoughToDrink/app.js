function isPersonOldEnoughToDrink(person) {
  if (person.age < 21) {
    return false;
  } else {
    return true;
  }
  
}

let obj = {
  age: 16
};
let output = isPersonOldEnoughToDrink(obj);
console.log(output);