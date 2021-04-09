var company ={
    cname :"Capita",
    addresss:"pune"
}
var employee = Object.create(company);
employee.name="veerendra";
employee.designation="Java developer"
console.log(employee);
console.log(employee.cname);
console.log(employee.addresss);
console.log("company"+ company);

//Use of freeze method
var config = Object.freeze({
    url :"https://aws.console.login",
    uname :"veeru",
    pwd :"admin"
})

console.log(config);
config.pwd="newpwd";
console.log(config)
console.log(Object.isFrozen(config));

//object.keys used for keys of particular object

console.log(Object.keys(config));

var keys = Object.keys(config);
keys.forEach(function(key){
    console.log(key);
})


// How to clone an object in javascript