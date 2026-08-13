/* =========================================
   SAKSHI MEMORY WEBSITE
========================================= */


/* =========================================
   SETTINGS
========================================= */


/*
    PASSWORD

    Current password:
    skd
*/

const SECRET_PASSWORD = "skd";


/*
    YOUTUBE VIDEO

    Example:

    https://www.youtube.com/watch?v=ABC123

    Then:

    const YOUTUBE_VIDEO_ID = "ABC123";
*/

const YOUTUBE_VIDEO_ID = "YOUR_VIDEO_ID";


/*
    BACKGROUND AUDIO
*/

const BACKGROUND_AUDIO =
    "assets/audio/background.mp3";


/* =========================================
   MEMORY DATA
========================================= */

const memories = [

    {
        number: "01",

        title: "The beginning",

        image:
            "assets/images/memory1.jpg",

        audio:
            "assets/audio/memory1.mp3",

        text:
`I still remember the little things about the beginning.

Maybe at that time I didn't realise how important those moments would become.

But now, whenever I think about them, they bring a smile to my face.

Some beginnings quietly become the most beautiful parts of our story.`
    },


    {
        number: "02",

        title: "A beautiful day",

        image:
            "assets/images/memory2.jpg",

        audio:
            "assets/audio/memory2.mp3",

        text:
`There are some days that look completely normal while they are happening.

And then later, you realise that those were the days you never wanted to forget.

This is one of those days for me.

A simple memory, but one that means much more than it probably looks.`
    },


    {
        number: "03",

        title: "That smile",

        image:
            "assets/images/memory3.jpg",

        audio:
            "assets/audio/memory3.mp3",

        text:
`Your smile has always had this strange little effect on me.

Even on days when everything feels heavy, seeing you happy somehow makes everything feel lighter.

I don't know if I ever told you this properly.

But your smile is genuinely one of my favourite things.`
    },


    {
        number: "04",

        title: "The little things",

        image:
            "assets/images/memory4.jpg",

        audio:
            "assets/audio/memory4.mp3",

        text:
`It was never only about the big moments.

It was the random conversations.

The silly jokes.

The little fights.

The tiny things that probably seemed unimportant at the time.

Those are the things that became memories for me.`
    },


    {
        number: "05",

        title: "My favourite moments",

        image:
            "assets/images/memory5.jpg",

        audio:
            "assets/audio/memory5.mp3",

        text:
`If I had to choose my favourite moments, I don't think I could choose just one.

There are too many small memories attached to you.

And maybe that's what makes them special.

They don't need to be perfect.

They just need to be ours.`
    },


    {
        number: "06",

        title: "Always you",

        image:
            "assets/images/memory6.jpg",

        audio:
            "assets/audio/memory6.mp3",

        text:
`And after everything...

When I look back at all these memories, there is one thing that remains the same.

You.

Maybe that's why I wanted to make this little website.

Not because a website can say everything.

But because I wanted to create a small place where these memories could stay.`
    }

];


/* =========================================
   SORRY LETTER
========================================= */

const sorryMessage =
`Sakshi,

I don't know if a website can really explain everything that is in my heart.

But I wanted to try.

I'm sorry for the things I did wrong.

I'm sorry for the moments where I could have understood you better.

I'm sorry for the times when my words or actions hurt you.

I know that saying sorry doesn't magically fix everything.

And I'm not making this website because I expect anything from you.

I just wanted you to know that I genuinely care.

You have been a very important part of my life.

And no matter how many memories we make, some moments will always remain special to me.

I hope when you look at this, you remember not just the difficult moments...

but also the smiles, the laughter, the little things and everything beautiful that existed between us.

I'm really sorry.

And thank you for being a beautiful part of my story. ❤️`;


/* =========================================
   ELEMENTS
========================================= */

const introScreen =
    document.getElementById(
        "introScreen"
    );

const mainWebsite =
    document.getElementById(
        "mainWebsite"
    );

const introTitle =
    document.getElementById(
        "introTitle"
    );

const introText =
    document.getElementById(
        "introText"
    );

const startBtn =
    document.getElementById(
        "startBtn"
    );

const heartsContainer =
    document.getElementById(
        "heartsContainer"
    );


/* PASSWORD */

const passwordScreen =
    document.getElementById(
        "passwordScreen"
    );

const passwordInput =
    document.getElementById(
        "passwordInput"
    );

const passwordButton =
    document.getElementById(
        "passwordButton"
    );

const passwordError =
    document.getElementById(
        "passwordError"
    );


/* MODAL */

const memoryModal =
    document.getElementById(
        "memoryModal"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

const modalImage =
    document.getElementById(
        "modalImage"
    );

const modalNumber =
    document.getElementById(
        "modalNumber"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalText =
    document.getElementById(
        "modalText"
    );

const prevMemory =
    document.getElementById(
        "prevMemory"
    );

const nextMemory =
    document.getElementById(
        "nextMemory"
    );

const memoryCounter =
    document.getElementById(
        "memoryCounter"
    );


/* AUDIO */

const audioButton =
    document.getElementById(
        "audioButton"
    );

const audioProgress =
    document.getElementById(
        "audioProgress"
    );

const backgroundAudio =
    document.getElementById(
        "backgroundAudio"
    );


/* VIDEO */

const youtubeVideo =
    document.getElementById(
        "youtubeVideo"
    );

const videoPlaceholder =
    document.getElementById(
        "videoPlaceholder"
    );


/* SORRY */

const sorrySection =
    document.getElementById(
        "sorrySection"
    );

const sorryLock =
    document.getElementById(
        "sorryLock"
    );

const sorryContent =
    document.getElementById(
        "sorryContent"
    );

const sorryLetter =
    document.getElementById(
        "sorryLetter"
    );


/* =========================================
   VARIABLES
========================================= */

let currentMemory = 0;

let currentAudio = null;

let typewriterTimer = null;

let youtubePlayer = null;


/* =========================================
   TYPEWRITER
========================================= */

function typeWriter(
    element,
    text,
    speed = 35
) {

    clearInterval(
        typewriterTimer
    );

    element.textContent = "";

    let index = 0;

    typewriterTimer =
        setInterval(
            () => {

                if (
                    index >=
                    text.length
                ) {

                    clearInterval(
                        typewriterTimer
                    );

                    return;
                }

                element.textContent +=
                    text[index];

                index++;

            },
            speed
        );
}


/* =========================================
   INTRO
========================================= */

typeWriter(
    introTitle,
    "For Sakshi ❤️",
    120
);

setTimeout(
    () => {

        typeWriter(
            introText,

            "I made a little place for all the memories, feelings and things I could never properly put into words.",

            35
        );

    },
    1600
);


/* =========================================
   INTRO → PASSWORD
========================================= */

startBtn.addEventListener(
    "click",
    () => {

        introScreen.style.opacity =
            "0";

        introScreen.style.transform =
            "scale(1.05)";

        setTimeout(
            () => {

                introScreen.classList.add(
                    "hidden"
                );

                passwordScreen.classList.remove(
                    "hidden"
                );

                passwordInput.focus();

            },
            900
        );

    }
);


/* =========================================
   PASSWORD
========================================= */

passwordButton.addEventListener(
    "click",
    checkPassword
);


passwordInput.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter"
        ) {

            checkPassword();

        }

    }
);


function checkPassword() {

    const enteredPassword =
        passwordInput.value
            .trim()
            .toLowerCase();


    if (
        enteredPassword ===
        SECRET_PASSWORD
    ) {

        passwordError.style.display =
            "none";

        passwordScreen.classList.add(
            "leaving"
        );


        setTimeout(
            () => {

                passwordScreen.classList.add(
                    "hidden"
                );

                mainWebsite.classList.remove(
                    "hidden"
                );

                window.scrollTo(
                    0,
                    0
                );


                startBackgroundAudio();

                createHearts();

                setupScrollAnimations();


                console.log(
                    "❤️ Welcome to Sakshi's world."
                );

            },
            900
        );

    }

    else {

        passwordError.style.display =
            "block";

        passwordInput.value = "";

        passwordInput.focus();


        const card =
            document.querySelector(
                ".password-card"
            );


        card.classList.remove(
            "password-shake"
        );


        void card.offsetWidth;


        card.classList.add(
            "password-shake"
        );

    }

}


/* =========================================
   BACKGROUND AUDIO
========================================= */

function startBackgroundAudio() {

    backgroundAudio.src =
        BACKGROUND_AUDIO;

    backgroundAudio.volume =
        0.18;


    backgroundAudio
        .play()
        .catch(
            () => {

                console.log(
                    "Background audio waiting for interaction."
                );

            }
        );

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );

    heart.className =
        "floating-heart";

    heart.textContent =
        Math.random() > .5
            ? "♡"
            : "♥";


    heart.style.left =
        Math.random() * 100 +
        "%";


    heart.style.fontSize =
        (
            12 +
            Math.random() * 18
        ) +
        "px";


    heart.style.animationDuration =
        (
            7 +
            Math.random() * 8
        ) +
        "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(
        () => {

            heart.remove();

        },
        16000
    );

}


function createHearts() {

    setInterval(
        createHeart,
        1200
    );

}


/* =========================================
   MEMORY CARDS
========================================= */

const memoryCards =
    document.querySelectorAll(
        ".memory-card"
    );


memoryCards.forEach(
    (card) => {

        card.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        card.dataset.memory
                    );

                openMemory(index);

            }
        );

    }
);


/* =========================================
   OPEN MEMORY
========================================= */

function openMemory(index) {

    currentMemory =
        index;


    const memory =
        memories[index];


    modalNumber.textContent =
        memory.number;


    modalTitle.textContent =
        memory.title;


    modalImage.style.opacity =
        "0";


    setTimeout(
        () => {

            modalImage.src =
                memory.image;

            modalImage.style.opacity =
                "1";

        },
        200
    );


    memoryCounter.textContent =
        `${index + 1} / ${memories.length}`;


    memoryModal.classList.add(
        "open"
    );


    document.body.style.overflow =
        "hidden";


    typeWriter(
        modalText,
        memory.text,
        28
    );


    loadMemoryAudio(
        memory.audio
    );

}


/* =========================================
   CLOSE MEMORY
========================================= */

function closeMemory() {

    memoryModal.classList.remove(
        "open"
    );

    document.body.style.overflow =
        "";

    stopMemoryAudio();

}


closeModal.addEventListener(
    "click",
    closeMemory
);


document
    .querySelector(
        ".modal-backdrop"
    )
    .addEventListener(
        "click",
        closeMemory
    );


/* =========================================
   NEXT / PREVIOUS
========================================= */

nextMemory.addEventListener(
    "click",
    () => {

        currentMemory++;

        if (
            currentMemory >=
            memories.length
        ) {

            currentMemory = 0;

        }

        openMemory(
            currentMemory
        );

    }
);


prevMemory.addEventListener(
    "click",
    () => {

        currentMemory--;

        if (
            currentMemory < 0
        ) {

            currentMemory =
                memories.length - 1;

        }

        openMemory(
            currentMemory
        );

    }
);


/* =========================================
   KEYBOARD
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !memoryModal.classList.contains(
                "open"
            )
        ) {

            return;

        }


        if (
            event.key ===
            "Escape"
        ) {

            closeMemory();

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            nextMemory.click();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            prevMemory.click();

        }

    }
);


/* =========================================
   MEMORY AUDIO
========================================= */

function loadMemoryAudio(
    audioPath
) {

    stopMemoryAudio();


    currentAudio =
        new Audio(audioPath);


    currentAudio.volume =
        0.65;


    currentAudio.addEventListener(
        "timeupdate",
        updateAudioProgress
    );


    currentAudio.addEventListener(
        "ended",
        () => {

            audioButton.textContent =
                "▶";

            audioProgress.style.width =
                "0%";

        }
    );


    /*
        Try autoplay.

        Browser may allow it because
        user just clicked the memory.
    */

    currentAudio
        .play()
        .then(
            () => {

                audioButton.textContent =
                    "❚❚";

            }
        )
        .catch(
            () => {

                audioButton.textContent =
                    "▶";

            }
        );

}


function stopMemoryAudio() {

    if (
        !currentAudio
    ) {

        return;

    }


    currentAudio.pause();

    currentAudio.currentTime =
        0;

    currentAudio = null;

    audioButton.textContent =
        "▶";

    audioProgress.style.width =
        "0%";

}


function updateAudioProgress() {

    if (
        !currentAudio ||
        !currentAudio.duration
    ) {

        return;

    }


    const percentage =
        (
            currentAudio.currentTime /
            currentAudio.duration
        ) * 100;


    audioProgress.style.width =
        percentage + "%";

}


audioButton.addEventListener(
    "click",
    () => {

        if (
            !currentAudio
        ) {

            return;

        }


        if (
            currentAudio.paused
        ) {

            currentAudio
                .play()
                .then(
                    () => {

                        audioButton.textContent =
                            "❚❚";

                    }
                );

        }

        else {

            currentAudio.pause();

            audioButton.textContent =
                "▶";

        }

    }
);


/* =========================================
   SCROLL ANIMATIONS
========================================= */

function setupScrollAnimations() {

    const cards =
        document.querySelectorAll(
            ".memory-card"
        );


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .15
            }
        );


    cards.forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * .1}s`;

            observer.observe(
                card
            );

        }
    );

}


/* =========================================
   YOUTUBE
========================================= */

function setupYouTubeVideo() {

    if (
        !YOUTUBE_VIDEO_ID ||
        YOUTUBE_VIDEO_ID ===
            "YOUR_VIDEO_ID"
    ) {

        return;

    }


    youtubeVideo.src =
        "https://www.youtube.com/embed/" +
        YOUTUBE_VIDEO_ID +
        "?enablejsapi=1&rel=0&modestbranding=1";


    youtubeVideo.classList.add(
        "active"
    );


    videoPlaceholder.style.display =
        "none";

}


setupYouTubeVideo();


/* =========================================
   YOUTUBE API
========================================= */

if (
    YOUTUBE_VIDEO_ID &&
    YOUTUBE_VIDEO_ID !==
        "YOUR_VIDEO_ID"
) {

    const youtubeScript =
        document.createElement(
            "script"
        );

    youtubeScript.src =
        "https://www.youtube.com/iframe_api";

    document.head.appendChild(
        youtubeScript
    );

}


window.onYouTubeIframeAPIReady =
    function () {

        youtubePlayer =
            new YT.Player(
                "youtubeVideo",
                {

                    events: {

                        onStateChange:
                            handleVideoState

                    }

                }
            );

    };


function handleVideoState(
    event
) {

    if (
        event.data ===
        YT.PlayerState.ENDED
    ) {

        unlockSorrySection();

    }

}


/* =========================================
   UNLOCK SORRY
========================================= */

function unlockSorrySection() {

    sorryLock.classList.add(
        "hidden-lock"
    );


    setTimeout(
        () => {

            sorryContent.classList.add(
                "show"
            );


            sorrySection.classList.remove(
                "locked"
            );


            typeWriter(
                sorryLetter,
                sorryMessage,
                25
            );


            setTimeout(
                () => {

                    sorrySection.scrollIntoView(
                        {
                            behavior:
                                "smooth"
                        }
                    );

                },
                500
            );

        },
        700
    );

}


/* =========================================
   IMAGE FALLBACK
========================================= */

document
    .querySelectorAll(
        ".memory-image img"
    )
    .forEach(
        (img) => {

            img.addEventListener(
                "error",
                () => {

                    img.style.display =
                        "none";

                }
            );

        }
    );


/* =========================================
   PAGE VISIBILITY
========================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden &&
            currentAudio
        ) {

            currentAudio.pause();

            audioButton.textContent =
                "▶";

        }

    }
);


/* =========================================
   CONSOLE
========================================= */

console.log(
    "❤️ Sakshi Memory Website loaded successfully."
);