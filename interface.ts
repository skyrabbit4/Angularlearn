interface User{
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

interface Login{
    Login():User;
}