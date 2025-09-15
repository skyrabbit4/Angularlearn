
//normal function
function add(num1:number,num2:number):number{
    return num1+num2;
}

let sum1=add(5,10);
console.log(sum1); //15

//arrow function
const sub=(num1:number,num2:number):number=>{
    return num1-num2;
}

console.log(sub(10,5)); //5


//another way to write function
const mult=(num1:number,num2:number):number=>{
    return num1*num2;
}

//optional parameter

function addoptional(num1:number,num2:number,num3?:number):number{
    return num3?num1+num2+num3:num1+num2; //if num3 is provided, add it, else just add num1 and num2
}

let sum2=addoptional(5,10);
console.log(sum2); //15

//required parameter

const sub1=(num1:number,num2:number,num3:number=0):number=>{ //default value of num3 is 0
    return num1-num2-num3;
}

console.log(sub1(10,5));


//rest parameter for

function add3(num1:number,num2:number,...num3:number[]):number{

}