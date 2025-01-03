function checkAge(name, age) {
  if (age < 21 && age >= 0) {
    return `Go home, ${name}!`;
  } else if (age >= 21 && age < 135) {
    return `Welcome, ${name}!`;
  } else {
    return "Error";
  }
  
}

let output = checkAge('Adrian', 22);
console.log(output);

