const quizData = [
    {
        question: "Which is the World's first stock exchange? ",
        a: "Amsterdam",
        b: "Antwerp, Belgium",
        c: "New York",
        d: "Hamburg, Germany",
        correct: "b",
    },
    {
        question: "The day on which the Sun's direct rays cross the celestial equator is called?",
        a: "the solstice",
        b: "the equinox",
        c: "the ecliptic",
        d: "the aphelion",
        correct: "a",
    },
    {
        question: "Which electrifying metal is used in an octopus blood?",
        a: "Copper",
        b: "Iron",
        c: "Silver",
        d: "Tin",
        correct: "a",
    },
    {
        question: "So far, most of the strongest impacts of climate change have been observed in:",
        a: "southern latitudes",
        b: "the tropics",
        c: "northern latitudes",
        d: "all latitudes equally",
        correct: "c",
    },
    {
        question: "Which planet has the largest Asteroid belt?",
        a: "Saturn",
        b: "Venus",
        c: "Mars",
        d: "Jupiter",
        correct: "a",
    },
    {
        question: "Where is a prawn's heart located?",
        a: "Chest",
        b: "Head",
        c: "Stomach",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "If X is the brother of the son of Y's son, how is X related to Y?",
        a: "Son",
        b: "Cousin",
        c: "Grandson",
        d: "Brother",
        correct: "c",
    },
    {
        question: "Pointing to a photograph, a man said, \"I have no brother or sister but that man's father is my father's son.\" Whose photograph was it?",
        a: "His Father",
        b: "His Grandfather",
        c: "His own",
        d: "His Son",
        correct: "d",
    },
    {
        question: "How much ice in the Antarctic glaciers are made of penguin wee?",
        a: "1%",
        b: "10%",
        c: "Nearly 3%",
        d: "Trick Question! 0% maybe",
        correct: "c",
    },
    {
        question: "Which among the following is the main factor which makes the banks to maintain a Capital Adequacy Ratio?",
        a: "Credit Rating",
        b: "Hedging",
        c: "Risk",
        d: "Liquidity",
        correct: "c",
    },
    {
        question: "What's so amazing about a chameleon's eyes?",
        a: "They're armored",
        b: "Full color vision",
        c: "Bulges out of the head",
        d: "They move separately",
        correct: "d",
    },
    {
        question: "What is a group of old stars closely packed in a symmetrical form called?",
        a: "Open cluster",
        b: "Star cluster",
        c: "Globular cluster",
        d: "Galactic cluster",
        correct: "c",
    },
    {
        question: "P and Q are brothers of R. Q is son of S and T. S is the daughter of U. A is the father-in-law of T. B is son of U. What is the relationship of Q to B?",
        a: "Nephew",
        b: "Neice",
        c: "Paternal Aunt",
        d: "Maternal Uncle",
        correct: "a",
    },
    {
        question: "How many galaxies have been recorded in the observable universe?",
        a: "123455444 galaxies",
        b: "38999999999999 galaxies",
        c: "445545353535 galaxies",
        d: "2,000,000,000,000 galaxies",
        correct: "d",
    },
    {
        question: "Why are otters such handy animals?",
        a: "They can dive for longer periods",
        b: "They can use tools",
        c: "They make funny sounds",
        d: "They have whiskers",
        correct: "b",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const ques1 = document.getElementById('ques1')
const ques2 = document.getElementById('ques2')
const ques3 = document.getElementById('ques3')
const ques4 = document.getElementById('ques4')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    ques1.innerText = currentQuizData.a
    ques2.innerText = currentQuizData.b
    ques3.innerText = currentQuizData.c
    ques4.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2 class="co">You answered ${score}/${quizData.length} questions correctly</h2>

           <button class="btn-6" onclick="location.reload()">Reload</button>
           `
       }
    }
})