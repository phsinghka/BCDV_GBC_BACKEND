let uc = require("upper-case");

console.log(uc.upperCase("String"));

const greeter = function () {
  for (let i = 0; i < 10; i++) {
    console.log(uc.upperCase("hello world"));
  }
};

greeter();
