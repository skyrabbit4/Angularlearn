interface Address{
    street:string;
    city:string;
    state:string;
    zipCode:string;
}

class EmployeeInformation{
    #id!:number;
   protected name!:string;
    age!:number;

    address:Address;

    //Getter for id
    get empId():number{
        return this.#id;
    }

    //setter for id

    set empId(id:number){
        this.#id=id;
    }

    static getEmployeeCount():number{
        return 50;
    }

    constructor(id:number,name:string,age:number,address:Address){
        this.#id=id;
        this.name=name;
        this.age=age;
        this.address=address;
    }
    //Methods in class
    //class with method to display employee details
    getNameWithAddress():string{
    return `${this.name} from ${this.address}`;
   }
}




let john =new EmployeeInformation(1,"shubham kaushik",25,
    {
    street:"123,main street",
    city:"city",
    state:"state",
    zipCode:"12345"
});
john.empId=1;//setter
console.log(john.empId); //getter₹



//john.name="shubham"; //cant access name property because it is protected
console.log(john);
EmployeeInformation.getEmployeeCount(); //50
//john.getEmployeeCount(); //Error: Property 'getEmployeeCount' does not exist on type 'EmployeeInformation'.

//Inheritance
//class Manager extends EmployeeInformation
//Manager class inherits from EmployeeInformation class
//Manager class can access all the properties and methods of EmployeeInformation class
//Manager class can have its own properties and methods
//Manager class can override the methods of EmployeeInformation class
class Manager extends EmployeeInformation{
 constructor(id:number,name:string,age:number,address:Address){

    //calling parent class constructor using super keyword
    //super must be called before accessing 'this' in the constructor of a derived class
    //super is used to call the constructor of the parent class
    //CALLS the constructor of EmployeeInformation class
    super(id,name,age,address);
 }
getNameWithAddress(): string {
    return `Manager: ${this.name} from ${this.address}`;
}


}

let address=john.getNameWithAddress();
console.log(address); //shubham kaushik from 123, Main Street, City


/*Member visibility
1. public: default, can be accessed from anywhere
2. private: can be accessed only within the class
3. protected: can be accessed within the class and its subclasses
*/
 
//used # to make id private
//console.log(john.#id); //Error: Property '#id' is not accessible outside class 'EmployeeInformation' because it has a private identifier.

//console.log(john.id); //Error: Property 'id' does not exist on type 'EmployeeInformation'.

/*Static members
1. static members belong to the class itself rather than to any specific instance of the class.
2. static members are shared among all instances of the class.
3. static members can be accessed using the class name without creating an instance of the class.
*/



/*Interfaces
1. Interfaces define the structure of an object, specifying the properties and methods that an object must have.
2. Interfaces do not provide implementation details; they only define the shape of the object.
3. Classes can implement interfaces, ensuring that they adhere to the defined structure.
4. Interfaces can be used to achieve polymorphism, allowing different classes to be treated as the same type if they implement the same interface.
*/

