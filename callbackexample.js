function greeting(name1)
{
    console.log('Hello'+ name1);
}

function processUserInput(callback){
    var name1="Enter your name";
    callback(name1);
}

processUserInput(greeting);

//Example2

function display(sum)
{
    console.log("Total sum is"+sum);
}
function myCalculator( x,y,mycallback)
{
    let add = x+y;
    mycallback(add);
}

myCalculator(4,5,display);
