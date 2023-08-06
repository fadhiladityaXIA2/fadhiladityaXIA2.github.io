const questions = [
    {
        question: "Siapakah Penemu Bola Lampu?",
        answers: [
            {text: "Albert Einstein", correct: false},
            {text: "Alexander Graham bell", correct: false},
            {text: "Isaac Newton", correct: false},
            {text: "Thomas Edison", correct: true},
        ]
    },
    {
        question: "Apa Nama Ibukota Jepang?",
        answers: [
            {text: "Shanghai", correct: false},
            {text: "Tokyo", correct: true},
            {text: "Beijing", correct: false},
            {text: "Seoul", correct: false}
        ]
    },
    {
        question: "Pada Tahun Berapakah Manusia Pertama Kali Mendarat Di Bulan?",
        answers: [
            
            {text: "1972", correct: false},
            {text: "1955", correct: false},
            {text: "1969", correct: true},
            {text: "1981", correct: false}
        ]
    },
    {
        question: "Apa Lambang Kimia Untuk Unsur Emas?",
        answers: [
            {text: "Fe", correct: false},
            {text: "Ag", correct: false},
            {text: "Hg", correct: false},
            {text: "Au", correct: true},
        ]
    },
    {
        question: "Siapakah Penulis Novel Harry Potter?",
        answers: [
            {text: "J.K. Rowling", correct: true},
            {text: "Charles Dickens", correct: false},
            {text: "Jane Austen", correct: false},
            {text: "George Orwell", correct: false}
        ]
    }
]

const jawab = document.querySelector('.jawab')
const iya = document.querySelector('#iya')
const btn = document.querySelector('#next-btn')

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    btn.innerHTML = "Next";
    showQuestion()
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    iya.innerHTML = `${questionNo}. ${currentQuestion.question}`
    
    currentQuestion.answers.forEach((answer)=>{
        const button = document.createElement('button')
        button.classList.add('btn')
        button.innerHTML = answer.text
        jawab.appendChild(button)
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
      button.addEventListener('click', selectAnswer)
    })
    
}

function resetState() {
    btn.style.display = 'none'
    while(jawab.firstChild) {
         jawab.removeChild(jawab.firstChild)
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add('benar')
        score++
    } else {
        selectedBtn.classList.add('salah')
    }
    
    Array.from(jawab.children).forEach(button=>{
        if(button.dataset.correct === 'true') {
            button.classList.add('benar')
        }
        button.disabled = true;
    })
    btn.style.display = 'block'
}

function showScore() {
    resetState()
    iya.innerHTML = `Kamu benar ${score} dari ${questions.length} soal!`
    btn.innerHTML = "Coba Lagi"
    btn.style.display = 'block'
}

function handleButton() {
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

btn.addEventListener('click', function () {
    if(currentQuestionIndex < questions.length) {
        handleButton()
    } else {
        startQuiz()
    }
})


startQuiz()





















