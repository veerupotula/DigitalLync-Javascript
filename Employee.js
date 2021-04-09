
class Employee{
//state name,eid,designiation and project;
//behaviour :- login,logout and submitwork;
name;
eid;
designation;
project;

constructor(name,eid,designation,project){
    this.name = name;
    this.eid  = eid;
    this.designation = designation;
    this.project = project;
}
login(){
    console.log(this.name+"logged in!");
}
logout(){
    console.log(this.name+"logged out!");
}
}
var emp1 = new Employee("veerendra",1,"developer","AMT-SYBEX");
console.log(emp1);
emp1.login();
emp1.logout();
