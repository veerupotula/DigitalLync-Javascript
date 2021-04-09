var laptop ={
    name: "lenova",
    price: 20000,
    website: "flipkart"
}

var cloneLap =Object.assign({},laptop);
function x(laptop)
{
    laptop.price=30000;
    console.log(laptop);
}
x(cloneLap);
console.log(laptop);
var sai = laptop;
sai.price=50000;
console.log(sai);
console.log(laptop);
laptop.price =80000;
console.log("-------------------");
console.log(sai);
console.log(laptop);