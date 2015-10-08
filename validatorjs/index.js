var Validator = require('validatorjs');

var data = {
  name: '',
  email: 'q',
  age: '28'
};
 
var rules = {
  name: 'required',
  email: 'required|email',
  age: ['required', 'numeric', 'min:18']
};
 
var validation = new Validator(data, rules);

if (validation.fails()) {
  console.log(validation.errors.all());
}
