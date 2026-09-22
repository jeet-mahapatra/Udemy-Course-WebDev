let Person = function(name){
    this.name = name
}

Person.prototype.greet = function(){
    console.log(`hello ${this.name}`);
    
}

Person.prototype.greet = function(){
  console.log(`Fuck`);
}

const jeet = new Person("Jeet");
jeet.greet()

