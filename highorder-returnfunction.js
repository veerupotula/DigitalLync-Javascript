function multiplier(x,factor){
    return x*factor;
}
//console.log(multiplier(2,5));

// remodify above funciton will return another function

function multiplier(factor1){
    return function(x){
       return x*factor1;
    }
}

let doubleval = multiplier(2);
//console.log(doubleval(5));

let tripiler = multiplier(3);
//console.log(tripiler(3));


// we can use arrow functions above example

function multiplier(factor1){
    return x =>x*factor1;   
}

let doubleval1 = multiplier(2);
console.log(doubleval1(6));

let tripiler1 = multiplier(3);
console.log(tripiler1(6));


// highorder using filter

var animals =[

    { nam :'rubby', spices:'dog'},
    { nam :'tommy', spices:'cat'},
    { nam :'jammy', spices:'dog'},
    { nam :'linker', spices:'cat'},
    { nam :'link', spices:'dog'}
]

var dogs =[];
for(var i=0;i<animals.length;i++){
    if(animals[i].spices =='dog'){
        dogs.push(animals[i]);
    }
}
console.log(dogs);

var dogsHO =animals.filter(function(animal){
return animal.spices ==='dog';
})
console.log(dogsHO);