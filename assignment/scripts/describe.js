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
// the variable name is equal to Dane
// if the variable 'name' is equal to Mary then the console log will read "hi, mary!"
// otherwise is the variable name is not equal to mary the console log will read "how do you do?"
// the console log should read "how do you do" since the varible name is equal to Dane.


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
// the variable secret and the variable code equal 123
// if the variable code equals 123 then the variable secret equals "super" and the variable code equal 123x2, or 246
// then, if the value for code is greater than 250 secret would equal duper, but it secret just equals 246 right now so it is less than 250 and not duper.
// the console log will just say super, since the last portion of code isnt valid, 246 is not greater than 250. 

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
// the variables isstudent is true, age is 34 and zipcode is 55407
// if the person is a student(true) and their zip code is greater than 80000 the are a student on the west coast, since this is not true we go to the second portion of code
// if the person is not a student and their age is less than 30 we will see "what are your hobbies" in the consol log, but since this isnt true we go to the next set of code
// if isstudent is equal to true, which is is, then our consol log will read "welcome to prime!"
// if all the other previous statements were not true, our console log would read "how about that weather"

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

/*
let colorOne = 'blue';
// FIX colorOne set equal to Blue

let colorTwo = 'red';
// FIX colorTwo set value equal to red

let mix = true;

if (mix === true) {
  colorOne = 'purple'; colorTwo = 'purple';
//FIX added colorTwo to the final true statement
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
let time = 4;
//fix set time as a variable rather than a constant, since time seems to be something that could change. 

if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}
*/
//FIX changed if "(temp > 39 && time >= 4)" to an 'and' statement rather than an 'OR' statemnet


//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX if age(21) is equal to minimum age(21) it should read enter;
//FIX could either fix the statement as it is written,

if(minAge < age){
  console.log ('no entry');}

//FIX or you could write it how its described in the problem and it will read

if(Age >= minAge){
  console.log('enter');}


if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

