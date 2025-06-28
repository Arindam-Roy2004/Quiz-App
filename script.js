document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Jupiter"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
            answer: "Harper Lee"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O"
        },
        {
            question: "What is the capital of Japan?",
            options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
            answer: "Tokyo"
        }
    ];

    const nextBtn = document.getElementById('next-btn');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');

    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const container = document.querySelector('.container');
    const questionText = document.getElementById('question-text');
    const choicesList = document.getElementById('choices-list');
    const scoreDisplay = document.getElementById('score');

    let currIndex = 0;
    let score = 0;
    let answered = false;
    startBtn.addEventListener('click', startQuiz);

    nextBtn.addEventListener('click', () => {
        answered = false; // Reset answered for the next question
        currIndex++;
        if (currIndex < questions.length) {
            showQuestion();
        } else {
            questionContainer.classList.add('hidden');
            nextBtn.classList.add('hidden');
            resultContainer.classList.remove('hidden');
            showResult();
        }
    });

    function startQuiz() {
        startBtn.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        showQuestion();
    }
    function showQuestion() {
        nextBtn.classList.add('hidden');
        questionText.textContent = questions[currIndex].question;
        choicesList.innerHTML = '';
        questions[currIndex].options.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            choicesList.appendChild(li);
            li.addEventListener('click', (e) => selectAnswer(choice));
        });

    }

    function selectAnswer(choice) {
        console.log(choice);
        const correctAnswer = questions[currIndex].answer;
        if (choice === correctAnswer) {
            if(answered===false) score++; 
            answered = true;
            console.log(score);
            // console.log('Correct!');
            blinkBackground('green');
        }
        if (choice === correctAnswer) {
            nextBtn.classList.remove('hidden');
        }
        else{
            blinkBackground('red');
        }
    };

    function showResult() {
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = `Your score: ${score} out of ${questions.length}`;

        // restartBtn.classList.remove('hidden');
        restartBtn.addEventListener('click', () => {
            currIndex = 0;
            score = 0;
            // questionContainer.classList.add('hidden');
            resultContainer.classList.add('hidden');
            // startBtn.classList.remove('hidden');
            // nextBtn.classList.add('hidden');
            // choicesList.innerHTML = '';
            // scoreDisplay.textContent = '';
            startQuiz();
        });

    };

    function blinkBackground(color) {
        container.classList.add(`blink-${color}`);
        setTimeout(() => {
            container.classList.remove(`blink-${color}`);
        }, 200); // blink duration in milliseconds
    }
});