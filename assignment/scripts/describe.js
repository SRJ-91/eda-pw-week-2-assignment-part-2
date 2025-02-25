// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We are creating a variable called "name" and assigning its value to be that of the string 'Dane'.
// Next we are creating an if statement to check the value of the name variable.
// If the variable of "name" is strictly equal to that of 'Mary' the console will log 'Hi, Mary!'
// If the variable is anything other than 'Mary' the console will log the string 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create two separate variables: the variable "secret" which has no value right away, and the variable "code" which is assigned the value of '123'.
// Next the first of two if statements. Should the "code" variable strictly equal '123' the "secret" variable will be assigned the value of the string 'super', and the value of the "code" variable will be multiplied by two; thus equalling '246'.
// For the next if statement, it will check if the "code" variable exceeds the number '250', if so, the value of the "secret" variable will become the string 'duper'.
// When we console.log the "secret" variable, it will check the "code" variable. Should the "code" variable strictly equal '123' it will console.log the string 'super' and multiply the "code" value by two.
// If the "code" variable somehow exceeded the number '250', the secret variable will equal the string 'duper' which is what would be console logged instead.
// It is probably worth noting that this won't happen by just continuously running the "secret" variable, as after one go it will equal '246', thus not triggering the multiplication effect in the first If statement.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create three variables: "isStudent" is a Boolean variable, "age" variable is assigned the value of '34', "zip" variable is assigned the value '55407'.
// A compound else/if statement is before us, lets break it down. If the "isStudent" boolean is true AND the "zip" variable exceeds 80000, the console will log: "You're a student on the West Coast!".
// Otherwise, if the "isStudent" variable is false and their age is less than 30, it will console log 'What are your hobbies?'.
// If neither of the statements above trigger, yet the "isStudent" Boolean is true, the console will log: "Welcome to Prime!"
// If none of the three parameters trigger, the console will log: 'How about the weather?'


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

// SOLUTION
// The code block icorrectly assigned 'red' to "colorOne" and 'blue' to "colorTwo" which is the opposite of the description. Swap these.
// Also the "mix" Boolean is only changing the "colorOne" variable to 'purple' while the description says it changes "colorTwo" as well. Add (colorTwo = 'purple';) to be beneath (colorOne = 'purple';)

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

//SOLUTION
// Change the either/or pipes (||) to (&&) to match the "and" in the description.
// The time variable is declared using const which will make it unchanging. It should be declared with let instead, otherwise it will only console.log the number 4.

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

//SOLUTION
// Two ways this could technically be fixed.
// The minAge and age arguments need to be reversed, also this underage check should just be less than (<), not less than or equal to (<=). That line should read: if(age < minAge)
// However if we wanted the code to better reflect the description, we would swap the minAge and age arguments like above, but then switch the (<=) to (>=)
// If we follow the second solution the console.log messages would also have to swap positions, so that if age is greater than or equal to (>=) the sumber 21, it console.logs: 'enter' if not it will log 'no entry'

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

