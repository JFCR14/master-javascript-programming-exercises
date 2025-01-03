function isOldEnoughToVote(age) {
  if (age < 18) {
    return false;
  } else if (age >= 18){
    return true;
  } else {
    return console.log("Error")
  }
  
}

let output = isOldEnoughToVote(22);
console.log(output);