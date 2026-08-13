/* ==========================================
   SECRET ANSWER
========================================== */

const secretName = "skd";


/* ==========================================
   MEMORY DATA
========================================== */

const memories = [

    {
        number: "MEMORY 01",
        title: "The beginning",
        image: "assets/photos/memory1.jpg",
        note:
        "I still remember how everything started. " +
        "Maybe at that moment I didn't know how important " +
        "these little moments would become to me."
    },

    {
        number: "MEMORY 02",
        title: "That day",
        image: "assets/photos/memory2.jpg",
        note:
        "There are some days that look completely normal " +
        "while you're living them, but later you realise " +
        "how special they actually were."
    },

    {
        number: "MEMORY 03",
        title: "Your smile",
        image: "assets/photos/memory3.jpg",
        note:
        "I don't think you realise how many times your smile " +
        "has made an ordinary moment feel a little better."
    },

    {
        number: "MEMORY 04",
        title: "Us",
        image: "assets/photos/memory4.jpg",
        note:
        "Out of all the things I could keep, I think I would " +
        "keep the little moments. The ones where nothing " +
        "special was happening, but being together was enough."
    }

];


/* ==========================================
   ENTER WORLD
========================================== */

function enterWorld() {

    const intro = document.getElementById("intro");
    const secretScreen = document.getElementById("secretScreen");

    intro.style.transition = "opacity 1s ease, transform 1s ease";

    intro.style.opacity = "0";
    intro.style.transform = "scale(1.04)";

    setTimeout(() => {

        intro.style.display = "none";

        secretScreen.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 900);

}


/* ==========================================
   SECRET CHECK
========================================== */

function checkSecret() {

    const input = document
        .getElementById("secretInput")
        .value
        .trim()
        .toLowerCase();

    const wrongMessage =
        document.getElementById("wrongMessage");

    if (input === secretName.toLowerCase()) {

        wrongMessage.textContent = "";

        const secretScreen =
            document.getElementById("secretScreen");

        const website =
            document.getElementById("website");

        secretScreen.style.transition =
            "opacity .8s ease, transform .8s ease";

        secretScreen.style.opacity = "0";
        secretScreen.style.transform = "scale(1.03)";

        setTimeout(() => {

            secretScreen.style.display = "none";

            website.style.display = "block";

            setTimeout(() => {

                website.style.transition =
                    "opacity 1.2s ease";

                website.style.opacity = "1";

            }, 50);

            startBackgroundMusic();
            createFloatingHearts();

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 800);

    } else {

        wrongMessage.textContent =
            "Hmm... that's not the one. Try again ♡";

    }

}


/* ==========================================
   ENTER USING ENTER KEY
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const input =
        document.getElementById("secretInput");

    if (input) {

        input.addEventListener("keydown", function(event) {

            if (event.key === "Enter") {
                checkSecret();
            }

        });

    }

});


/* ==========================================
   MOBILE MENU
========================================== */

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";

    }

}


function closeMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.style.display = "none";

}


/* ==========================================
   MEMORY POPUP
========================================== */

let typingTimer = null;


function openMemory(index) {

    const memory = memories[index];

    const modal =
        document.getElementById("memoryModal");

    const image =
        document.getElementById("modalImage");

    const number =
        document.getElementById("modalNumber");

    const title =
        document.getElementById("modalTitle");

    const text =
        document.getElementById("typedText");

    image.src = memory.image;

    number.textContent = memory.number;

    title.textContent = memory.title;

    text.textContent = "";

    modal.style.display = "block";

    document.body.style.overflow = "hidden";

    clearInterval(typingTimer);

    typeText(memory.note);

}


function typeText(text) {

    const element =
        document.getElementById("typedText");

    let index = 0;

    element.textContent = "";

    typingTimer = setInterval(() => {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

        } else {

            clearInterval(typingTimer);

        }

    }, 32);

}


function closeMemory() {

    document.getElementById("memoryModal")
        .style.display = "none";

    document.body.style.overflow = "auto";

    clearInterval(typingTimer);

}


/* ==========================================
   BACKGROUND MUSIC
========================================== */

let backgroundAudio = null;


function startBackgroundMusic() {

    /*
        Create your audio file:

        assets/audio/background.mp3

        Then this code will play it
        after the user clicks the entry button.
    */

    if (!backgroundAudio) {

        backgroundAudio =
            new Audio("assets/audio/background.mp3");

        backgroundAudio.loop = true;

        backgroundAudio.volume = 0.18;

    }

    backgroundAudio.play().catch(() => {

        console.log(
            "Audio waiting for browser permission."
        );

    });

}


/* ==========================================
   FLOATING HEARTS
========================================== */

function createFloatingHearts() {

    const container =
        document.querySelector(".hearts");

    if (!container) return;

    setInterval(() => {

        const heart =
            document.createElement("span");

        heart.className = "floating-heart";

        heart.textContent = "♡";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            (7 + Math.random() * 7) + "s";

        heart.style.fontSize =
            (10 + Math.random() * 14) + "px";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 15000);

    }, 1400);

}


/* ==========================================
   YOUTUBE VIDEO
========================================== */

let youtubePlayer = null;


function onYouTubeIframeAPIReady() {

    youtubePlayer = new YT.Player(
        "youtubeVideo",
        {

            events: {

                "onStateChange":
                    onYoutubeStateChange

            }

        }
    );

}


function onYoutubeStateChange(event) {

    /*
        YT.PlayerState.ENDED = 0
    */

    if (event.data === YT.PlayerState.ENDED) {

        showVideoComplete();

    }

}


/* ==========================================
   VIDEO COMPLETE
========================================== */

function showVideoComplete() {

    const complete =
        document.getElementById("videoComplete");

    complete.style.display = "block";

    complete.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function showSorry() {

    const sorry =
        document.getElementById("sorry");

    sorry.style.display = "flex";

    sorry.scrollIntoView({
        behavior: "smooth"
    });

}


/* ==========================================
   LETTER
========================================== */

function openLetter() {

    const modal =
        document.getElementById("letterModal");

    modal.style.display = "block";

    document.body.style.overflow = "hidden";

}


function closeLetter() {

    document.getElementById("letterModal")
        .style.display = "none";

    document.body.style.overflow = "auto";

}


/* ==========================================
   ESC KEY
========================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMemory();
        closeLetter();

    }

});