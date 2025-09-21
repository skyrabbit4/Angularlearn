
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
    return num1 + num2 + num3.reduce((a,b)=>a+b,0); //reduce to sum all elements in num3 array
}

let numbers=[1,2,3,4,5];

console.log(add3(2,3,...numbers)); //20

//generic function
//in generic function we can pass any type of data and it will return the same type of data

function getItem<Type>(items:Type[]):Type[]{
    return new Array<Type>().concat(items);
}

let concatResult=getItem<number>([1,2,3,4,5]);
console.log(concatResult); //[1,2,3,4,5]

let concatResult1=getItem<string>(['a','b','c','d','e']);
console.log(concatResult1); //['a','b','c','d','e']



