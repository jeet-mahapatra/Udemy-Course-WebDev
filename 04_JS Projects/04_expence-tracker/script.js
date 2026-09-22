document.addEventListener("DOMContentLoaded" , ()=>{

    const expenseForm = document.querySelector("#expense-form")
    const expenseNameInput = document.querySelector("#expense-name")
    const expenseAmountInput = document.querySelector("#expense-amount")
    const expenseList = document.querySelector("#expense-list")
    const totalAmountDisplay = document.querySelector("#total-amount")

    let expenses = JSON.parse(localStorage.getItem("expenses")) || []

    expenses.forEach(element => {
        renderExpenses(element)
    });

    let totalAmonut = calculateTotal()

    

    expenseForm.addEventListener("submit" ,(e)=>{
        e.preventDefault();
        const name = expenseNameInput.value.trim();
        const amount = expenseAmountInput.value.trim();

        expenseNameInput.value = "";
        expenseAmountInput.value = "";
        if(name === "" || amount === 0) return;

        const expense = {
            id : Date.now(),
            name : name,
            amount : parseFloat(amount)
        }

        expenses.push(expense)
        saveExpense();
                
        renderExpenses(expense)

        
        
    })

    expenseList.addEventListener("click" , (e) =>{
        if(e.target.tagName === "BUTTON"){
            
            let expId =parseInt( e.target.getAttribute("rem-btn"))
            
            removeExpense(expId)
        }
    })




    function calculateTotal(){
        let total = 0;
        expenses.forEach(e =>{
            total += e.amount
        })
        return total;
    }

    function saveExpense(){
        localStorage.setItem("expenses" , JSON.stringify(expenses))
    }

    function renderExpenses(element){

        const myExpence = document.createElement("li")
        myExpence.innerHTML = `<span>${element.name} => $${element.amount.toFixed(2)}</span>
        <button rem-btn="${element.id}">Remove</button>`
        expenseList.append(myExpence)
        
        total = calculateTotal()
        totalAmountDisplay.textContent = `${total.toFixed(2)}`

    }

    function removeExpense(id){
        const index = expenses.findIndex(u => u.id === id)
        
        if(index != -1){
            expenses.splice(index,1)
        }   
        saveExpense();
        if(expenses.length === 0){
            localStorage.removeItem("expenses")
        }
        location.reload();
    }

})