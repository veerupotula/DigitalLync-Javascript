
// Passing function as a parameter
function sing(callbackex){
    console.log("la la la la la");
    if(callbackex instanceof Function){
callbackex();
    }
}

function meow()
{
    console.log("meow meow meow");
}

// sing("dog");
sing(meow);
