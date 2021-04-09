function greaterThan(n){

    return x=> x>n;
}

let greaterthanTwo = greaterThan(2);

console.log(greaterthanTwo(5));


//Example2
function makeAdjectifier(adjective){
    return function(string){
        return console.log(adjective+""+string);
    };
}

var coolifier =makeAdjectifier("cool");
coolifier("conference");