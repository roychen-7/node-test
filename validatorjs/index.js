var Validator = require('validatorjs');

var data = {
  name: 'John',
  email: 'johndoe@gmail.com',
  age: '28'
};
 
var rules = {
  name: 'required',
  email: 'required|email',
  age: ['required', 'numeric', 'min:18']
};
 
var validation = new Validator(data, rules);

console.log(validation.passes());
