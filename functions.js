// Non functionals

var name1 ="\t veerendra";
var greetings = "Hi This";

console.log(greetings + name1);


// Functional approach and below one is not an pure function

function great(name){
     console.log("Hi This"+name);
}

great("Veerendra");

//Pure functions

function great1(name)
{
return console.log("Hi this is"+ name);
}