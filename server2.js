const notes = require('./notes.js');//we are importing from other file

var _ = require('lodash');//its a library like os and fs used to deal with arrays without making complicable calculations

console.log('server file is available');

var age = notes.age; //importing age from notes file

var result = notes.addNumber(age+18, 10);

console.log(age);
console.log('result is now' + result);

var data = ["person", "person",  1, 2, 1, 2, 'name', 'age', '2'];
var filter = _.uniq(data);//its a function in lodash
console.log(filter);