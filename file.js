const quizData = [
    {
        question: 'How old is Florin',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c',
    },
    {
        question: 'what is the most used programming language in 2019',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd',
    },
    {
        question: 'who is the president of us',
        a: 'dadai',
        b: 'Donald',
        c: 'donat',
        d: 'dodo',
        correct: 'b',
    },
    {
        question: 'what does html stands for',
        a: 'Hypertext Markup language',
        b: 'Application',
        c: 'Json',
        d: 'cascading',
        correct: 'a',
    },
    {
        question: 'what the year of javaScript',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none',
        correct: 'b',
    }
];
const atext = document.getElementById('a-text');
const btext = document.getElementById('b-text');
const ctext = document.getElementById('c-text');
const dtext = document.getElementById('d-text');
const questionEl = document.getElementById('question');
const subimtBtn  = document.getElementById('submit');
const quiz = document.getElementById('quiz');
let currentQuestion = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    atext.innerText = currentQuizData.a;
    btext.innerText = currentQuizData.b;
    ctext.innerText = currentQuizData.c;
    dtext.innerText = currentQuizData.d;
}
submit.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    if (answer) { // answer !== undefined
        if (answer === quizData[currentQuestion].correct) {
            score++;
        
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>your score is : ${score} / ${quizData.length}</h2> <button onclick="location.reload()">Reload</button>`
        }
        deselectAnswer();
    }
    
    
});
function deselectAnswer() {
    const answerEls = document.querySelectorAll('.answer');
    answerEls.forEach((answerEl) => {
         
        if(answerEl.checked) {
            
            answerEl.checked = false;
           
        }
}
                      )};
function getSelected() {
    const answerEls = document.querySelectorAll('.answer');
    let answer = undefined;
    answerEls.forEach((answerEl) => {
         
        if(answerEl.checked) {
            
            answer = answerEl.id;
           
        }
        
    });
    return answer;
    
}






















