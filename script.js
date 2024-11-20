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
        "question": "Was bedeutet HTML?",
        "answer_1": "Hypertext Markup Language",
        "answer_2": "High Text Markup Language",
        "answer_3": "Hyperlink and Text Markup Language",
        "answer_4": "Hypertext Machine Language",
        "right_answer": 1
    },
    {
        "question": "Welches Element wird verwendet, um einen Absatz in HTML zu erstellen?",
        "answer_1": "<p>",
        "answer_2": "<div>",
        "answer_3": "<span>",
        "answer_4": "<section>",
        "right_answer": 1
    },
    {
        "question": "Welches Attribut wird verwendet, um eine URL in einem Link anzugeben?",
        "answer_1": "src",
        "answer_2": "href",
        "answer_3": "link",
        "answer_4": "url",
        "right_answer": 2
    },
    {
        "question": "Welches HTML-Element wird verwendet, um eine Überschrift der höchsten Ebene zu erstellen?",
        "answer_1": "<h1>",
        "answer_2": "<header>",
        "answer_3": "<heading>",
        "answer_4": "<h6>",
        "right_answer": 1
    },
    {
        "question": "Welches Element wird verwendet, um eine ungeordnete Liste in HTML zu erstellen?",
        "answer_1": "<ol>",
        "answer_2": "<ul>",
        "answer_3": "<list>",
        "answer_4": "<li>",
        "right_answer": 2
    }
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

/**
 * wir nehmen das erste element aus dem array und speichern es in die variable
 * */
function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questionext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

/**
 * in 'question' wird das 0-te element (also 1. frage) gespeichert
 * 'selection.slice(-1)' nimmte den letzten buchstaben von der angeklickten antwort und speichert das ergebnis in die variable 'selectedQuestionNumber'
 * mit einer 'if-abfrage' geben wir das ergebnis der antwort in der console aus
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
        console.log('Richtige Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('Falsche Antwort!!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
}