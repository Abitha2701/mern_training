let a=10;
console.log(a);


let object1={age:20};
let object2={age:30};
object1=object2;
console.log(object1.age);


a=true;
b=false;
console.log(a && b); 
if(a || b){
    console.log("At least one is true");
}


console.log(9&5);
console.log(9|5);
console.log(9^5);



function add(a,b){
    return(a+b);
}
console.log(add(10,20));


const sum=(a,b,c)=>{
    console.log(a+b+c);
}
sum(10,20,30);

