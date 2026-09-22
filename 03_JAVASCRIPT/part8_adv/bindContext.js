const person = {
    name : "Jeet",
    greet(){
        console.log(`this is ${this.name}`);   
    }
}

person.greet()
let another = person.greet;
another()

let person2 = person.greet.bind({name : "RAM"});
person2()
