console.log("Hello! from your script");
console.log(document);

// document.getElementById
// document.querySelector
// document.querySelectorAll
let element = document.getElementById("ele");
console.log(element);


function changeText(){
    let element = document.getElementById("ele");
    element.textContent = "Oho the button is clicked";
    
}

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);