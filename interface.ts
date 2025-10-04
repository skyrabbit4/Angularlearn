export interface User{
    name:string;
    age?:number; //optional property
    id:number;
    email:string;
}

//instance of interface
//it confirms to the structure defined in the interface
let user:User={name:"shubham",age:25,id:1,email:"shubham@example.com"};


interface Employee extends User{
    salary:number;
}

let employee:Employee={name:"kaushik",age:23,id:23,email:"shubham@com",salary:2333};

//method defination

export interface Login{
    Login():User;
}


//destructuring of array of objects

let[user1,user2,user3,...restUsers]:User[]=[

    {name:"shubham",age:25,id:1,email:"shubham@example.com"},
    {name:"kaushik",age:23,id:23,email:"kaushik@example.com"},
    {name:"rahul",age:26,id:2,email:"rahul@example.com"}
];

console.log(user1);
console.log(restUsers);

//Decorators
//A decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.
//Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.    


/*ES modules*/

