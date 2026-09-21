document.addEventListener("DOMContentLoaded" , ()=>{

    const startBtn = document.querySelector("#start-btn")
    const nextBtn = document.querySelector("#next-btn")
    const restartBtn = document.querySelector("#restart-btn")
    const questionContainer = document.querySelector("#question-container")
    const questionText = document.querySelector("#question-text")
    const choicesList = document.querySelector("#choices-list")
    const resultContainer = document.querySelector("#result-container")
    const scoreDisplay = document.querySelector("#score")


    const questions = [
        {
            question : "What is the capital of France?",
            choices : ["paris" , "london" , "berlin" , "delhi"],
            answer : "paris"
        },
        {
            question : "Which planet is known as the Red Planet?",
            choices : ["venus" , "mars" , "jupiter" , "earth"],
            answer : "mars"
        },
        {
            question : "Who go nobel prize?",
            choices : ["Rabindranath" , "Mukesh Ambani" , "Narendra Modi" , "Jhinku Roy"],
            answer : "Rabindranath"
        }
    ]


    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener("click" , startQuiz);

    nextBtn.addEventListener("click" , (e)=>{
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }
        else{
            showResult();
        }
    })

    restartBtn.addEventListener("click" , ()=>{
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        startQuiz();
    })

    function startQuiz(){
        
        questionContainer.classList.remove("hidden")
        resultContainer.classList.add("hidden")
        startBtn.classList.add("hidden")
        showQuestion();
    }

    function showQuestion(){
        nextBtn.classList.add("hidden")
        const q = questions[currentQuestionIndex]
        questionText.textContent = q.question;
        choicesList.innerHTML = "";
        const optionsArray = (questions[currentQuestionIndex].choices);
        optionsArray.forEach(option => {
            let li = document.createElement("li");
            li.textContent = option;
            li.addEventListener("click" , () => selectAns(option) ) //****************************************************************** this is very very important search in chatgpt (i pass the function reference with parameter, this is only the reason)
            choicesList.append(li);
        });


    }


    function selectAns(choice){
        const correctAns = questions[currentQuestionIndex].answer;
        
        if(choice === correctAns){
            score++;
        }

        nextBtn.classList.remove("hidden")
        
    }

    function showResult(){
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden")
        scoreDisplay.textContent = `Score : ${score} out of ${questions.length}`
    }

})