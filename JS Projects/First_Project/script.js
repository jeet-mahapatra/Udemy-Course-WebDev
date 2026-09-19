
document.addEventListener("DOMContentLoaded", function(){
    const todoInput = document.querySelector("#todo-input")
    const addTaskButton = document.querySelector("#add-task-btn")
    const todoList = document.querySelector("#todo-list")

    
        
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    
    tasks.forEach(task => {
        renderTasks(task)
    });

    addTaskButton.addEventListener("click" , function(){
        const taskText = todoInput.value.trim();
        if(taskText === "") return 

        const newTask = {
            id : Date.now(),
            text :taskText,
            completed : false
        }
        tasks.push(newTask)
        saveTask();
        renderTasks(newTask)
        todoInput.value = ""
    })

    const saveTask = function(){
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    function renderTasks(task){
        console.log(task);
        
        let content = document.createElement("li"); 
        content.innerHTML = `<span>${task.text}</span>
        <button>Delete</button>`
        todoList.append(content)

        if (task.completed) {
            content.classList.add("completed");
        }

        content.addEventListener("click" , (e) => {
            if (e.target.tagName == "BUTTON") return;
            
            task.completed = !task.completed
            content.classList.toggle("completed")
            saveTask()  
            
        })

        
        

        content.querySelector("button").addEventListener("click" , (e) =>{
            e.stopPropagation(); //prevent toggle from firing
            tasks = tasks.filter((t) => t.id !== task.id) //================================****************==============

            content.remove();
            saveTask()   
        })

        // let btn = document.createElement("button")
        // btn.textContent = "Delete";
        // content.append(btn)
        
    }
})

