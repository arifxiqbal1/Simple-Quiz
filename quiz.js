const questions = [
    {
        question:"What is the capital city of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        correctAnswer: "Ottawa"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Oxalate"],
        correctAnswer: "Oxygen"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
  
    },
    {
        question:"What is the capital of Bihar",
        options: ["Darbhanga", "Aurangabad", "Dehri", "Patna"],
        correctAnswer: "Patna"
    },
    {
        question:" In which year did the Titanic sink?",
        options: ["1912", "1908", "1922", "1910"],
        correctAnswer: "1912"
    },
]
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");

const optionButtons = [
    document.getElementById("option1"),
    document.getElementById("option2"),
    document.getElementById("option3"),
    document.getElementById("option4")
];

const nextButton = document.querySelector(".nxtBtn")

function loadQuestion(){
 
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        optionButtons[index].textContent = option;
        optionButtons[index].style.backgroundColor = "white";      
        optionButtons[index].style.color = "#163ff6";
        optionButtons[index].disabled = false; 
       });

    }

    function selectAnswer(selectedOption) {
        
        const currentQuestion = questions[currentQuestionIndex];
    
        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.correctAnswer) {
                button.style.backgroundColor = "lightgreen";
                button.style.color = "black";
            } else if (button.textContent === selectedOption.textContent) {
                button.style.backgroundColor = "red";
                button.style.color = "white";
            }
        });
    
        if (selectedOption.textContent === currentQuestion.correctAnswer) {
            score++;
        }
    
        nextButton.style.display = "block";
    }
    

function nextQuestion(){
currentQuestionIndex++;
if( currentQuestionIndex  < questions.length){
    loadQuestion();

}else{
    showResults();
}

}
function showResults(){

    questionElement.textContent = `You scored ${score} out of ${questions.length}`
    
    optionButtons.forEach(button => {
        button.style.display = "none";
    })

    nextButton.style.display = "none"

}
optionButtons.forEach(button => {
    button.addEventListener("click", () => selectAnswer(button));
  });

  nextButton.addEventListener("click", nextQuestion);

loadQuestion();