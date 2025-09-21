class EmployeeInformation{
    id!:number;
    name!:string;
    age!:number;
    address!:string;

    constructor(id:number,name:string,age:number,address:string){
        this.id=id;
        this.name=name;
        this.age=age;
        this.address=address;
    }
    getNameWithAddress():string{
    return this.name + " from " + this.address;
   }
}




let john =new EmployeeInformation(1,"shubham kaushik",25,"123, Main Street, City");
console.log(john);

let address=john.getNameWithAddress();
console.log(address); //shubham kaushik from 123, Main Street, City

//Methods in class
//class with method to display employee details



