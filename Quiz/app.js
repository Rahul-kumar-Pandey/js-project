const quizData=[
    {
        question: "president of India ?",
        a:"Rahul",
        b:"Aman",
        c:"Raj",
        d:"Rnkovind",
        correct: "d",
    },
    {
        question: "prime minister of india?",
        a:"Rahul",
        b:"Aman",
        c:"Raj",
        d:"modi",
        correct: "d",
    },
    {
        question: "what is your name ?",
        a:"Rahul",
        b:"Aman",
        c:"Raj",
        d:"Rnkovind",
        correct: "a",
    },
    {
        question: "favourite color of Rahul",
        a:"red",
        b:"green",
        c:"black",
        d:"yellow",
        correct: "c",
    }
]

const quiz=document.getElementById("quiz");
const answer1=document.querySelectorAll(".answer");
const question1=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');
let currentQuiz=0,score=0;
loadQuiz();

//function to load quiz;
function loadQuiz(){
    //first deselect answers if any of them is already selected;
    deSelectAnswers();
    const currentQuizData=quizData[currentQuiz];

    question1.innerHTML=currentQuizData.question;
    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;

}
submitBtn.addEventListener("click",()=>{
    //check to see the answer
    const answer=getselected();
    if(answer){
        if(answer==quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML=`<h2>Your score is ${score}/${quizData.length}</h2><button onclick="location.reload()">Reload</button>`;
        }
    }
    
});

//return selected answer 
function getselected() {
    
    let answer=undefined;

    answer1.forEach((e) =>{
        if(e.checked){
            answer=e.id;
        }
    });

    return answer;
}

//deselect any previous selected answers
function deSelectAnswers(){
    answer1.forEach((e) =>{
        e.checked=false;
    });
}