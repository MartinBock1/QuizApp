let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer entwickelte die Relationale Datenbank?",
        "answer_1": "Bill Gates",
        "answer_2": "E.F. Codd",
        "answer_3": "Steve Jobs",
        "answer_4": "Mark Zuckerberg",
        "right_answer": 2
    },
    {
        "question": "Wer erfand die Programmiersprache Python?",
        "answer_1": "Guido van Rossum",
        "answer_2": "James Gosling",
        "answer_3": "Bjarne Stroustrup",
        "answer_4": "Dennis Ritchie",
        "right_answer": 1
    },
    {
        "question": "Wer ist der Schöpfer von Linux?",
        "answer_1": "Linus Torvalds",
        "answer_2": "Bill Gates",
        "answer_3": "Steve Wozniak",
        "answer_4": "Mark Shuttleworth",
        "right_answer": 1
    },
    {
        "question": "Wer entwickelte die erste Version von Windows?",
        "answer_1": "Steve Jobs",
        "answer_2": "Bill Gates",
        "answer_3": "Larry Page",
        "answer_4": "Tim Berners-Lee",
        "right_answer": 2
    },
    {
        "question": "Was bedeutet CSS?",
        "answer_1": "Cascading Style Sheets",
        "answer_2": "Computer Style Sheets",
        "answer_3": "Creative Style Systems",
        "answer_4": "Cascading Style System",
        "right_answer": 1
    },
    {
        "question": "Was bedeutet HTTP?",
        "answer_1": "Hypertext Transfer Protocol",
        "answer_2": "High Text Transfer Protocol",
        "answer_3": "Hyperlink Transfer Protocol",
        "answer_4": "Hypertext Transmission Protocol",
        "right_answer": 1
    },
    {
        "question": "Was bedeutet URL?",
        "answer_1": "Uniform Resource Locator",
        "answer_2": "Universal Resource Locator",
        "answer_3": "Uniform Reference Locator",
        "answer_4": "Universal Reference Locator",
        "right_answer": 1
    },
    {
        "question": "Was bedeutet API?",
        "answer_1": "Application Programming Interface",
        "answer_2": "Application Programming Integration",
        "answer_3": "Application Protocol Interface",
        "answer_4": "Application Program Interface",
        "right_answer": 1
    },
    {
        "question": "Was bedeutet SQL?",
        "answer_1": "Structured Query Language",
        "answer_2": "Standard Query Language",
        "answer_3": "Simple Query Language",
        "answer_4": "Structured Question Language",
        "right_answer": 1
    }
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

/**
 * wir nehmen das erste element aus dem array und speichern es in die variable 'question'
 * die antwortcontainer werden mit den werten aus dem objekt befüllt
 * */
function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('end-screen').style = '';
        document.getElementById('question-body').style = 'display: none';
    } else {
        let question = questions[currentQuestion];

        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
        document.getElementById('displayed-question').innerHTML = currentQuestion + 1;
    }
}

/**
 * in 'question' wird das 0-te element (also 1. frage) gespeichert
 * 'selection.slice(-1)' nimmte den letzten buchstaben von der angeklickten antwort und speichert das ergebnis in die variable 'selectedQuestionNumber'
 * mit einer 'if-else-abfrage' geben wir das ergebnis der antwort in der console aus
 * '.parentNode' spricht den übergeordneten container an
 * mit '.parentNode.classList.add('bg-success')' fügen wir der richtigen antwort die css-klasse 'bg-success' zu
 * mit '.parentNode.classList.add('bg-danger')' fügen wir der falschen antwort die css-klasse 'bg-danger' zu
 * in 'idOfRightAnswer' speichern wir die id der richtigen antwort
 * bei falscher antwort wird automatisch die richtige antwort mit 'bg-success' hinterlegt
 * mit '.disabled = false' wird der button enabled - disabled wurde in html auf default gesetzt
 * @param {*} selection 
 */
function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        // console.log('Richtige Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        // console.log('Falsche Antwort!!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;  //z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {

    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}
