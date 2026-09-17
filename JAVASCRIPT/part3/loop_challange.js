/* 
let chai = ["green tea" , "black tea" , "masalachai" , "oolang tea"];
let selectedTeas = [];

for(let i=0 ; i<chai.length ; i++){
    if(chai[i] === "masalachai"){
        break;
    }
    else{
        selectedTeas.push(chai[i]);
    }
}

console.log(selectedTeas);
 */

/* 
let cities = ["London" , "New York" , "Paris" , "Berlin"]
let visitedCities = [];
for(let i=0 ; i<cities.length ; i++){
    if(cities[i] == "Paris"){
        continue;
    }
    visitedCities.push(cities[i]);
}

console.log(visitedCities);
 */

/* 
let numbers = ["One" , "Two" , "Three" , "Four" , "Five"];
for(let num of numbers){
    console.log(num);
    
}
 */

/* 
let cities = ["London" , "New York" , "Paris" , "Berlin"]
let visitedCities = [];
for(let city of cities){
    if(city === "Paris"){
        continue
    }
    else{
        visitedCities.push(city);
    }
}
console.log(visitedCities);
 */
/* 
let citiesPopulation = {
    London : 8900000,
    "New Work" : 8400000,
    Paris : 2200000,
    Berlin : 3500000
}

let cityNewPopulation = {}
for(const city in citiesPopulation){
    // console.log(`${city} = ${citiesPopulation[city]}`);
    if(city === "London"){
        break; //its a dangerous condition for this question
    }
    cityNewPopulation[city] = citiesPopulation[city];  
}
// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));
// console.log(citiesPopulation["New Work"]);
console.log(cityNewPopulation);


 */


/* 
let teaCollection = ["earl grey" , "Masala chai", "Green tea" , "Oolang tea"];
let ans =[];
teaCollection.forEach((tea) => {
    if(tea === "Green tea"){
        return ;
    }
    ans.push(tea);
});

console.log(ans);
 */

// console.log(doubledNumbers);


let myteas = ["chai", "green tea" , "black tea" , "jasmine tea" , "hearbal tea"]
let ans = []

for (const tea of myteas) {
    
    if(tea.length <= 10){
        ans.push(tea);
    }
}
console.log(ans);

