// Example 1
function changeText(){
let text1 = document.querySelector("#myParagraph")
    text1.textContent = "Paragraph is changed"
}

let but1 = document.querySelector("#changeTextbutton")
but1.addEventListener("click" , changeText)

// Example 2
function addHighlight(){
    let citiesList = document.querySelector("#citiesList")
    citiesList.children[0].classList.add("highlight")
    
}

let but2 = document.querySelector("#highlightFirstCity")
but2.addEventListener("click" , addHighlight)

// Example 3

document.querySelector("#changeOrder").addEventListener("click",function () {
    let type = document.querySelector("#cofeeType")
    type.textContent = "Espresso"
    type.style.backgroundColor = "green"
})

// Example 4
document.querySelector("#addNewItem").addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs"
    document.querySelector("#shoppingList").append(newItem)
})

// Example - 5
document.querySelector("#removeLastTask").addEventListener("click", function(){  
    let taskList = document.querySelector("#taskList")
    taskList.lastElementChild.remove();
})

//Example - 6

//Example - 7

document.querySelector("#teaList").addEventListener("click" , function(event) {
    console.log(event.target );
    
    if(event.target && event.target.matches(".teaItem")){
        alert(`You have pressed ${event.target.textContent}`)
    }
    
})

//Example - 8

document.querySelector("#feedbackForm").addEventListener("submit" , function(event){
    event.preventDefault();
    let feedback = document.querySelector("#feedbackInput").value;
    // console.log(feedback);
    let ans = document.querySelector("#feedbackDisplay");
    ans.textContent = feedback;
    ans.style.fontSize = "30px"   
})

//Example - 9
document.addEventListener("DOMContentLoaded" , function(){
    document.getElementById("domStatus").textContent = "DOM fully Loaded"
})

//Example 10
document.querySelector("#toggleHighLight").addEventListener("click" , function() {
    let text4 = document.querySelector("#descriptionText")
    text4.classList.toggle("highlight")
})

document.querySelector(".darkmode").addEventListener("click", function(){
    let hold = document.querySelector("#body")
    hold.classList.toggle("lightmode")
    
    but4 = document.querySelector(".darkmode")
      console.log(hold.classList.value);
     if (hold.classList.contains("lightmode")) {
        but4.textContent = "Dark Mode";
    } else {
        but4.textContent = "Light Mode";
    }
})



