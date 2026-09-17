// function Person(name , age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.eat = function(){
//     return `${this.name} is eating`;
// }

// const ram = new Person("Ram" , 22);
// // console.log(ram.age);
// console.log(ram.eat());



// Class and Object -------------------------------------------------------------------------------

/* 
class Car{
    constructor(company , model){
        this.company = company;
        this.model = model;
    }

    start(){
        return `the ${this.model} car is started`;
    }
}

class Vehicle extends Car{
    veh(){
         console.log(`the ${this.company} is very good`);
    }
}


let myCar = new Car("TATA" , "SAFARI");
console.log(myCar.start());
let myVeh = new Vehicle("TATA" , "SAFARI");
myVeh.veh();

  */


//ENCAPSULATION --------------------------------------------------------------------------------------

/* 
class Vehicle {
    constructor(speed) {
        if (this.constructor === Vehicle) {
            throw new Error("Abstract classes cannot be instantiated.");
        }
        this._speed = speed;
    }
}

class Car extends Vehicle {
    constructor(speed) {
        super(speed);
    }
    getSpeed() {
        // Accessing the protected member in a subclas
        return this._speed;
    }
}

const myCar = new Car(60);
console.log(myCar.getSpeed()); // Outputs: 60
console.log(myCar._speed); // Outputs: 60
 */
/* 
class BankAccount{
    #balance = 0;

    deposite(amount){
        this.amount = amount;
        this.#balance += amount
       
    }

    getBalance(){
         return `₹${this.#balance}`;
    }
}

let account = new BankAccount();
console.log(account.getBalance());
account.deposite(100);
console.log(account.getBalance());
 */


// ABSTRACTION -------------------------------------------------------------------------------------

//STATIC KEYWORD ----------------------------------------
/* 
class Calculator{
    static add(a,b){
        return (a+b);
    }
}

console.log(Calculator.add(5,3)); //Direct access of the method through the class
 */


//GETTER AND SETTER _-------------------------------------------------------------------------

class Employee{
    constructor(name , salary){
        this.name = name;
        this._salary = salary
    }


}

let emp1 = new Employee("Samrat" , 30000)
console.log(emp1.name);
console.log(emp1.salary);
