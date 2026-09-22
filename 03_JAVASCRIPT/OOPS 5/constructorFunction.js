/* class Boy{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    displayName(){
        console.log("name : " , this.name);
        console.log("age : " , this.age);
    }
}

const boy1 = new Boy("Ashis" , 25);
boy1.displayName();

*/


function Tea(type){
    this.type = type;
    this.description = function(){
        return `This is a ${this.type}`;
    };
}

const myTea = new Tea("Lemon tea")
console.log(myTea.description());
