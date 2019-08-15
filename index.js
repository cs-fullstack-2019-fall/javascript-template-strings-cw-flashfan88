// Exercise 1:
// Create a template string and assign it to the variable my_template_string.
// The template string should contain the following data only:

// My name is ${my_name}.
// My id is ${my_id}.
// My address is ${my_address}.

// Create the variables my_name, my_id,
// and my_address and set their values to Kevin, 2112, and Memphis, TN.
// Use the template string you created and assigned to the variable
// my_template_string to log the formatted output to the console.

// let my_name = "Kevin";
// let my_id = "2112";
// let my_address = "Memphis, Tn";

// let my_template_string = `My name is ${my_name}.
// My ID is ${my_id}.
// My address is ${my_address}.`;

// console.log(my_template_string);


// Exercise 2:
// Create a new template string

// var contestant = "1_M_l337!";
// var score = "9001";
// and use the provided variables to print
// Congratulations 1_M_l337! !!, your score is 9001.


// var contestant = "1_M_l337!";
// var score = "9001";
// let templateString = `Congratulation ${contestant}!!, your score is ${score}.`;

// console.log(templateString);

// Exercise 3:
// Using the provided Object literal, create a template string and iterate through the Parents and Children and print them in a format simililar to the following:


// SCHOOL PARENT LISTING

// Parent's Name: Mr. Bill
// Children:
// Sluggo
// Spot
// Linda

// Parent's Name: J. Page
// Children:
// Mick
// Robert
// John
// Kenny

// Parent's Name: Randolph H.
// Children:
// Biffy
// Carl Jr.

var parent1 = "Mr. Bill";
var parent2 = "J. Page";
var parent3 = "Randolph H";
var kidsarray = ["Sluggo","Spot","Linda","Mick","Robert","John","Kenny","Biffy",
"Carl jr."];

let newTemplate = `Parent's Name: ${parent1}
Children:
${kidsarray[0]}
${kidsarray[1]}
${kidsarray[2]}

Parents's Name: ${parent2}
Children:
${kidsarray[3]}
${kidsarray[4]}
${kidsarray[5]}
${kidsarray[6]}

Parents's Name: ${parent3}
Children:
${kidsarray[7]}
${kidsarray[8]}`;

console.log(newTemplate);





