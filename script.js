

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('assets/sounds/success.mp3');
let AUDIO_FAIL = new Audio('assets/sounds/fail.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

/**
 * @returns 'true' oder 'false'
 */
function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    // Show End-Screen
    document.getElementById('end-screen').style = '';                   // end-screen anzeigen
    document.getElementById('question-body').style = 'display: none';   // question-body ausblenden

    document.getElementById('amount-of-questions').innerHTML = questions.length;        // anzeige der menge der fragen im html
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;    // anzeige der menge der richtig beantworteten fragen im html
    document.getElementById('header-image').src = 'assets/img/trophy.png';              // austausch des bildes wenn quiz zu ende ist
}

/**
 * wir nehmen das erste element aus dem array und speichern es in die variable 'question'
 * die antwortcontainer werden mit den werten aus dem objekt befüllt
 * die zahl im footer welche frage angezeigt wird, wird um 1 erhöht (weil default = 0)
 * */
function updateToNextQuestion() {
    // Show Question  
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('displayed-question').innerHTML = currentQuestion + 1;
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;     // anzeige der prozentzahl in der progressbar
    document.getElementById('progress-bar').style.width = `${percent}%`;   // anpassen der progressbar
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

    if (rightAnswerSelected(selectedQuestionNumber)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }

    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber) {
    return selectedQuestionNumber == question['right_answer'];
}

/**
 * 'currentQuestion' wird um 1 erhöht
 * der button wird wieder disabled
 */
function nextQuestion() {
    currentQuestion++;  //z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

/**
 * alle css-klassen für die farbliche anzeige werden gelöscht
 */
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

function restartGame() {
    document.getElementById('header-image').src = 'assets/img/quiz.jpg';    // austausch des bildes wenn quiz neu gestartet wird
    document.getElementById('end-screen').style = 'display: none';          // end-screen ausblenden
    document.getElementById('question-body').style = '';                    // question-body anzeigen
    currentQuestion = 0;
    rightQuestions = 0;
    init();

}
