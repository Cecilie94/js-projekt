const questions = [
    {
        question: "Who wrote the play Romeo and Juliet?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false }
        ]
    },
    {
        question: "What is the capital of South Korea?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: false },
            { text: "Seoul", correct: true },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Who directed the movie Inception?",
        answers: [
            { text: "Christopher Nolan", correct: true },
            { text: "Steven Spielberg", correct: false },
            { text: "Martin Scorsese", correct: false },
            { text: "Quentin Tarantino", correct: false },
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yen", correct: true },
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false },
            { text: "Pound", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },         
            { text: "Pablo Picasso", correct: false },
            { text: "Michelangelo", correct: false }
        ]
    }
    
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

// funktion til at starte quizzen
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
// viser spørgsmålene
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

// forEach-loop tilføjer svarmuligheder
currentQuestion.answers.forEach(answer => {
const button = document.createElement('button');
button.innerHTML = answer.text;
button.classList.add('btn');
answerButtons.appendChild(button); // tilføjer svar knappen til div'en
if(answer.correct) {
    button.dataset.correct = answer.correct;
}
button.addEventListener('click', selectAnswer); // tilføjer eventlistener til knappen
    });
}

// funktion til at resette state
function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

// viser scoren
function showScore() {
    resetState();
    questionElement.innerHTML = 'You scored ' + score + ' out of ' + questions.length + '!';
    nextButton.innerHTML = "Play Again?";
    nextButton.style.display = "block";
}

// funktion til at håndtere næste knap
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// eventlistener til næste knap hvis nextButton er = Play Again
nextButton.addEventListener('click', () => {
    if (nextButton.innerHTML === "Play Again?") {
        startQuiz();
    } else {
        handleNextButton();
    }
});

startQuiz();