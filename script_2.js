
/* =========================
   ПЕРЕКЛЮЧЕНИЕ СЛАЙДОВ
========================= */

let currentSlide = 1;

/* ВПЕРЁД */

function nextSlide() {

    const current =
        document.getElementById(`slide${currentSlide}`);

    if (current) {
        current.classList.remove("active");
    }

    currentSlide++;

    const next =
        document.getElementById(`slide${currentSlide}`);

    if (next) {
        next.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    updateProgress();

}

/* НАЗАД */

function prevSlide() {

    if (currentSlide === 1) return;

    const current =
        document.getElementById(`slide${currentSlide}`);

    if (current) {
        current.classList.remove("active");
    }

    currentSlide--;

    const prev =
        document.getElementById(`slide${currentSlide}`);

    if (prev) {
        prev.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    updateProgress();

}

/* =========================
   ПОКАЗ ПЕРЕВОДА
========================= */

function toggleCard(id) {

    const el = document.getElementById(id);

    if (!el) return;

    if (el.style.display === "block") {
        el.style.display = "none";
    } else {
        el.style.display = "block";
    }

}

/* =========================
   ИНТЕРАКТИВНОЕ ЗАДАНИЕ
========================= */

function checkAnswer(button) {

const card = button.closest('.lesson-block');

if (!card) return;

const result = card.querySelector('.taskResult');

if (!result) return;

if (button.dataset.correct === "true") {

    result.innerHTML =
        '<p class="good-answer">✅ Dobrze!</p>';

} else {

    result.innerHTML =
        '<p class="bad-answer">❌ Spróbuj ponownie.</p>';

}

}



/* =========================
   МИНИ-ТЕСТ
========================= */

function checkQuiz() {
let score = 0;

document.querySelectorAll('.question').forEach(question => {

    question.querySelectorAll('label')
        .forEach(label => {
            label.classList.remove('correct-answer');
            label.classList.remove('wrong-answer');
        });

    const correctAnswer =
        question.dataset.correct;

    const selected =
        question.querySelector('input:checked');

    if (!selected) return;

    const selectedLabel =
        selected.closest('label');

    if (selected.value === correctAnswer) {

        score++;
        selectedLabel.classList.add('correct-answer');

    } else {

        selectedLabel.classList.add('wrong-answer');

        const correctInput =
            question.querySelector(
                `input[value="${correctAnswer}"]`
            );

        if (correctInput) {
            correctInput
                .closest('label')
                .classList.add('correct-answer');
        }
    }
});

document.getElementById('quizResult')
    .innerHTML = `
        <h3>🎯 Wynik: ${score}/7</h3>
    `;
}


// этапы
// let currentSlide = 2;
// const totalSlides = 16;

function updateProgress(){

const progressBar =
    document.getElementById("progressBar");

const progressText =
    document.getElementById("progressText");

if(!progressBar || !progressText){
    return;
}

const totalSlides = 20;

const percent =
    ((currentSlide - 1) / (totalSlides - 1))
    * 100;

progressBar.style.width =
    percent + "%";

progressText.innerHTML =
    `📍 Etap ${currentSlide} z ${totalSlides}`;

}

// function nextSlide(){

// const current =
//     document.getElementById(
//         `slide${currentSlide}`
//     );

// if(current){
//     current.classList.remove("active");
// }

// if(currentSlide < totalSlides){
//     currentSlide++;
// }

// const next =
//     document.getElementById(
//         `slide${currentSlide}`
//     );

// if(next){
//     next.classList.add("active");
// }

// updateProgress();

// window.scrollTo({
//     top:0,
//     behavior:"smooth"
// });

// }

// function prevSlide(){

// if(currentSlide <= 1) return;

// const current =
//     document.getElementById(
//         `slide${currentSlide}`
//     );

// if(current){
//     current.classList.remove("active");
// }

// currentSlide--;

// const prev =
//     document.getElementById(
//         `slide${currentSlide}`
//     );

// if(prev){
//     prev.classList.add("active");
// }

// updateProgress();

// window.scrollTo({
//     top:0,
//     behavior:"smooth"
// });

// }

document.addEventListener(
"DOMContentLoaded",
updateProgress
);