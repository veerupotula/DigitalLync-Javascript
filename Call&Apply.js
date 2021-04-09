var person ={
    fullname : function(){
        return this.firstname+""+ this.lastname;
    }
}

var person1 = {

    firstname : "veerendra",
    lastname  : "potula"
}

var x = person.fullname.call(person1);
console.log(x);

// call method with arguments

var personfulldetails ={
    fullname:function(city,country){
        return this.firstname +""+this.lastname+"\t"+city+"\t"+country;       
    }
}

var fulldetails = personfulldetails.fullname.call(person1,"pune","india");
console.log(fulldetails);
var fulldetails1 = personfulldetails.fullname.apply(person1,["pune","india"]);
console.log(fulldetails1);

