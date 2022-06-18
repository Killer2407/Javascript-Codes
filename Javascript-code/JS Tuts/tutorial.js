//Variable is use to store the data temporarily.
let firstName = 'Bruce';
let lastName = 'Wayne';
console.log(firstName);

//Learning Const
//If i want to reassign a variable we should use let otherwise use const.
const interestRate = 0.3;
// interestRate = 1;
console.log(interestRate);
//----------------------------------------
//Primitive/Value Types:
//  -Strings
let name = 'Aniket'; //String literal
//  -Number
let age = 30; //Number Literal
//  -Boolean
let isApproved = false //Boolean literal
//  -Undefined
let firstName = undefined; //undefined literal
//  -null
let lastName = null; //Null literal

//----------------------------------------------
//Reference type
//  -Object {}
let person = {
    name: 'Aniket',
    age: 30
};
person.name = 'Batman'
console.log(person.name);
//  -Array []
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'black'
console.log(selectedColors[2]);

//  -Function
function greet(name1, lastName1) {
    
    console.log('Hi ' + name1 + ' ' + lastName1);
}
greet('Aniket', 'Munim');
greet('Vishu', 'Joshi');

//Calculate a value
function square(number) {
    return number * number;
}
let number = square(76);
console.log(number);