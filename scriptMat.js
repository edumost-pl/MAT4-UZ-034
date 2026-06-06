/* ==================================================
EDUMOST MATHEMATICS FRAMEWORK v1
script.js
================================================== */

let currentSlide = 1;

document.addEventListener("DOMContentLoaded", () => {


initSlides();
initProgress();
initModals();
initAnswers();
initOwlQuestions();


});

/* ==========================================
SLIDES
========================================== */

function initSlides(){

const slides = document.querySelectorAll(".slide");

slides.forEach((slide,index)=>{

    if(index === 0){
        slide.classList.add("active");
    }

});

updateProgress();

}

function nextSlide(){

const slides =
    document.querySelectorAll(".slide");

if(currentSlide >= slides.length){
    return;
}

slides[currentSlide - 1]
    .classList.remove("active");

currentSlide++;

slides[currentSlide - 1]
    .classList.add("active");

updateProgress();

window.scrollTo({
    top:0,
    behavior:"smooth"
});

}

function prevSlide(){


if(currentSlide <= 1){
    return;
}

const slides =
    document.querySelectorAll(".slide");

slides[currentSlide - 1]
    .classList.remove("active");

currentSlide--;

slides[currentSlide - 1]
    .classList.add("active");

updateProgress();

window.scrollTo({
    top:0,
    behavior:"smooth"
});

}

/* ==========================================
PROGRESS BAR
========================================== */

function initProgress(){
updateProgress();

}

function updateProgress(){
const slides =
    document.querySelectorAll(".slide");

const totalSlides =
    slides.length;

const progressBar =
    document.getElementById("progressBar");

const progressText =
    document.getElementById("progressText");

if(!progressBar || !progressText){
    return;
}

const percent =
    ((currentSlide - 1) /
    (totalSlides - 1))
    * 100;

progressBar.style.width =
    percent + "%";

progressText.innerHTML =
    `📍 Etap ${currentSlide} z ${totalSlides}`;

}

/* ==========================================
QUIZ ANSWERS
========================================== */

function initAnswers(){

    document.addEventListener(
        "click",
        function(e){

            const button =
                e.target.closest(
                    ".quiz-answer"
                );

            if(!button){
                return;
            }

            const task =
                button.closest(
                    ".quiz-block"
                );

            if(!task){
                return;
            }

            const result =
                task.querySelector(
                    ".task-result"
                );

            if(!result){
                return;
            }

            /* снимаем старое выделение */

            task
            .querySelectorAll(
                ".quiz-answer"
            )
            .forEach(btn=>{
                btn.classList.remove(
                    "good-btn",
                    "bad-btn"
                );
            });

            /* правильный ответ */

            if(
                button.dataset.correct
                === "true"
            ){

                button.classList.add(
                    "good-btn"
                );

                result.innerHTML =
                '<p class="good-answer">✅ Dobrze!</p>';

                /* блокируем только после успеха */

                task
                .querySelectorAll(
                    ".quiz-answer"
                )
                .forEach(btn=>{
                    btn.disabled = true;
                });

            }else{

                button.classList.add(
                    "bad-btn"
                );

                result.innerHTML =
                '<p class="bad-answer">❌ Spróbuj jeszcze raz.</p>';

            }

        }
    );

}
/* ==========================================
MODALS
========================================== */

function initModals(){
document.addEventListener(
    "click",
    function(e){

        const openBtn =
            e.target.closest(
                "[data-modal]"
            );

        if(
            openBtn &&
            !openBtn.classList.contains(
                "modal"
            )
        ){

            const id =
                openBtn.dataset.modal;

            const modal =
                document.querySelector(
                    `.modal[data-modal="${id}"]`
                );

            if(modal){
                modal.classList.add(
                    "active"
                );
            }

        }

        if(
            e.target.classList.contains(
                "close"
            )
        ){

            e.target
            .closest(".modal")
            .classList.remove(
                "active"
            );

        }

        if(
            e.target.classList.contains(
                "modal"
            )
        ){

            e.target.classList.remove(
                "active"
            );

        }

    }
);
}

/* ==========================================
SOWA PYTA
========================================== */

function initOwlQuestions(){
document.addEventListener(
    "click",
    function(e){

        const btn =
            e.target.closest(
                ".show-answer"
            );

        if(!btn){
            return;
        }

        const card =
            btn.closest(
                ".owl-question"
            );

        if(!card){
            return;
        }

        const question =
            card.querySelector(
                ".question-box"
            );

        const answer =
            card.querySelector(
                ".answer-box"
            );

        const opened =
            card.dataset.opened ===
            "true";

        if(!opened){

            question.style.display =
                "none";

            answer.style.display =
                "block";

            btn.innerHTML =
                "↩ Wróć do pytania";

            card.dataset.opened =
                "true";

        }else{

            answer.style.display =
                "none";

            question.style.display =
                "block";

            btn.innerHTML =
                "💡 Sprawdź odpowiedź";

            card.dataset.opened =
                "false";
        }

    }
);
}

/* ==========================================
IMAGE ZOOM
========================================== */

document.addEventListener(
"click",
function(e){
    const img =
        e.target.closest(".zum");

    if(!img){
        return;
    }

    const overlay =
        document.createElement("div");

    overlay.className =
        "image-overlay";

    const bigImg =
        document.createElement("img");

    bigImg.src = img.src;

    overlay.appendChild(bigImg);

    document.body.appendChild(
        overlay
    );

    overlay.addEventListener(
        "click",
        function(){

            overlay.remove();

        }
    );

}
);


/* ======================================
   UKRAINIAN SUPPORT
====================================== */



document.addEventListener("click", function(e){

    const trigger = e.target.closest(".ua-trigger");

    if(!trigger) return;

    const box = trigger.closest(".ua-box");

    box.classList.toggle("active");

    if(box.classList.contains("active")){

        trigger.innerHTML =
        "🇺🇦 Сховати переклад";

    }else{

        trigger.innerHTML =
        "🇺🇦 Українською";

    }

});