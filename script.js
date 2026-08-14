/* =========================================================
   SAKSHI MEMORY WEBSITE
   NEW FIXED JAVASCRIPT
========================================================= */


/* =========================================================
   SETTINGS
========================================================= */

const CORRECT_PASSWORD = "skd";

/*
   Yahan apna YouTube VIDEO ID daalna.
   Example:
   https://www.youtube.com/watch?v=ABC123
   ID = ABC123
*/
const YOUTUBE_VIDEO_ID = "1JjAZC8muqU";



(function hideOverlaysInitially() {

    const ids = [
        "birthdayOverlay"
    ];

    ids.forEach(function (id) {

        const el =
            document.getElementById(id);

        if (el) {

            el.style.display =
                "none";

        }

    });

})();


/* =========================================================
   SAFE CLARITY
========================================================= */

function clarityEvent(eventName) {

    try {

        if (
            typeof window.clarity === "function"
        ) {

            window.clarity(
                "event",
                eventName
            );

        }

    } catch (error) {

        console.log(
            "Clarity skipped:",
            eventName
        );

    }

}


/* =========================================================
   ELEMENTS
========================================================= */

const landingPage =
    document.getElementById(
        "landingPage"
    );


const passwordPage =
    document.getElementById(
        "passwordPage"
    );


const mainWebsite =
    document.getElementById(
        "mainWebsite"
    );


const enterButton =
    document.getElementById(
        "enterButton"
    );


const passwordInput =
    document.getElementById(
        "passwordInput"
    );


const unlockButton =
    document.getElementById(
        "unlockButton"
    );


const showPassword =
    document.getElementById(
        "showPassword"
    );


const passwordError =
    document.getElementById(
        "passwordError"
    );


const passwordCard =
    document.getElementById(
        "passwordCard"
    );


/* =========================================================
   MEMORY MODAL
========================================================= */

const memoryModal =
    document.getElementById(
        "memoryModal"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const modalMessage =
    document.getElementById(
        "modalMessage"
    );


const closeModalButton =
    document.getElementById(
        "closeModal"
    );


const modalBackdrop =
    document.getElementById(
        "modalBackdrop"
    );


const audioStatus =
    document.getElementById(
        "audioStatus"
    );


/* =========================================================
   VIDEO
========================================================= */

const youtubePlayerContainer =
    document.getElementById(
        "youtubePlayer"
    );


const videoFallback =
    document.getElementById(
        "videoFallback"
    );


const playVideoButton =
    document.getElementById(
        "playVideoButton"
    );


const videoProgress =
    document.getElementById(
        "videoProgress"
    );


const videoProgressText =
    document.getElementById(
        "videoProgressText"
    );


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let currentAudio = null;

let currentMemory = null;

let youtubePlayer = null;

let videoTrackingTimer = null;

let videoStarted = false;

let videoCompleted = false;

let videoWatchSeconds = 0;

let sorryShown = false;

let birthdayActive = false;

let birthdayCurrent = 0;

let birthdayVideo = null;

let birthdayTypingTimer = null;

let birthdayTitleTypingTimer = null;


/* =========================================================
   MEMORY DATA
========================================================= */

const memoryData = {

    "memory-black.jpeg": {

        message:
            "yeah mere liye woh h jo main mitta ke bhi nhi mitta skta apne dil or dimaag se iss din app kya lag rahe maine kabhi nhi socha tha ki mere ko koi ladki western main itni jyada khubsurat lagegi",

        audio:
            "audio/memory-black.mp3"

    },


    "memory-blue.jpeg": {

        message:
            "yeah din mere liya kajari day h iss din main shyd jitna apne birthday per khush nhi rehta tha utna uss din khush tha mere ko haar ek pal tumhare sath jeena tha haar ek time tumhare liye jeena tha kyunki woh mere life ka bahut bada din tha",

        audio:
            "audio/memory-blue.mp3"

    },


    "memory-funny.jpeg": {

        message:
            "And then there are these moments.. hmm baar baar jhagad rahe the but phir app aise cute si chizen kar dete mera poora dimaag bass app per laga rehta main sirf phir apkko hi dekhne main lag jaata main ajj bhi sirf yahi dekhna pasand karta hoon",

        audio:
            "audio/memory-funny.mp3"

    },


    "memory-green.jpeg": {

        message:
            "yeah shyd woh tha jis din app jabardasti mujhe le gaye shoppeing mera koi interest nhi tha but phir maine apke lye yeah dekha pasand karra and apne jab pahena main phir poore din tumhe issme imagine karne laaga",

        audio:
            "audio/memory-green.mp3"

    },


    "memory-laugh.jpeg": {

        message:
            "Yeah app pheli holi ke baad aaye lko aaye or main or app ghum rahe the this smile i still remeber it clearly and adore this very much like and kya smile h isme yaar koi dekhe toh sirf dekhta reh jaaye",

        audio:
            "audio/memory-laugh.mp3"

    },


    "memory-maroon.jpeg": {

        message:
            "mere ko toh pata tha ki app indian main pyaare lagte ho jab lekin apne yeah bheja mere ko toh mere ko yakin ho gaya tha ki hongi hoor or pariyan iss jahan main per mere liye sab app hi ho",

        audio:
            "audio/memory-maroon.mp3"

    },


    "memory-purple.jpeg": {

        message:
            "the favourite place jahan baith ke hmne appne sare matter solve kiya kabhi app gussa hua toh kabhi main orr yahan sab solve ho jaaata pata nhi kyun but ho hi jaata tha",

        audio:
            "audio/memory-purple.mp3"

    },


    "memory-road.jpeg": {

        message:
            "Maybe it's not about where we were... maybe it's about who I was with your cute walk and way of talking main hmesha se shyd issi se pyaar karne ke liye baana tha or shyd main woh pal jee bhi raha tha uss time.",

        audio:
            "audio/memory-road.mp3"

    },


    "memory-white.jpeg": {

        message:
            "our lunch place jahan main kabhi bhaaga tha apke picche toh jahan kabhi main apke sath baith ke khaana khya tha i cheerish those moments still in my life like it was yesterday.",

        audio:
            "audio/memory-white.mp3"

    }

};


/* =========================================================
   TRACKING
========================================================= */

const trackingKey =
    "sakshi_memory_tracking";


function getTrackingData() {

    try {

        const saved =
            localStorage.getItem(
                trackingKey
            );


        if (saved) {

            return JSON.parse(
                saved
            );

        }

    } catch (error) {

        console.log(
            "Tracking read error:",
            error
        );

    }


    return {

        firstVisit:
            new Date().toISOString(),

        lastVisit:
            new Date().toISOString(),

        visitCount:
            0,

        pagesSeen: {},

        memoriesOpened: {},

        memoryOpenCount: 0,

        audioPlayed: {},

        videoStarted: false,

        videoCompleted: false,

        videoWatchSeconds: 0,

        videoDuration: 0,

        videoHighestPercent: 0,

        birthdayStarted: false,

        birthdayCompleted: false

    };

}


let tracking =
    getTrackingData();


function saveTracking() {

    try {

        localStorage.setItem(

            trackingKey,

            JSON.stringify(
                tracking
            )

        );

    } catch (error) {

        console.log(
            "Tracking save error:",
            error
        );

    }

}


/* =========================================================
   VISIT COUNT
========================================================= */

tracking.visitCount =
    (tracking.visitCount || 0) + 1;


tracking.lastVisit =
    new Date().toISOString();


saveTracking();


/* =========================================================
   LANDING → PASSWORD
========================================================= */

function showPasswordPage() {

    if (!landingPage) {

        return;

    }


    landingPage.classList.add(
        "hidden"
    );


    if (passwordPage) {

        passwordPage.classList.remove(
            "hidden"
        );

    }


    clarityEvent(
        "password_page_opened"
    );

}


/* =========================================================
   PASSWORD CHECK
========================================================= */

function unlockWebsite() {

    if (!passwordInput) {

        return;

    }


    const enteredPassword =
        passwordInput.value
            .trim()
            .toLowerCase();


    /*
       skd / SKD / SkD / sKd
       sab accept honge.
    */

    if (
        enteredPassword ===
        CORRECT_PASSWORD
    ) {

        if (passwordError) {

            passwordError.textContent =
                "";

        }


        if (passwordPage) {

            passwordPage.classList.add(
                "hidden"
            );

        }


        if (mainWebsite) {

            mainWebsite.classList.remove(
                "hidden"
            );

        }


        document.body.classList.add(
            "website-open"
        );


        tracking.passwordCorrect =
            true;


        tracking.passwordEnteredAt =
            new Date()
            .toISOString();


        saveTracking();


        clarityEvent(
            "password_correct"
        );


        startMainWebsite();


        return;

    }


    /*
       Wrong password
    */

    if (passwordError) {

        passwordError.textContent =
            "Hmm… ye password nahi hai ❤️";

    }


    if (passwordCard) {

        passwordCard.classList.remove(
            "shake"
        );


        void passwordCard.offsetWidth;


        passwordCard.classList.add(
            "shake"
        );

    }


    tracking.passwordWrongAttempts =
        (
            tracking.passwordWrongAttempts ||
            0
        ) + 1;


    saveTracking();


    clarityEvent(
        "password_wrong"
    );

}


/* =========================================================
   PASSWORD EVENTS
========================================================= */

if (enterButton) {

    enterButton.addEventListener(
        "click",
        showPasswordPage
    );

}


if (unlockButton) {

    unlockButton.addEventListener(
        "click",
        unlockWebsite
    );

}


if (passwordInput) {

    passwordInput.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                unlockWebsite();

            }

        }
    );

}


/* =========================================================
   SHOW / HIDE PASSWORD
========================================================= */

if (showPassword) {

    showPassword.addEventListener(
        "change",
        function () {

            if (!passwordInput) {

                return;

            }


            passwordInput.type =
                this.checked
                    ? "text"
                    : "password";

        }
    );

}/* =========================================================
   MAIN WEBSITE START
========================================================= */

function startMainWebsite() {

    document.body.classList.add(
        "website-open"
    );


    createFloatingHearts();


    setupMemoryCards();


    setupMemoryModal();


    setupPhotoVisibility();


    setupSectionTracking();


    setupVideo();


    setupVideoVisibilityTracking();


    setupVideoSectionTimer();


    setupScrollTracking();


    clarityEvent(
        "main_website_opened"
    );


    tracking.mainWebsiteOpened =
        true;


    tracking.mainWebsiteOpenedAt =
        new Date()
        .toISOString();


    saveTracking();

}


/* =========================================================
   MEMORY CARDS
========================================================= */

function setupMemoryCards() {

    const cards =
        document.querySelectorAll(
            ".memory-card"
        );


    console.log(
        "Memory cards found:",
        cards.length
    );


    cards.forEach(
        function (card) {

            if (
                card.dataset.memoryReady ===
                "true"
            ) {

                return;

            }


            card.dataset.memoryReady =
                "true";


            const filename =
                card.dataset.memory;


            if (!filename) {

                return;

            }


            card.style.cursor =
                "pointer";


            card.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    event.stopPropagation();


                    openMemory(
                        filename
                    );

                }
            );

        }
    );

}


/* =========================================================
   OPEN MEMORY
========================================================= */

function openMemory(filename) {

    console.log(
        "Opening memory:",
        filename
    );


    const memory =
        memoryData[filename];


    if (!memory) {

        console.error(
            "Memory not found:",
            filename
        );

        return;

    }


    const modal =
        document.getElementById(
            "memoryModal"
        );


    const image =
        document.getElementById(
            "modalImage"
        );


    const message =
        document.getElementById(
            "modalMessage"
        );


    const status =
        document.getElementById(
            "audioStatus"
        );


    if (!modal) {

        console.error(
            "memoryModal not found"
        );

        return;

    }


    if (!message) {

        console.error(
            "modalMessage not found"
        );

        return;

    }


    currentMemory =
        filename;


    /* =====================================================
       TRACKING
    ===================================================== */

    if (
        !tracking.memoriesOpened
    ) {

        tracking.memoriesOpened =
            {};

    }


    tracking.memoriesOpened[
        filename
    ] =
        (
            tracking.memoriesOpened[
                filename
            ] || 0
        ) + 1;


    tracking.memoryOpenCount =
        (
            tracking.memoryOpenCount ||
            0
        ) + 1;


    saveTracking();


    /* =====================================================
       IMAGE
    ===================================================== */

    if (image) {

        image.src =
            filename;


        image.alt =
            "Memory";

    }


    /* =====================================================
       STOP PREVIOUS AUDIO
    ===================================================== */

    stopMemoryAudio();


    /* =====================================================
       OPEN MODAL
    ===================================================== */

    modal.classList.remove(
        "hidden"
    );


    modal.classList.add(
        "active"
    );


    modal.style.opacity =
        "1";


    modal.style.visibility =
        "visible";


    modal.style.pointerEvents =
        "auto";


    document.body.style.overflow =
        "hidden";


    /* =====================================================
       MESSAGE
    ===================================================== */

    message.textContent =
        "";


    /* =====================================================
       TYPEWRITER
    ===================================================== */

    let position =
        0;


    const text =
        memory.message;


    function typeMessage() {

        if (
            currentMemory !==
            filename
        ) {

            return;

        }


        if (
            position >=
            text.length
        ) {

            return;

        }


        message.textContent +=
            text.charAt(
                position
            );


        position++;


        setTimeout(
            typeMessage,
            12
        );

    }


    typeMessage();


    /* =====================================================
       AUDIO
    ===================================================== */

    if (memory.audio) {

        playMemoryAudio(
            memory.audio
        );

    } else if (status) {

        status.textContent =
            "";

    }


    clarityEvent(
        "memory_opened"
    );


    console.log(
        "Memory opened ❤️"
    );

}


/* =========================================================
   CLOSE MEMORY
========================================================= */

function closeMemory() {

    const modal =
        document.getElementById(
            "memoryModal"
        );


    stopMemoryAudio();


    if (modal) {

        modal.classList.remove(
            "active"
        );


        modal.classList.add(
            "hidden"
        );


        modal.style.opacity =
            "0";


        modal.style.visibility =
            "hidden";


        modal.style.pointerEvents =
            "none";

    }


    document.body.style.overflow =
        "";


    currentMemory =
        null;

}


/* =========================================================
   MEMORY MODAL EVENTS
========================================================= */

function setupMemoryModal() {

    const closeButton =
        document.getElementById(
            "closeModal"
        );


    const backdrop =
        document.getElementById(
            "modalBackdrop"
        );


    if (closeButton) {

        closeButton.onclick =
            function (event) {

                event.preventDefault();

                event.stopPropagation();


                closeMemory();

            };

    }


    if (backdrop) {

        backdrop.onclick =
            function () {

                closeMemory();

            };

    }

}


/* =========================================================
   ESC → CLOSE MODAL
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        const modal =
            document.getElementById(
                "memoryModal"
            );


        if (
            modal &&
            modal.classList.contains(
                "active"
            )
        ) {

            closeMemory();

        }

    }
);


/* =========================================================
   MEMORY AUDIO
========================================================= */

function playMemoryAudio(
    audioFile
) {

    if (!audioFile) {

        return;

    }


    let audio =
        document.getElementById(
            "memoryAudio"
        );


    if (!audio) {

        audio =
            document.createElement(
                "audio"
            );


        audio.id =
            "memoryAudio";


        audio.preload =
            "auto";


        document.body.appendChild(
            audio
        );

    }


    audio.pause();


    audio.currentTime =
        0;


    audio.src =
        audioFile;


    currentAudio =
        audio;


    audio.play()
        .then(
            function () {

                const status =
                    document.getElementById(
                        "audioStatus"
                    );


                if (status) {

                    status.textContent =
                        "♪ playing...";

                }

            }
        )
        .catch(
            function () {

                const status =
                    document.getElementById(
                        "audioStatus"
                    );


                if (status) {

                    status.textContent =
                        "♪ tap to play";

                }

            }
        );


    audio.onended =
        function () {

            const status =
                document.getElementById(
                    "audioStatus"
                );


            if (status) {

                status.textContent =
                    "♪ memory ended";

            }

        };

}


/* =========================================================
   STOP MEMORY AUDIO
========================================================= */

function stopMemoryAudio() {

    if (!currentAudio) {

        return;

    }


    try {

        currentAudio.pause();


        currentAudio.currentTime =
            0;

    } catch (error) {

        console.log(
            "Audio stop error:",
            error
        );

    }


    currentAudio =
        null;


    const status =
        document.getElementById(
            "audioStatus"
        );


    if (status) {

        status.textContent =
            "";

    }

}


/* =========================================================
   FLOATING HEARTS
========================================================= */

function createFloatingHearts() {

    if (
        document.querySelector(
            ".floating-hearts"
        )
    ) {

        return;

    }


    const container =
        document.createElement(
            "div"
        );


    container.className =
        "floating-hearts";


    for (
        let i = 0;
        i < 14;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "floating-heart";


        heart.textContent =
            "♥";


        heart.style.left =
            (
                Math.random() *
                100
            ) +
            "%";


        heart.style.animationDelay =
            (
                Math.random() *
                8
            ) +
            "s";


        heart.style.animationDuration =
            (
                8 +
                Math.random() * 7
            ) +
            "s";


        heart.style.fontSize =
            (
                10 +
                Math.random() * 15
            ) +
            "px";


        container.appendChild(
            heart
        );

    }


    document.body.appendChild(
        container
    );

}
/* =========================================================
   PHOTO VISIBILITY
========================================================= */

function setupPhotoVisibility() {

    const images =
        document.querySelectorAll(
            ".memory-card img"
        );


    if (!images.length) {

        return;

    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const image =
                            entry.target;


                        const filename =
                            image
                                .closest(
                                    ".memory-card"
                                )
                                ?.dataset
                                .memory;


                        if (!filename) {

                            return;

                        }


                        tracking[
                            "viewed_" +
                            filename
                        ] =
                            new Date()
                            .toISOString();


                        saveTracking();

                    }
                );

            },
            {
                threshold: 0.5
            }
        );


    images.forEach(
        function (image) {

            observer.observe(
                image
            );

        }
    );

}


/* =========================================================
   SECTION TRACKING
========================================================= */

function setupSectionTracking() {

    const sections =
        document.querySelectorAll(
            "section[data-section]"
        );


    if (!sections.length) {

        return;

    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const name =
                            entry.target.dataset
                                .section;


                        if (!name) {

                            return;

                        }


                        tracking.pagesSeen[
                            name
                        ] = {

                            openedAt:
                                new Date()
                                .toISOString(),

                            visible:
                                true

                        };


                        saveTracking();


                        clarityEvent(
                            "section_" +
                            name
                        );

                    }
                );

            },
            {
                threshold: 0.3
            }
        );


    sections.forEach(
        function (section) {

            observer.observe(
                section
            );

        }
    );

}


/* =========================================================
   SCROLL TRACKING
========================================================= */

function setupScrollTracking() {

    let maximum =
        0;


    window.addEventListener(
        "scroll",
        function () {

            const scrollTop =
                window.scrollY;


            const total =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;


            if (
                total <= 0
            ) {

                return;

            }


            const percentage =
                Math.round(
                    (
                        scrollTop /
                        total
                    ) * 100
                );


            if (
                percentage >
                maximum
            ) {

                maximum =
                    percentage;

            }


            tracking.maxScroll =
                maximum;


            [25, 50, 75, 90, 100]
                .forEach(
                    function (mark) {

                        if (
                            percentage >=
                            mark &&
                            !tracking[
                                "scroll_" +
                                mark
                            ]
                        ) {

                            tracking[
                                "scroll_" +
                                mark
                            ] =
                                new Date()
                                .toISOString();

                            saveTracking();

                        }

                    }
                );

        },
        {
            passive: true
        }
    );

}
/* =========================================================
   YOUTUBE API
========================================================= */

function loadYouTubeAPI() {

    if (
        document.getElementById(
            "youtube-api-script"
        )
    ) {

        return;

    }


    const script =
        document.createElement(
            "script"
        );


    script.id =
        "youtube-api-script";


    script.src =
        "https://www.youtube.com/iframe_api";


    document.head.appendChild(
        script
    );

}


/* =========================================================
   YOUTUBE API CALLBACK
========================================================= */

let youtubeAPIReady = false;

window.onYouTubeIframeAPIReady =
    function () {

        console.log(
            "YouTube API ready"
        );

        youtubeAPIReady = true;

        if (
            document.body.classList.contains(
                "website-open"
            )
        ) {

            createYouTubePlayer();

        }

    };


/* =========================================================
   CREATE YOUTUBE PLAYER
========================================================= */

function createYouTubePlayer() {

    if (!youtubePlayerContainer) {

        console.warn(
            "youtubePlayer container not found"
        );

        return;

    }


    if (
        !YOUTUBE_VIDEO_ID ||
        YOUTUBE_VIDEO_ID ===
        "YOUR_VIDEO_ID"
    ) {

        console.warn(
            "YouTube video ID not configured"
        );


        if (videoFallback) {

            videoFallback.classList.remove(
                "hidden"
            );

        }


        return;

    }


    if (
        typeof YT ===
        "undefined" ||
        !YT.Player
    ) {

        console.log(
            "Waiting for YouTube API..."
        );

        return;

    }


    /*
       Prevent duplicate player
    */

    if (youtubePlayer) {

        return;

    }


    try {

        youtubePlayer =
            new YT.Player(
                youtubePlayerContainer,
                {

                    videoId:
                        YOUTUBE_VIDEO_ID,

                    playerVars: {

                        autoplay: 0,

                        controls: 1,

                        rel: 0,

                        modestbranding: 1,

                        playsinline: 1

                    },

                    events: {

                        onReady:
                            onYouTubeReady,

                        onStateChange:
                            onYouTubeStateChange,

                        onError:
                            onYouTubeError

                    }

                }
            );


    } catch (error) {

        console.error(
            "YouTube player error:",
            error
        );

    }

}


/* =========================================================
   YOUTUBE READY
========================================================= */

function onYouTubeReady(event) {

    console.log(
        "YouTube player ready ❤️"
    );


    if (videoFallback) {

        videoFallback.classList.add(
            "hidden"
        );

    }


    try {

        const duration =
            event.target.getDuration();


        if (
            duration &&
            duration > 0
        ) {

            tracking.videoDuration =
                duration;

            saveTracking();

        }

    } catch (error) {

        console.log(
            "Duration unavailable"
        );

    }


    /*
       Try autoplay
    */

    try {

        event.target.playVideo();

    } catch (error) {

        console.log(
            "Autoplay could not start:",
            error
        );

    }


    clarityEvent(
        "youtube_ready"
    );

}


/* =========================================================
   YOUTUBE STATE CHANGE
========================================================= */

function onYouTubeStateChange(
    event
) {

    if (
        typeof YT ===
        "undefined"
    ) {

        return;

    }


    /*
       PLAYING
    */

    if (
        event.data ===
        YT.PlayerState.PLAYING
    ) {

        handleVideoStarted();

    }


    /*
       PAUSED
    */

    if (
        event.data ===
        YT.PlayerState.PAUSED
    ) {

        handleVideoPaused();

    }


    /*
       ENDED
    */

    if (
        event.data ===
        YT.PlayerState.ENDED
    ) {

        handleVideoEnded();

    }


    /*
       BUFFERING
    */

    if (
        event.data ===
        YT.PlayerState.BUFFERING
    ) {

        console.log(
            "Video buffering..."
        );

    }

}


/* =========================================================
   YOUTUBE ERROR
========================================================= */

function onYouTubeError(event) {

    console.error(
        "❌ YouTube error:",
        event.data
    );


    tracking.youtubeError =
        event.data;


    saveTracking();


    clarityEvent(
        "youtube_error"
    );

}

/* =========================================================
   VIDEO STARTED
========================================================= */

function handleVideoStarted() {

    if (
        !videoStarted
    ) {

        videoStarted =
            true;


        tracking.videoStarted =
            true;


        tracking.videoStartedAt =
            new Date()
            .toISOString();


        saveTracking();


        clarityEvent(
            "video_started"
        );


        console.log(
            "🎥 Video started"
        );

    }


    startVideoTrackingTimer();

}


/* =========================================================
   VIDEO PAUSED
========================================================= */

/* =========================================================
   VIDEO PAUSED
   PAUSE = DO NOTHING
========================================================= */

function handleVideoPaused() {

    stopVideoTrackingTimer();


    tracking.videoLastPausedAt =
        new Date()
        .toISOString();


    saveTracking();


    clarityEvent(
        "video_paused"
    );


    console.log(
        "⏸️ Video paused — waiting for resume"
    );

}

/* =========================================================
   VIDEO ENDED
========================================================= */

/* =========================================================
   VIDEO ENDED
========================================================= */

function handleVideoEnded() {

    stopVideoTrackingTimer();


    if (
        videoCompleted
    ) {

        return;

    }


    videoCompleted =
        true;


    tracking.videoCompleted =
        true;


    tracking.videoCompletedAt =
        new Date()
        .toISOString();


    tracking.videoHighestPercent =
        100;


    saveTracking();


    clarityEvent(
        "video_completed"
    );


    console.log(
        "🎥 Main YouTube video completed"
    );


    /*
       Show button.
       Do NOT start birthday automatically.
    */

    showVideoContinueButton();

}
/* =========================================================
   VIDEO CONTINUE BUTTON
========================================================= */

function showVideoContinueButton() {

    let screen =
        document.getElementById(
            "videoContinueScreen"
        );


    if (!screen) {

        screen =
            document.createElement(
                "div"
            );


        screen.id =
            "videoContinueScreen";


        screen.innerHTML = `

            <div class="video-continue-content">

                <div
                    class="video-continue-heart"
                >
                    ❤️
                </div>

                <p
                    class="video-continue-small"
                >
                    YOU'VE REACHED THE END
                </p>

                <h2>
                    There's something more
                    for you.
                </h2>

                <button
                    id="continueToBirthday"
                    type="button"
                >
                    Please click here ❤️
                </button>

            </div>

        `;


        document.body.appendChild(
            screen
        );


        addVideoContinueCSS();


        const button =
            document.getElementById(
                "continueToBirthday"
            );


        if (button) {

            button.addEventListener(
                "click",
                function () {

                    continueToBirthday();

                }
            );

        }

    }


    screen.classList.add(
        "active"
    );


    clarityEvent(
        "birthday_continue_button_shown"
    );

}
/* =========================================================
   CONTINUE TO BIRTHDAY
========================================================= */

function continueToBirthday() {

    const screen =
        document.getElementById(
            "videoContinueScreen"
        );


    if (screen) {

        screen.classList.remove(
            "active"
        );

    }


    document.body.style.overflow =
        "hidden";


    clarityEvent(
        "birthday_continue_clicked"
    );


    /*
       Small cinematic pause
    */

    setTimeout(
        function () {

            startBirthdayExperience();

        },
        900
    );

}
/* =========================================================
   CONTINUE SCREEN CSS
========================================================= */

function addVideoContinueCSS() {

    if (
        document.getElementById(
            "videoContinueCSS"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "videoContinueCSS";


    style.textContent = `

        #videoContinueScreen {

            position: fixed;

            inset: 0;

            z-index: 99999;

            display: flex;

            align-items: center;

            justify-content: center;

            background:
                #040204;

            opacity: 0;

            visibility: hidden;

            pointer-events: none;

            transition:
                opacity 1s ease;

        }


        #videoContinueScreen.active {

            opacity: 1;

            visibility: visible;

            pointer-events: auto;

        }


        .video-continue-content {

            text-align: center;

            max-width: 700px;

            padding: 30px;

            animation:
                continueAppear
                1.1s ease both;

        }


        .video-continue-heart {

            font-size: 52px;

            margin-bottom: 20px;

            animation:
                continueHeart
                1.8s
                ease-in-out
                infinite;

        }


        .video-continue-small {

            color:
                rgba(
                    255,
                    255,
                    255,
                    .4
                );

            font-size: 9px;

            letter-spacing: 5px;

            margin-bottom: 15px;

        }


        .video-continue-content h2 {

            margin: 0 0 30px;

            color:
                #fff;

            font-family:
                Georgia,
                "Times New Roman",
                serif;

            font-size:
                clamp(
                    38px,
                    6vw,
                    70px
                );

            font-weight: 400;

            line-height: 1.1;

        }


        #continueToBirthday {

            border: 1px solid
                rgba(
                    255,
                    255,
                    255,
                    .15
                );

            border-radius: 999px;

            padding:
                15px
                30px;

            color: #fff;

            background:
                linear-gradient(
                    135deg,
                    #8d2450,
                    #d84e7b
                );

            font-size: 15px;

            cursor: pointer;

            box-shadow:
                0 15px 40px
                rgba(
                    150,
                    30,
                    80,
                    .25
                );

            transition:
                transform .25s ease,
                box-shadow .25s ease;

        }


        #continueToBirthday:hover {

            transform:
                translateY(-3px);

            box-shadow:
                0 20px 50px
                rgba(
                    150,
                    30,
                    80,
                    .38
                );

        }


        @keyframes continueAppear {

            from {

                opacity: 0;

                transform:
                    translateY(20px);

            }

            to {

                opacity: 1;

                transform:
                    translateY(0);

            }

        }


        @keyframes continueHeart {

            0%,
            100% {

                transform:
                    scale(1);

            }

            50% {

                transform:
                    scale(1.12);

            }

        }

    `;


    document.head.appendChild(
        style
    );

}
/* =========================================================
   AUTO CONTINUE WHEN USER SCROLLS BELOW VIDEO
========================================================= */

let youtubeSectionPassed =
    false;


function setupVideoAutoContinueOnScroll() {

    const videoSection =
        document.querySelector(
            '[data-section="video"]'
        );


    if (!videoSection) {

        console.log(
            "Video section not found"
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        /*
                           User has gone below
                           the YouTube section.
                        */

                        if (
                            !entry.isIntersecting &&
                            videoCompleted &&
                            !birthdayActive &&
                            !youtubeSectionPassed
                        ) {

                            const rect =
                                videoSection
                                    .getBoundingClientRect();


                            /*
                               Only trigger when
                               section is above viewport.
                            */

                            if (
                                rect.bottom <
                                0
                            ) {

                                youtubeSectionPassed =
                                    true;


                                console.log(
                                    "👇 User scrolled below YouTube"
                                );


                                continueToBirthday();

                            }

                        }

                    }
                );

            },
            {
                threshold: 0.05
            }
        );


    observer.observe(
        videoSection
    );

}


/* =========================================================
   VIDEO END SCREEN
========================================================= */

function showVideoEndScreen() {

    let endScreen =
        document.getElementById(
            "videoEndScreen"
        );


    if (!endScreen) {

        endScreen =
            document.createElement(
                "div"
            );


        endScreen.id =
            "videoEndScreen";


        endScreen.innerHTML = `

            <div
                class="video-end-inner"
            >

                <div
                    class="video-end-heart"
                >
                    ❤️
                </div>


                <p>
                    Wait...
                    there's something more
                    for you.
                </p>

            </div>

        `;


        document.body.appendChild(
            endScreen
        );


        addVideoEndScreenCSS();

    }


    endScreen.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";


    /*
       Birthday experience open
       after cinematic pause.
    */

    setTimeout(
        function () {

            endScreen.classList.remove(
                "active"
            );


            startBirthdayExperience();

        },
        2200
    );

}


/* =========================================================
   VIDEO END SCREEN CSS
========================================================= */

function addVideoEndScreenCSS() {

    if (
        document.getElementById(
            "videoEndScreenCSS"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "videoEndScreenCSS";


    style.textContent = `

        #videoEndScreen {

            position: fixed;

            inset: 0;

            z-index: 99990;

            display: flex;

            align-items: center;

            justify-content: center;

            background:
                #050305;

            opacity: 0;

            visibility: hidden;

            pointer-events: none;

            transition:
                opacity 1.2s ease;

        }


        #videoEndScreen.active {

            opacity: 1;

            visibility: visible;

            pointer-events: auto;

        }


        .video-end-inner {

            text-align: center;

            color:
                rgba(
                    255,
                    255,
                    255,
                    .85
                );

            animation:
                videoEndIn
                1.5s ease both;

        }


        .video-end-heart {

            font-size:
                55px;

            margin-bottom:
                18px;

            animation:
                heartPulse
                1.5s
                ease-in-out
                infinite;

        }


        .video-end-inner p {

            max-width:
                500px;

            padding:
                0 25px;

            font-family:
                Georgia,
                serif;

            font-size:
                20px;

            line-height:
                1.5;

            letter-spacing:
                .5px;

            opacity:
                .8;

        }


        @keyframes videoEndIn {

            from {

                opacity: 0;

                transform:
                    translateY(15px);

            }

            to {

                opacity: 1;

                transform:
                    translateY(0);

            }

        }


        @keyframes heartPulse {

            0%,
            100% {

                transform:
                    scale(1);

            }

            50% {

                transform:
                    scale(1.12);

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


/* =========================================================
   START VIDEO TRACKING TIMER
========================================================= */

function startVideoTrackingTimer() {

    if (
        videoTrackingTimer
    ) {

        return;

    }


    videoTrackingTimer =
        setInterval(
            function () {

                if (
                    !youtubePlayer
                ) {

                    return;

                }


                try {

                    const current =
                        youtubePlayer
                            .getCurrentTime();


                    const duration =
                        youtubePlayer
                            .getDuration();


                    if (
                        !duration ||
                        duration <= 0
                    ) {

                        return;

                    }


                    videoWatchSeconds =
                        Math.floor(
                            current
                        );


                    const percent =
                        Math.round(
                            (
                                current /
                                duration
                            ) * 100
                        );


                    if (
                        percent >
                        (
                            tracking.videoHighestPercent ||
                            0
                        )
                    ) {

                        tracking.videoHighestPercent =
                            percent;

                    }


                    tracking.videoWatchSeconds =
                        videoWatchSeconds;


                    tracking.videoLastPosition =
                        current;


                    tracking.videoDuration =
                        duration;


                    /*
                       Save every 5 seconds
                    */

                    if (
                        videoWatchSeconds %
                        5 ===
                        0
                    ) {

                        saveTracking();

                    }


                    /*
                       Track milestones
                    */

                    const milestones =
                        [
                            25,
                            50,
                            75,
                            90
                        ];


                    milestones.forEach(
                        function (
                            milestone
                        ) {

                            if (
                                percent >=
                                milestone &&
                                !tracking[
                                    "video_" +
                                    milestone +
                                    "_percent"
                                ]
                            ) {

                                tracking[
                                    "video_" +
                                    milestone +
                                    "_percent"
                                ] =
                                    new Date()
                                    .toISOString();


                                saveTracking();


                                clarityEvent(
                                    "video_" +
                                    milestone +
                                    "_percent"
                                );

                            }

                        }
                    );


                    updateVideoProgress(
                        percent,
                        current,
                        duration
                    );


                } catch (error) {

                    console.log(
                        "Video tracking error:",
                        error
                    );

                }

            },
            1000
        );

}


/* =========================================================
   STOP VIDEO TRACKING
========================================================= */

function stopVideoTrackingTimer() {

    if (
        videoTrackingTimer
    ) {

        clearInterval(
            videoTrackingTimer
        );


        videoTrackingTimer =
            null;

    }


    saveTracking();

}


/* =========================================================
   VIDEO PROGRESS UI
========================================================= */

function updateVideoProgress(
    percent,
    current,
    duration
) {

    if (videoProgress) {

        videoProgress.style.width =
            Math.min(
                100,
                Math.max(
                    0,
                    percent
                )
            ) + "%";

    }


    if (!videoProgressText) {

        return;

    }


    const currentMinutes =
        Math.floor(
            current / 60
        );


    const currentSeconds =
        Math.floor(
            current % 60
        );


    const totalMinutes =
        Math.floor(
            duration / 60
        );


    const totalSeconds =
        Math.floor(
            duration % 60
        );


    const currentFormatted =
        String(
            currentMinutes
        ).padStart(
            2,
            "0"
        ) +
        ":" +
        String(
            currentSeconds
        ).padStart(
            2,
            "0"
        );


    const totalFormatted =
        String(
            totalMinutes
        ).padStart(
            2,
            "0"
        ) +
        ":" +
        String(
            totalSeconds
        ).padStart(
            2,
            "0"
        );


    videoProgressText.textContent =
        currentFormatted +
        " / " +
        totalFormatted;

}
function setupWatchMoreButton() {

    const button =
        document.getElementById(
            "watchMoreButton"
        );


    if (!button) {

        return;

    }


    button.addEventListener(
        "click",
        function () {

            clarityEvent(
                "watch_more_clicked"
            );


            continueToBirthday();

        }
    );

}


/* =========================================================
   VIDEO SECTION SETUP
========================================================= */

function setupVideo() {

    /*
       Load API
    */

    loadYouTubeAPI();


    /*
       Existing play button
    */

    if (playVideoButton) {

        playVideoButton.addEventListener(
            "click",
            function () {

                if (
                    youtubePlayer &&
                    youtubePlayer.playVideo
                ) {

                    youtubePlayer.playVideo();

                }

            }
        );

    }


    /*
       If API is already loaded
    */

    if(
        youtubeAPIReady || (
        typeof YT !==
        "undefined" &&
        YT.Player
        )
    ) {

        setTimeout(
            createYouTubePlayer,
            300
        );

    }

}


/* =========================================================
   VIDEO SECTION VISIBILITY
========================================================= */

function setupVideoVisibilityTracking() {

    const videoSection =
        document.querySelector(
            '[data-section="video"]'
        );


    if (!videoSection) {

        return;

    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            tracking.videoSectionOpened =
                                true;


                            tracking.videoSectionOpenedAt =
                                tracking.videoSectionOpenedAt ||
                                new Date()
                                    .toISOString();


                            saveTracking();


                            clarityEvent(
                                "video_section_opened"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.45
            }
        );


    observer.observe(
        videoSection
    );

}


/* =========================================================
   VIDEO SECTION TIME
========================================================= */

function setupVideoSectionTimer() {

    const videoSection =
        document.querySelector(
            '[data-section="video"]'
        );


    if (!videoSection) {

        return;

    }


    let visibleSince =
        null;


    let totalVisible =
        0;


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            visibleSince =
                                Date.now();

                        } else {

                            if (
                                visibleSince
                            ) {

                                totalVisible +=
                                    Math.floor(
                                        (
                                            Date.now() -
                                            visibleSince
                                        ) / 1000
                                    );


                                visibleSince =
                                    null;


                                tracking.videoSectionSeconds =
                                    totalVisible;


                                saveTracking();

                            }

                        }

                    }
                );

            },
            {
                threshold: 0.45
            }
        );


    observer.observe(
        videoSection
    );

}


/* =========================================================
   GENERIC PAGE VISIBILITY
========================================================= */

function setupScrollVisibilityObserver() {

    const sections =
        document.querySelectorAll(
            "section"
        );


    if (!sections.length) {

        return;

    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const section =
                            entry.target;


                        const id =
                            section.id ||
                            section.dataset
                                .section;


                        if (!id) {

                            return;

                        }


                        tracking.pagesSeen[
                            id
                        ] = {

                            openedAt:
                                new Date()
                                .toISOString()

                        };


                        saveTracking();

                    }
                );

            },
            {
                threshold: 0.35
            }
        );


    sections.forEach(
        function (section) {

            observer.observe(
                section
            );

        }
    );

}


/* =========================================================
   VIDEO ELEMENT CLICK
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const target =
            event.target.closest(
                "[data-video]"
            );


        if (!target) {

            return;

        }


        clarityEvent(
            "video_element_clicked"
        );

    }
);


/* =========================================================
   VISIBILITY CHANGE
========================================================= */

document.addEventListener(
    "visibilitychange",
    function () {

        if (
            document.hidden
        ) {

            tracking.lastHiddenAt =
                new Date()
                .toISOString();

        } else {

            tracking.lastVisibleAt =
                new Date()
                .toISOString();

        }


        saveTracking();

    }
);


/* =========================================================
   PAGE UNLOAD
========================================================= */

window.addEventListener(
    "beforeunload",
    function () {

        stopVideoTrackingTimer();

        saveTracking();

    }
);


/* =========================================================
   INITIALISE TRACKING
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupScrollVisibilityObserver();

        setupMemoryModal();

        setupMemoryCards();


        console.log(
            "❤️ Sakshi website initialized"
        );

    }
);


/* =========================================================
   PART 2 END
========================================================= */

console.log(
    "🎥 Sakshi JavaScript Part 2 loaded"
);
/* =========================================================
   BIRTHDAY FRAME DATA
========================================================= */

const birthdayFrames = [

    /* =====================================================
       01 — OPENING VIDEO
    ===================================================== */

    {
        number: "01",

        type: "video",

        file: "01.mp4",

        title:
            "Happy Birthday meri jaan ❤️",

        message:
`Pata hai, aaj ka din mere liye sirf tumhara birthday nahi hai…

mere liye aaj woh din hai jis din meri life mein woh insaan aaya, jo dheere-dheere meri life ka itna important part ban gaya ki ab uske bina bahut si cheezein adhuri si lagti hain.

Tumhare saath bitaya hua har moment mere liye special hai. Chahe hum kuch kar rahe ho ya bas ek dusre ke paas chup-chaap khade ho… pata nahi kyun, tumhare saath woh simple sa moment bhi mere liye bahut kuch ban jaata hai.

Aur sach bolun, toh mujhe tumhari sabse zyada aadat tumhare paas rehne ki ho gayi hai… tumhe hug karne ki, tumhare saath baithne ki, tumhari baatein sunne ki, aur bas tumhe apne paas feel karne ki. ❤️

Main nahi jaanta future mein life humein kitne naye moments degi, kitni memories banengi aur kitne ups and downs aayenge…

bas itna jaanta hoon ki agar mujhe apni life ke kuch moments dobara choose karne ka chance mile, toh unmein tumhare saath bitaya hua har moment main phir se choose karunga.

Tum mere liye bahut special ho… shayad jitna main words mein kabhi properly explain bhi nahi kar paunga.

Bas aaj tumhare birthday par meri ek hi wish hai —

tum hamesha khush raho, hamesha aise hi smile karti raho, aur tumhari life mein woh saari khushiyan aayein jo tum deserve karti ho.

Aur haan…

agar kabhi tumhe lage ki tum akeli ho, toh bas ek baar mujhe yaad kar lena.

Main hamesha tumhare saath khada milunga. ❤️

Happy Birthday, my love.

I love you… more than I can ever put into words. ❤️`
    },


    /* =====================================================
       02 — PHOTO
    ===================================================== */

    {
        number: "02",

        type: "image",

        file: "02.jpeg",

        title:
            "Yeh humari sabse pehli close selfie hai… ❤️",

        message:
`Holi ke baad hum Toast N Beans Cafe gaye the, aur humne har baar ki tarah wahi same hot chocolate order ki thi.

Pata nahi kyun, lekin aaj bhi jab main is photo ko dekhta hoon na, toh mujhe woh poora din yaad aa jaata hai.

Aur sabse zyada yaad aata hai woh moment… jab tum aakar mere itne paas khadi ho gayi thi.

Sach bataun, us waqt meri heartbeat itni zyada badh gayi thi ki mujhe khud samajh nahi aa raha tha ki main tumhare saath khada hoon ya apni heartbeat sambhal raha hoon. 😂❤️

Shayad tumhare liye woh bas ek normal si selfie thi… lekin mere liye nahi.

Mere liye woh un chhote-chhote moments mein se ek hai jo pata nahi kab dil ke bahut kareeb aa jaate hain.

Aaj bhi sochta hoon toh bas ek hi baat aati hai —

kya hi din tha woh… jab tum pehli baar itne paas aakar khadi hui thi. ❤️`
    },


    /* =====================================================
       03 — PHOTO
    ===================================================== */

    {
        number: "03",

        type: "image",

        file: "03.jpeg",

        title:
            "Yeh humari pehli date thi… ❤️",

        message:
`Sach bolun toh main toh farewell ke liye aaya tha, lekin jab tumne mujhe uss coat mein dekha tha na… tumhara woh reaction aur woh expressions, I can still remember them so clearly.

Pata nahi kyun, lekin aaj bhi woh moment achanak yaad aa jaata hai aur main bas smile kar deta hoon.

Main aaya toh tha farewell ke liye, but honestly, farewell se zyada mujhe tumhare paas aane ka intezaar tha… aur humari pehli date ko lekar ek alag hi besabri thi.

Shayad isliye bhi kyunki yeh sirf humari pehli date nahi thi… yeh woh date thi jo humne apne dil ki baatein ek-dusre se kehne ke baad ki thi. ❤️

Pehle tumhe pasand karta tha, tumhare saath time spend karna achha lagta tha… lekin uss din ke baad sab kuch thoda aur special lagne laga tha.

Tumhare paas aana, tumhare saamne baithna, tumhe dekhna… sab kuch.

Aur sach mein, uss din ka excitement kuch alag hi tha.

Farewell toh bas ek bahana tha…

main toh actually tumse milne aaya tha. ❤️`
    },


    /* =====================================================
       04 — PHOTO
    ===================================================== */

    {
        number: "04",

        type: "image",

        file: "04.jpeg",

        title:
            "Aur yeh sirf ek selfie nahi hai… ❤️",

        message:
`Pata nahi kyun, jab bhi main isse dekhta hoon na, mere face par automatically smile aa jaati hai. 😂❤️

Hum dono itne cute lag rahe hain ki photo dekhte-dekhte khud hi hasi aa jaati hai… aur phir bas ek dusre ko dekhte rehne ka mann karta hai.

Like genuinely, I just adore us in this picture. 🥹❤️

Kabhi-kabhi toh isse dekh ke lagta hai ki hum dono ko dekh kar hi kisi ki nazar lag jaaye… aur phir main sochta hoon — kahin main hi toh hum dono ko itna adore karke apni hi nazar na laga doon. 😂🧿❤️

Pata nahi tumhe yeh photo kitni special lagti hai, but mere liye yeh un photos mein se hai jise main jitni baar dekhta hoon, utni baar aur zyada pasand karne lagta hoon… kyunki ismein bas hum dono nahi hain, ismein hum dono ki woh cute si feeling hai jo mujhe bahut zyada pasand hai. ❤️`
    },


    /* =====================================================
       05 — PHOTO
    ===================================================== */

    {
        number: "05",

        type: "image",

        file: "05.jpeg",

        title:
            "Aur yeh woh din hai jab humne bina plan kiye apna OOTD match kar liya tha. 😂❤️",

        message:
`Sach bolun toh maine kabhi socha bhi nahi tha ki hum dono kabhi aise matching OOTD mein photo khinchwayenge.

Main toh waise bhi photos ko lekar hamesha thoda resist karta hoon.

Lekin pata hai, tumhare saath li hui photos ke saath ek ajeeb si baat hai…

Main uss waqt kitna bhi bolun ki “photo nahi khinchwani”, baad mein wahi photos khud baar-baar dekhne lagta hoon. 😂❤️

Aur phir photo mein khud ko dekhne se zyada tumhe dekhta reh jaata hoon.

Shayad isi wajah se tumhare saath li hui photos mere liye sirf photos nahi hain.

Har photo mere liye ek memory ko thoda aur strong kar deti hai.

Aur honestly, agar mujhe tumhare saath photos khinchwane ke liye har baar thoda sa apna resistance todna pade… toh main tod lunga. 😂❤️

Kyuki baad mein jab in photos ko dekhta hoon na, toh mujhe bas ek hi cheez feel hoti hai—

“Achha hua uss din photo khinchwa li thi.” ❤️`
    },


    /* =====================================================
       06 — PHOTO
    ===================================================== */

    {
        number: "06",

        type: "image",

        file: "06.jpeg",

        title:
            "Pata nahi kya hai is photo mein… ❤️",

        message:
`Pata nahi kya hai is photo mein… but genuinely, jitni baar dekhta hoon na, mann karta hai bas dekhta hi rahun.

Tumhari woh smile, tumhara mere saath itne pyaar se khade hona… aur hum dono ko ek saath dekhna, mujhe bahut zyada achha lagta hai.

Kabhi-kabhi photo dekh ke ek thought aata hai ki mere saath itne pyaar se photo click kaun hi karega, tumhare alawa? 🥹❤️

Aur shayad isi liye tumhare saath li hui har photo mere liye thodi zyada special ho jaati hai.

Kyunki mujhe pata hai ki tum sirf mere saath photos nahi khinchwati… tum mere saath woh moments create karti ho jinhe main baad mein baar-baar dekh kar jeeta hoon.

Main jaanta hoon, tum hi woh insaan ho jo mujhe itna pyaar de sakti ho, meri itni care kar sakti ho aur meri chhoti-chhoti cheezon ka bhi itna khayal rakh sakti ho. ❤️

Mujhe tumhara mere saath hona isliye pasand hai kyunki tumhare saath main khud ko bahut zyada loved feel karta hoon.

Bas aise hi mere saath rehna…

aise hi mujhe pyaar karna…

aur aise hi mere saath random si photos click karwati rehna. ❤️`
    },


    /* =====================================================
       07 — PHOTO
    ===================================================== */

    {
        number: "07",

        type: "image",

        file: "07.jpeg",

        title:
            "Yeh Diwali wali tumhari photo hai… ❤️",

        message:
`Mujhe yaad hai, pehle humari VC hui thi aur uske baad jab tumne mujhe yeh photo bheji na… main bas dekhta hi reh gaya tha.

Sach mein, kuch seconds ke liye toh mujhe samajh hi nahi aaya ki main kya bolun.

Bas ek hi thought aa raha tha — koi itna sundar kaise lag sakta hai? 🥹❤️

Tumhe is photo mein jitni baar dekhta hoon na, har baar kuch naya sa notice karta hoon.

Tumhari woh smile bhi na… woh wali nahi jo bas photo ke liye ki jaati hai.

Woh ekdum natural si, pyaari si smile thi, jise dekh kar mere face par bhi automatically smile aa gayi thi.

Sach bolun toh uss photo mein tum mujhe sirf beautiful nahi lagi thi…

tum mujhe woh insaan lagi thi jise dekhte rehne ka mann kare.

Aisa laga jaise Diwali ki saari lights ek taraf hain aur tumhari woh smile ek taraf. ✨❤️

Aur shayad isi liye yeh photo mere favourite photos mein se ek hai. ❤️`
    },


    /* =====================================================
       08 — FINAL VIDEO
    ===================================================== */

    {
        number: "08",

        type: "video",

        file: "10.mp4",

        title:
            "Happy Birthday, Sakshi. ❤️",

        message:
`Happy Birthday to you, Sakshi. ❤️

Tumhari life mein hamesha woh khushi rahe jo tumhari smile mein dikhti hai.

Tum hamesha aise hi pyaari raho, khush raho, aur tumhari aankhon ki woh chamak kabhi kam na ho.

Thank you for being you.

Thank you for all the memories.

Thank you for all the love.

Aur sabse zyada… thank you for being a part of my life. ❤️

Aaj tumhara birthday hai, lekin sach kahun toh gift mujhe mila hai — tumhare form mein.

Happy Birthday, meri favourite person. ❤️

I love you.

Aaj bhi. Kal bhi. Aur har uss din bhi jab tumhe lagega ki tumhe pyaar ki zarurat hai.

Happy Birthday, Sakshi.

Meri taraf se tumhare liye — poora dil. ❤️`
    }

];/* =========================================================
   BIRTHDAY EXPERIENCE
========================================================= */


/* =========================================================
   CREATE / PREPARE BIRTHDAY EXPERIENCE
========================================================= */

function createBirthdayExperience() {

    const overlay =
        document.getElementById(
            "birthdayOverlay"
        );


    if (!overlay) {

        console.error(
            "❌ birthdayOverlay not found"
        );

        return null;

    }


    addBirthdayCSS();


    const next =
        document.getElementById(
            "birthdayNext"
        );


    const previous =
        document.getElementById(
            "birthdayPrev"
        );


    const close =
        document.getElementById(
            "birthdayClose"
        );


    if (next) {

        next.onclick =
            function () {

                nextBirthdayFrame();

            };

    }


    if (previous) {

        previous.onclick =
            function () {

                previousBirthdayFrame();

            };

    }


    if (close) {

        close.onclick =
            function () {

                closeBirthdayExperience();

            };

    }


    return overlay;

}


/* =========================================================
   BIRTHDAY CSS
========================================================= */

function addBirthdayCSS() {

    if (
        document.getElementById(
            "birthdayExperienceCSS"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "birthdayExperienceCSS";


    style.textContent = `

        /* ============================
           BIRTHDAY OVERLAY
        ============================ */

        #birthdayOverlay {

            position: fixed;

            inset: 0;

            z-index: 100000;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;

            background:
                rgba(
                    5,
                    2,
                    5,
                    .98
                );

            opacity: 0;

            visibility: hidden;

            pointer-events: none;

            transition:
                opacity
                .8s ease,
                visibility
                .8s ease;

        }


        #birthdayOverlay.active {

            opacity: 1;

            visibility: visible;

            pointer-events: auto;

        }


        /* ============================
           BIRTHDAY CARD
        ============================ */

        #birthdayCard {

            width: min(
                1000px,
                94vw
            );

            max-height: 92vh;

            overflow-y: auto;

            padding: 22px;

            border-radius: 24px;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .045
                );

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    .10
                );

            box-shadow:
                0 30px 100px
                rgba(
                    0,
                    0,
                    0,
                    .70
                );

            backdrop-filter:
                blur(18px);

        }


        /* ============================
           TOP
        ============================ */

        .birthday-top {

            display: flex;

            align-items: center;

            justify-content: space-between;

            margin-bottom: 10px;

            font-size: 10px;

            letter-spacing: 3px;

            color:
                rgba(
                    255,
                    255,
                    255,
                    .55
                );

        }


        /* ============================
           PROGRESS
        ============================ */

        .birthday-progress {

            width: 100%;

            height: 3px;

            margin-bottom: 18px;

            overflow: hidden;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .08
                );

        }


        .birthday-progress span {

            display: block;

            width: 0;

            height: 100%;

            background:
                linear-gradient(
                    90deg,
                    #9d3155,
                    #ed7b9b
                );

            transition:
                width
                .5s ease;

        }


        /* ============================
           MEDIA
        ============================ */

        .birthday-media {

            position: relative;

            min-height: 360px;

            display: flex;

            align-items: center;

            justify-content: center;

            overflow: hidden;

            border-radius: 18px;

            background:
                #030205;

        }


        .birthday-image,
        .birthday-video {

            display: none;

            width: 100%;

            max-width: 100%;

            max-height: 58vh;

            object-fit: contain;

            background:
                #000;

        }


        .birthday-image.show,
        .birthday-video.show {

            display: block;

        }


        .birthday-video {

            min-height: 300px;

        }


        /* ============================
           LOADER
        ============================ */

        .birthday-loader {

            position: absolute;

            inset: 0;

            z-index: 5;

            display: flex;

            align-items: center;

            justify-content: center;

            text-align: center;

            color:
                rgba(
                    255,
                    255,
                    255,
                    .55
                );

            font-size: 11px;

            letter-spacing: 2px;

            background:
                #030205;

        }


        .birthday-loader.hide {

            display: none;

        }


        /* ============================
           COPY
        ============================ */

        .birthday-copy {

            padding:
                28px
                5px
                10px;

        }


        #birthdayTitle {

            font-family:
                "Cormorant Garamond",
                Georgia,
                serif;

            font-size:
                clamp(
                    32px,
                    5vw,
                    55px
                );

            font-weight: 500;

            line-height: 1.05;

            margin-bottom: 18px;

        }


        #birthdayText {

            white-space:
                pre-line;

            font-family:
                "Cormorant Garamond",
                Georgia,
                serif;

            font-size: 21px;

            line-height: 1.65;

            color:
                #d6c4cb;

            overflow-wrap:
                anywhere;

        }


        /* ============================
           ACTIONS
        ============================ */

        .birthday-actions {

            display: flex;

            justify-content:
                space-between;

            gap: 12px;

            margin-top: 25px;

        }


        .birthday-button {

            border: 1px solid
                rgba(
                    255,
                    255,
                    255,
                    .12
                );

            border-radius: 999px;

            padding:
                12px
                20px;

            color: white;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .05
                );

            cursor: pointer;

        }


        .birthday-close {

            position: absolute;

            top: 18px;

            right: 20px;

            z-index: 10;

            width: 38px;

            height: 38px;

            border: none;

            border-radius: 50%;

            color: white;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .07
                );

            font-size: 24px;

            cursor: pointer;

        }


        /* ============================
           MOBILE
        ============================ */

        @media (
            max-width: 650px
        ) {

            #birthdayOverlay {

                padding: 8px;

            }


            #birthdayCard {

                padding: 14px;

                border-radius: 18px;

            }


            .birthday-media {

                min-height: 230px;

            }


            .birthday-image,
            .birthday-video {

                max-height: 52vh;

            }


            .birthday-video {

                min-height: 220px;

            }


            #birthdayText {

                font-size: 17px;

                line-height: 1.65;

            }


            .birthday-actions {

                flex-direction:
                    column;

            }


            .birthday-button {

                width: 100%;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


/* =========================================================
   START BIRTHDAY
========================================================= */

function startBirthdayExperience() {

    if (
        birthdayActive
    ) {

        return;

    }


    birthdayActive =
        true;


    birthdayCurrent =
        0;


    const overlay =
        createBirthdayExperience();


    if (!overlay) {

        birthdayActive =
            false;

        return;

    }


    overlay.style.display =
        "flex";


    document.body.style.overflow =
        "hidden";


    overlay.classList.add(
        "active"
    );


    tracking.birthdayStarted =
        true;


    tracking.birthdayStartedAt =
        new Date()
        .toISOString();


    saveTracking();


    clarityEvent(
        "birthday_started"
    );


    setTimeout(
        function () {

            loadBirthdayFrame(
                birthdayCurrent
            );

        },
        500
    );

}


/* =========================================================
   LOAD BIRTHDAY FRAME
========================================================= */

/* =========================================================
   LOAD BIRTHDAY FRAME
========================================================= */

function loadBirthdayFrame(
    index
) {

    const frame =
        birthdayFrames[
            index
        ];


    if (!frame) {

        console.error(
            "Birthday frame not found:",
            index
        );

        return;

    }


    const image =
        document.getElementById(
            "birthdayImage"
        );


    const video =
        document.getElementById(
            "birthdayVideo"
        );


    const title =
        document.getElementById(
            "birthdayTitle"
        );


    const message =
        document.getElementById(
            "birthdayText"
        );


    const counter =
        document.getElementById(
            "birthdayCounter"
        );


    const progress =
        document.getElementById(
            "birthdayProgress"
        );


    const loader =
        document.getElementById(
            "birthdayLoader"
        );


    /* =====================================================
       STOP PREVIOUS VIDEO
    ===================================================== */

    if (
        birthdayVideo
    ) {

        try {

            birthdayVideo.pause();

            birthdayVideo.currentTime =
                0;

        } catch (error) {

            console.log(
                error
            );

        }

    }


    birthdayVideo =
        null;


    /* =====================================================
       STOP TYPING
    ===================================================== */

    if (
        birthdayTypingTimer
    ) {

        clearInterval(
            birthdayTypingTimer
        );

        birthdayTypingTimer =
            null;

    }


    if (
        birthdayTitleTypingTimer
    ) {

        clearInterval(
            birthdayTitleTypingTimer
        );

        birthdayTitleTypingTimer =
            null;

    }


    /* =====================================================
       RESET IMAGE
    ===================================================== */

    if (image) {

        image.classList.remove(
            "show"
        );


        image.onload =
            null;


        image.onerror =
            null;


        image.removeAttribute(
            "src"
        );

    }


    /* =====================================================
       RESET VIDEO
    ===================================================== */

    if (video) {

        video.classList.remove(
            "show"
        );


        video.onloadedmetadata =
            null;


        video.onloadeddata =
            null;


        video.oncanplay =
            null;


        video.onerror =
            null;


        video.onended =
            null;


        video.pause();


        video.removeAttribute(
            "src"
        );


        video.load();

    }


    /* =====================================================
       LOADER — SHOW IT
    ===================================================== */

    if (loader) {

        loader.classList.remove(
            "hide"
        );


        loader.style.display =
            "flex";


        loader.style.cursor =
            "default";


        loader.onclick =
            null;


        loader.textContent =
            "Loading your memory... ❤️";

    }


    /* =====================================================
       CLEAR TEXT
    ===================================================== */

    if (title) {

        title.textContent =
            "";

    }


    if (message) {

        message.textContent =
            "";

    }


    /* =====================================================
       COUNTER
    ===================================================== */

    if (counter) {

        counter.textContent =
            frame.number +
            " / " +
            birthdayFrames.length;

    }


    /* =====================================================
       PROGRESS
    ===================================================== */

    if (progress) {

        progress.style.width =
            (
                (
                    index + 1
                ) /
                birthdayFrames.length *
                100
            ) +
            "%";

    }


    /* =====================================================
       IMAGE FRAME
    ===================================================== */

    if (
        frame.type ===
        "image"
    ) {

        if (!image) {

            console.error(
                "birthdayImage element missing"
            );

            return;

        }


        image.onload =
            function () {

                if (loader) {

                    loader.classList.add(
                        "hide"
                    );


                    loader.style.display =
                        "none";

                }


                image.classList.add(
                    "show"
                );


                console.log(
                    "❤️ Birthday image loaded:",
                    frame.file
                );

            };


        image.onerror =
            function () {

                console.error(
                    "❌ Birthday image failed:",
                    frame.file
                );


                if (loader) {

                    loader.classList.remove(
                        "hide"
                    );


                    loader.style.display =
                        "flex";


                    loader.textContent =
                        "Photo nahi mili: " +
                        frame.file;

                }

            };


        image.src =
            "./" +
            frame.file;

    }


    /* =====================================================
       VIDEO FRAME
    ===================================================== */

    else if (
        frame.type ===
        "video"
    ) {

        if (!video) {

            console.error(
                "birthdayVideo element missing"
            );

            return;

        }


        birthdayVideo =
            video;


        video.muted =
            true;


        video.playsInline =
            true;


        video.controls =
            true;


        video.preload =
            "auto";


        let videoAlreadyStarted =
            false;


        function hideLoaderNow() {

            if (loader) {

                loader.classList.add(
                    "hide"
                );


                loader.style.display =
                    "none";

            }

        }


        function showTapToPlay() {

            if (loader) {

                loader.classList.remove(
                    "hide"
                );


                loader.style.display =
                    "flex";


                loader.style.cursor =
                    "pointer";


                loader.textContent =
                    "▶ Tap here to play ❤️";


                loader.onclick =
                    function () {

                        video.play()
                            .then(
                                function () {

                                    hideLoaderNow();

                                }
                            )
                            .catch(
                                function (error) {

                                    console.log(
                                        "Manual play failed:",
                                        error
                                    );

                                }
                            );

                    };

            }

        }


        function showBirthdayVideo() {

            if (
                videoAlreadyStarted
            ) {

                return;

            }


            videoAlreadyStarted =
                true;


            video.classList.add(
                "show"
            );


            console.log(
                "🎬 Birthday video ready:",
                frame.file
            );


            const playPromise =
                video.play();


            if (
                playPromise &&
                typeof playPromise.then ===
                "function"
            ) {

                playPromise
                    .then(
                        function () {

                            hideLoaderNow();

                        }
                    )
                    .catch(
                        function (error) {

                            console.log(
                                "Autoplay blocked:",
                                error
                            );


                            showTapToPlay();

                        }
                    );

            } else {

                hideLoaderNow();

            }

        }


        video.onloadedmetadata =
            function () {

                showBirthdayVideo();

            };


        video.onloadeddata =
            function () {

                showBirthdayVideo();

            };


        video.oncanplay =
            function () {

                showBirthdayVideo();

            };


        video.onerror =
            function () {

                console.error(
                    "❌ Birthday video failed:",
                    frame.file
                );


                if (loader) {

                    loader.classList.remove(
                        "hide"
                    );


                    loader.style.display =
                        "flex";


                    loader.style.cursor =
                        "default";


                    loader.onclick =
                        null;


                    loader.textContent =
                        "Video nahi mili: " +
                        frame.file;

                }

            };


        video.onended =
            function () {

                console.log(
                    "❤️ Birthday video completed:",
                    frame.file
                );


                tracking[
                    "birthdayVideo" +
                    frame.number +
                    "Completed"
                ] =
                    new Date()
                    .toISOString();


                saveTracking();


                clarityEvent(
                    "birthday_video_completed"
                );


                /*
                   IMPORTANT:

                   Sirf LAST birthday video
                   ke baad Sorry transition.
                */

                if (
                    birthdayCurrent ===
                    birthdayFrames.length - 1
                ) {

                    finishBirthdayExperience();

                    return;

                }


                setTimeout(
                    function () {

                        nextBirthdayFrame();

                    },
                    700
                );

            };


        const videoPath =
            "./" +
            frame.file;


        console.log(
            "🎬 Loading birthday video:",
            videoPath
        );


        video.src =
            videoPath;


        video.load();

    }


    /* =====================================================
       TITLE TYPEWRITER
    ===================================================== */

    setTimeout(
        function () {

            typeBirthdayText(
                title,
                frame.title ||
                "",
                28,
                true
            );

        },
        200
    );


    /* =====================================================
       MESSAGE TYPEWRITER
    ===================================================== */

    setTimeout(
        function () {

            typeBirthdayText(
                message,
                frame.message ||
                "",
                7,
                false
            );

        },
        550
    );


    /* =====================================================
       FRAME TRACKING
    ===================================================== */

    tracking[
        "birthdayFrame" +
        frame.number
    ] = {

        openedAt:
            new Date()
            .toISOString(),

        file:
            frame.file,

        type:
            frame.type

    };


    saveTracking();


    clarityEvent(
        "birthday_frame_" +
        frame.number
    );


    console.log(
        "🎂 Birthday frame:",
        frame.number,
        frame.file
    );

}

/* =========================================================
   BIRTHDAY TYPEWRITER
========================================================= */

function typeBirthdayText(
    element,
    text,
    speed,
    isTitle
) {

    if (!element) {

        return;

    }


    if (
        isTitle &&
        birthdayTitleTypingTimer
    ) {

        clearInterval(
            birthdayTitleTypingTimer
        );

    }


    if (
        !isTitle &&
        birthdayTypingTimer
    ) {

        clearInterval(
            birthdayTypingTimer
        );

    }


    element.textContent =
        "";


    let position =
        0;


    const timer =
        setInterval(
            function () {

                if (
                    position >=
                    text.length
                ) {

                    clearInterval(
                        timer
                    );


                    if (isTitle) {

                        birthdayTitleTypingTimer =
                            null;

                    } else {

                        birthdayTypingTimer =
                            null;

                    }


                    return;

                }


                element.textContent +=
                    text.charAt(
                        position
                    );


                position++;

            },
            speed
        );


    if (isTitle) {

        birthdayTitleTypingTimer =
            timer;

    } else {

        birthdayTypingTimer =
            timer;

    }

}


/* =========================================================
   NEXT BIRTHDAY
========================================================= */

function nextBirthdayFrame() {

    if (
        birthdayVideo
    ) {

        try {

            birthdayVideo.pause();

        } catch (error) {

            console.log(
                error
            );

        }

    }


    if (
        birthdayCurrent <
        birthdayFrames.length - 1
    ) {

        birthdayCurrent++;


        loadBirthdayFrame(
            birthdayCurrent
        );


    } else {

        finishBirthdayExperience();

    }

}


/* =========================================================
   PREVIOUS BIRTHDAY
========================================================= */

function previousBirthdayFrame() {

    if (
        birthdayCurrent <=
        0
    ) {

        return;

    }


    if (
        birthdayVideo
    ) {

        try {

            birthdayVideo.pause();

        } catch (error) {

            console.log(
                error
            );

        }

    }


    birthdayCurrent--;


    loadBirthdayFrame(
        birthdayCurrent
    );


    clarityEvent(
        "birthday_previous"
    );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !birthdayActive
        ) {

            return;

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            nextBirthdayFrame();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            previousBirthdayFrame();

        }


        if (
            event.key ===
            "Escape"
        ) {

            closeBirthdayExperience();

        }

    }
);


/* =========================================================
   MOBILE SWIPE
========================================================= */

let birthdayTouchStart =
    0;


document.addEventListener(
    "touchstart",
    function (event) {

        if (
            !birthdayActive
        ) {

            return;

        }


        if (
            event.changedTouches &&
            event.changedTouches[0]
        ) {

            birthdayTouchStart =
                event.changedTouches[0]
                    .screenX;

        }

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    function (event) {

        if (
            !birthdayActive
        ) {

            return;

        }


        if (
            !event.changedTouches ||
            !event.changedTouches[0]
        ) {

            return;

        }


        const birthdayTouchEnd =
            event.changedTouches[0]
                .screenX;


        const difference =
            birthdayTouchEnd -
            birthdayTouchStart;


        if (
            difference <
            -60
        ) {

            nextBirthdayFrame();

        }


        if (
            difference >
            60
        ) {

            previousBirthdayFrame();

        }

    },
    {
        passive: true
    }
);/* =========================================================
   FINISH BIRTHDAY EXPERIENCE
   BIRTHDAY → SORRY VIDEO
========================================================= */

function finishBirthdayExperience() {

    const birthday =
        document.getElementById(
            "birthdayOverlay"
        );


    /*
       Stop birthday video
    */

    if (birthdayVideo) {

        try {

            birthdayVideo.pause();

            birthdayVideo.currentTime = 0;

        } catch (error) {

            console.log(
                "Birthday video stop error:",
                error
            );

        }

    }


    birthdayVideo = null;


    /*
       Stop birthday typing
    */

    if (birthdayTypingTimer) {

        clearInterval(
            birthdayTypingTimer
        );

        birthdayTypingTimer = null;

    }


    if (birthdayTitleTypingTimer) {

        clearInterval(
            birthdayTitleTypingTimer
        );

        birthdayTitleTypingTimer = null;

    }


    /*
       Tracking
    */

    tracking.birthdayCompleted = true;

    tracking.birthdayCompletedAt =
        new Date().toISOString();


    saveTracking();


    clarityEvent(
        "birthday_completed"
    );


    /*
       Hide birthday screen
    */

    /*
       Hide birthday screen
    */

    if (birthday) {

        birthday.classList.remove(
            "active"
        );


        setTimeout(function () {

            birthday.style.display =
                "none";

        }, 900);

    }


    /*
       Keep page dark
    */

    birthdayActive = false;

    document.body.style.overflow =
        "hidden";


    /*
       Cinematic pause
    */

    setTimeout(
        function () {

             showSorryTransition();

        },
        1200
    );

}


/* =========================================================
   SORRY INTRO
========================================================= */




/* =========================================================
   SORRY INTRO CSS
========================================================= */




/* =========================================================
   FULL SORRY MESSAGE
========================================================= */

const fullSorryMessage = `
Sakshi, bahut kuch hai jo main tumse kehna chahta hoon…
bahut kuch aisa bhi hai jo shayad tumhare saamne baithkar, tumhari aankhon mein dekhte hue, main kabhi properly keh hi nahi paunga.

Isliye aaj main bas ek baar apne dil ki saari baat tumhare saamne rakhna chahta hoon… bina kisi excuse ke, bina khud ko justify kiye, bina kuch chhupaye.

Jo kuch mere dil mein hai, woh sab tumhe batana chahta hoon.

Aur shayad iss sab ki shuruaat mujhe kisi aur cheez se nahi, ek simple si baat se karni chahiye…

I am sorry, Sakshi.
Sach mein… dil se sorry. ❤️

Aur main ye sorry sirf isliye nahi keh raha kyunki mujhe lagta hai ki mujhe kehna chahiye…

main ye isliye keh raha hoon kyunki ab mujhe genuinely samajh aa raha hai ki meri wajah se tumhe kitna hurt hua hai.

Main apni galti ko justify nahi karna chahta, na hi tumse ye expect karta hoon ki tum bas meri baat sun kar sab kuch bhool jao.

Bas chahta hoon ki ek baar meri baat poori sun lo… mere dil se. ❤️

Jo kuch bhi hua, uske baare mein main jitna soch raha hoon na, utna hi andar se ek ajeeb sa regret ho raha hai.

Sabse zyada is baat ka nahi ki humare beech kuch galat hua…

sabse zyada dard is baat ka hai ki meri wajah se tum hurt hui.

Aur shayad iss feeling ko main kabhi properly words mein explain bhi nahi kar paunga.

Kyuki jab tum kisi aise insaan ko hurt kar dete ho jise tum dil se kabhi hurt karna hi nahi chahte the na, toh guilt sirf dimaag mein nahi rehta…

woh har baar tumhe andar se ye yaad dilata rehta hai ki “ye tumse nahi hona chahiye tha.”

Mujhse hua.

Aur main uss baat se bhaagna nahi chahta.

Main ye nahi bolunga ki mera intention woh tha hi nahi, isliye meri galti chhoti ho gayi.

Nahi Sakshi.

Galti hui hai toh hui hai.

Tum hurt hui ho toh tumhara hurt bilkul valid hai.

Bas main itna chahta hoon ki tum ek baar meri taraf se uss moment ko bhi samajhne ki koshish karo.

Shayad uss waqt mera dimaag theek se kaam nahi kar raha tha.

Shayad main cheezon ko samajhne ke bajaye unmein aur ulajhta chala gaya.

Shayad mujhe uss waqt woh samajh lena chahiye tha jo aaj itna clearly samajh aa raha hai.

Tum mujhe ek mauka de chuki thi… aur main uss waqt uss mauke ki value nahi samajh paaya.

Aur iska regret mujhe shayad bahut time tak rahega.

Kaash main uss waqt ruk jaata.

Kaash main thoda kam react karta.

Kaash main tumhari feelings ko apni feelings se pehle samajh leta.

Kaash main ek baar bas tumhe dekh kar samajh jaata ki tum kya feel kar rahi ho.

Shayad aaj hum iss jagah par nahi hote.

Lekin past ke saath sabse buri baat ye hai na, Sakshi…

hum usse kitna bhi chah lein, usmein wapas jaakar kuch change nahi kar sakte.

Jo ho gaya hai, woh ho gaya.

Main usse mita nahi sakta.

Tum usse bhula dene ke liye majboor nahi ho.

Aur main tumse ye expect bhi nahi karta.

Lekin humare paas ek cheez abhi bhi hai—

ek dusre ko chhod kar chale jaane ke bajaye, ek baar aur saath rehkar cheezon ko sort out karne ka option.

Aur main dil se wahi chahta hoon.

Main tumse ye nahi keh raha ki tum aaj hi sab theek kar do.

Ye bhi nahi keh raha ki tum jo feel kar rahi ho usse ignore kar do.

Main bas keh raha hoon…

mujhe completely lose karne se pehle ek baar mujhe improve karne ka chance de do.

Kyuki Sakshi, sach kahun…

main tumhe khona nahi chahta.

Tum mere liye sirf ek relationship nahi ho.

Tum sirf meri girlfriend nahi ho.

Tum sirf meri favourite person nahi ho.

Tum meri life ka woh hissa ho jiske saath maine apne bahut saare real emotions, bahut saari memories aur bahut saare dreams jode hain.

Tumhare saath maine sirf time spend nahi kiya…

maine tumhare saath apni zindagi feel ki hai.

Isliye jab main ye sochta hoon ki tum ek din bilkul meri life se nikal jaogi… toh andar se ek ajeeb sa khaali-pan feel hota hai.

Kyuki mere liye bahut cheezein tumhare saath judi hui hain.

Tumhari smile.
Tumhari voice.
Tumhari random baatein.
Tumhara gussa.
Tumhara mujhe samjhana.
Tumhara mere saath rehna.
Tumhari care.
Tumhara mujhe pyaar karna.

Aur tum.

Bas tum.

Aur haan, mujhe pata hai ki ye kehna easy hai ki “main tumhare bina nahi reh sakta.”

Lekin main is line ko sirf tumhe rokne ke liye nahi keh raha.

Main ye isliye keh raha hoon kyunki tum mere liye genuinely bahut matter karti ho.

Mere liye iss duniya mein bahut log honge…

bahut saare relationships honge…

bahut saari cheezein hongi…

lekin jis level par tum matter karti ho, uss jagah par koi aur nahi hai.

Aur shayad isi liye tumhe khona mere liye sirf kisi ko lose karna nahi hoga.

It will feel like losing a part of myself.

Main ye bhi jaanta hoon ki sirf “I love you” bol dene se trust wapas nahi aata.

Sorry bol dene se hurt erase nahi hota.

Aur promises kar dene se koi change nahi hota.

Isliye main is baar promise se zyada apne actions ke through prove karna chahta hoon.

Main better banna chahta hoon.

Tumhare liye nahi sirf…

tumhare saath rehne ke layak banne ke liye.

Main chahta hoon ki tum future mein kabhi peeche mud kar dekho aur bolo—

“Haan, usne sach mein khud ko badla tha.”

Main chahta hoon ki kabhi tumhe meri wajah se ye doubt na ho ki main tumhari feelings ko samajhta bhi hoon ya nahi.

Main chahta hoon ki jab tum mere saamne apna hurt rakho, toh main defend karne se pehle tumhe samjhun.

Jab tum gussa ho, toh main tumse ladne ke bajaye tumhe samjhun.

Jab tumhe meri zarurat ho, toh main excuses nahi, apna presence doon.

Aur jab tum khush ho, toh tumhari happiness ko apni happiness samjhun.

Kyuki ab mujhe samajh aa raha hai ki pyaar sirf kisi ko chahne ka naam nahi hai.

Pyaar kisi ke emotions ko respect karna bhi hai.

Pyaar kisi ke tears ko seriously lena bhi hai.

Pyaar ego ko side mein rakhna bhi hai.

Aur pyaar galti hone ke baad sirf “sorry” nahi…

apne aap ko better karna bhi hai.

Sakshi…

main maanta hoon main late hoon.

Bahut late.

Shayad jab tum mujhe chance de rahi thi, main uss waqt usse pakad nahi paaya.

Shayad mera dimaag uss waqt kharaab tha.

Shayad main cheezon ko samajhne ki jagah aur bigaad raha tha.

Lekin believe me…

maine kabhi consciously tumhe hurt karna nahi chaha.

Chizein escalate hoti gayi.

Bahut kuch ho gaya.

Aur jo nahi hona chahiye tha, woh bhi ho gaya.

Aur agar mere paas ek magic button hota na…

toh main woh poora mahina apni zindagi se nahi, tumhari zindagi se bhi delete kar deta.

Saare fights.
Saare misunderstandings.
Saare tears.
Saare woh moments jahan tumne meri wajah se apne aap ko akela feel kiya.

Sab.

Main sab mita deta.

Lekin mere paas woh button nahi hai.

Aur shayad isi liye ab mujhe ek hi cheez karni hai—

jo aage hai usse better banana hai.

Main tumhe past bhoolne ke liye nahi keh raha.

Main bas chahta hoon ki tum mujhe future mein kuch naya prove karne ka chance do.

Bas ek.

Ek chance, Sakshi.

Ek chance tumhe phir se smile karane ka.

Ek chance tumhe phir se mere upar believe karane ka.

Ek chance tumhe ye feel karane ka ki tumne jis insaan ko kabhi itna pyaar diya tha, woh uss pyaar ki value samajh gaya hai.

Ek chance hum dono ko apni story ko sirf ek bad memory ke saath khatam hone se bachane ka.

Kyuki log saath isliye nahi rehte ki unke beech kabhi kuch galat nahi hota…

log saath isliye rehte hain kyunki kabhi-kabhi woh hurt se zyada relationship ko choose karte hain.

Woh bhoolte nahi hain…

woh maaf karna seekhte hain.

Aur main tumse ye nahi keh raha ki tum mujhe turant maaf kar do.

Main bas itna keh raha hoon—

mujhe itna waqt de do ki main tumhe reason de sakun mujhe maaf karne ka.

Mujhe ek baar phir tumhara woh trust earn karne do.

Mujhe ek baar phir tumhari smile ka reason banne do.

Mujhe ek baar phir tumhe ye feel karane do ki main tumhare against nahi, tumhare saath hoon.

Aur haan…

main tumse pyaar karta hoon.

Bahut.

Lekin iss baar main tumhe sirf ye nahi kehna chahta ki “I love you.”

Main chahta hoon ki mera behaviour, meri patience, meri care, meri consistency…

sab tumhe har din ye feel karaye ki haan, ye insaan sach mein mujhse pyaar karta hai.

Bas…

ek mauka, Sakshi.

Tumhe mujhe forgive karna zaroori nahi hai abhi.

Tumhe sab kuch bhoolna bhi zaroori nahi hai.

Bas mujhe completely chhodne se pehle…

ek baar mujhe tumhare liye better banne ka mauka de do.

Phir uske baad jo tumhara decision hoga, main usse respect karunga.

Lekin usse pehle…

please, ek baar mujhe tumhe phir se smile karane ki koshish karne do.

Ek baar mujhe tumhe phir se believe karane do.

Ek baar mujhe hum dono ke liye genuinely fight karne do.

Bas ek mauka.

Shayad main late hoon…

par iss baar main tumhe samajh kar aaya hoon.

Aur iss baar main tumhe khona nahi chahta. ❤️
`;
function showSorryTransition() {

    const transition =
        document.getElementById(
            "sorryTransition"
        );


    if (!transition) {

        openSorryExperience();

        return;

    }


    transition.classList.add(
        "active"
    );


    clarityEvent(
        "sorry_intro_shown"
    );


    setTimeout(
        function () {

            transition.classList.remove(
                "active"
            );


            setTimeout(
                function () {

                    openSorryExperience();

                },
                700
            );

        },
        3000
    );

}


function openSorryExperience() {

    const sorry =
        document.getElementById(
            "sorryExperience"
        );


    const letterText =
        document.getElementById(
            "sorryLetterText"
        );


    const video =
        document.getElementById(
            "sorryVideo"
        );


    const closeButton =
        document.getElementById(
            "sorryClose"
        );


    if (!sorry) {

        console.error(
            "sorryExperience section not found"
        );

        return;

    }


    if (letterText) {

        letterText.textContent =
            fullSorryMessage;

    }


    if (
        closeButton &&
        !closeButton.dataset.wired
    ) {

        closeButton.dataset.wired =
            "true";


        closeButton.onclick =
            function () {

                closeSorryExperience();

            };

    }


    sorry.classList.add(
        "active"
    );


    sorry.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    tracking.sorryStarted =
        true;


    tracking.sorryStartedAt =
        new Date().toISOString();


    saveTracking();


    clarityEvent(
        "sorry_started"
    );


    if (video) {

        video.currentTime =
            0;


        const playPromise =
            video.play();


        if (
            playPromise &&
            typeof playPromise.catch ===
            "function"
        ) {

            playPromise.catch(
                function (error) {

                    console.log(
                        "Sorry video autoplay blocked:",
                        error
                    );

                }
            );

        }


        video.onended =
            function () {

                tracking.sorryVideoCompleted =
                    true;


                tracking.sorryVideoCompletedAt =
                    new Date().toISOString();


                saveTracking();


                clarityEvent(
                    "sorry_video_completed"
                );

            };


        video.onplay =
            function () {

                tracking.sorryVideoStarted =
                    true;


                tracking.sorryVideoStartedAt =
                    tracking.sorryVideoStartedAt ||
                    new Date().toISOString();


                saveTracking();


                clarityEvent(
                    "sorry_video_started"
                );

            };

    }


    tracking.sorryCompleted =
        true;


    tracking.sorryCompletedAt =
        new Date().toISOString();


    saveTracking();


    clarityEvent(
        "sorry_experience_completed"
    );

}


function closeSorryExperience() {

    const sorry =
        document.getElementById(
            "sorryExperience"
        );


    const video =
        document.getElementById(
            "sorryVideo"
        );


    if (video) {

        try {

            video.pause();

        } catch (error) {

            console.log(
                error
            );

        }

    }


    if (sorry) {

        sorry.classList.remove(
            "active"
        );


        sorry.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    document.body.style.overflow =
        "";


    clarityEvent(
        "sorry_closed"
    );

}


/* =========================================================
   START SORRY EXPERIENCE
========================================================= */




/* =========================================================
   FULL SORRY VIDEO CSS
========================================================= */




/* =========================================================
   SHOW FINAL SORRY IMAGE
========================================================= */




/* =========================================================
   FINAL IMAGE CSS
========================================================= */




/* =========================================================
   CLOSE FUNCTIONS
========================================================= */

function closeBirthdayExperience() {

    if (birthdayVideo) {

        try {

            birthdayVideo.pause();

        } catch (error) {

            console.log(error);

        }

    }


    birthdayVideo =
        null;


    if (
        birthdayTypingTimer
    ) {

        clearInterval(
            birthdayTypingTimer
        );

        birthdayTypingTimer =
            null;

    }


    if (
        birthdayTitleTypingTimer
    ) {

        clearInterval(
            birthdayTitleTypingTimer
        );

        birthdayTitleTypingTimer =
            null;

    }


    const birthday =
        document.getElementById(
            "birthdayOverlay"
        );


    if (birthday) {

        birthday.classList.remove(
            "active"
        );


        setTimeout(function () {

            birthday.style.display =
                "none";

        }, 900);

    }


    birthdayActive =
        false;


    document.body.style.overflow =
        "";


    clarityEvent(
        "birthday_closed"
    );

}

/* =========================================================
   FINAL DEBUG
========================================================= */

window.sakshiDebug = {

    tracking:
        function () {

            return tracking;

        },


    startBirthday:
        function () {

            startBirthdayExperience();

        },


    startSorry:
        function () {

            startSorryExperience();

        },


    showFinal:
        function () {

            showSorryEnding();

        }

};


console.log(
    "❤️ Sakshi website final JS loaded"
);/* =========================================================
   PART 7 — FINAL INITIALIZATION
========================================================= */


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
           Birthday open
        */

        if (
            birthdayActive &&
            event.key === "Escape"
        ) {

            closeBirthdayExperience();

            return;

        }


        /*
           Sorry screen open
        */

        const sorry =
            document.getElementById(
                "sorryExperience"
            );


        if (
            sorry &&
            sorry.classList.contains(
                "active"
            ) &&
            event.key === "Escape"
        ) {

            closeSorryExperience();

        }

    }
);


/* =========================================================
   PAGE VISIBILITY TRACKING
========================================================= */
/* =========================================================
   PAGE VISIBILITY TRACKING
========================================================= */

document.addEventListener(
    "visibilitychange",
    function () {

        if (
            document.hidden
        ) {

            tracking.pageHiddenAt =
                new Date()
                .toISOString();

        } else {

            tracking.pageVisibleAgainAt =
                new Date()
                .toISOString();


            tracking.returnCount =
                (
                    tracking.returnCount ||
                    0
                ) + 1;

        }


        saveTracking();

    }
);


/* =========================================================
   PAGE CLOSE / REFRESH TRACKING
========================================================= */

window.addEventListener(
    "beforeunload",
    function () {

        try {

            stopVideoTrackingTimer();

        } catch (error) {

            console.log(
                error
            );

        }


        tracking.lastPageUnloadAt =
            new Date()
            .toISOString();


        tracking.totalSessionSeconds =
            Math.floor(
                (
                    Date.now() -
                    pageOpenedAt
                ) / 1000
            );


        saveTracking();

    }
);


/* =========================================================
   RIGHT CLICK PROTECTION
========================================================= */

document.addEventListener(
    "contextmenu",
    function (event) {

        const target =
            event.target;


        /*
           Sirf memory images ke liye
        */

        if (
            target &&
            target.tagName === "IMG"
        ) {

            if (
                target.closest(
                    ".memory-card"
                ) ||
                target.id === "modalImage"
            ) {

                event.preventDefault();

            }

        }

    }
);


/* =========================================================
   PREVENT IMAGE DRAG
========================================================= */

document.addEventListener(
    "dragstart",
    function (event) {

        const target =
            event.target;


        if (
            target &&
            target.tagName === "IMG"
        ) {

            event.preventDefault();

        }

    }
);

/* =========================================================
   AUTO CONTINUE WHEN USER SCROLLS BELOW VIDEO
========================================================= */




function setupVideoAutoContinueOnScroll() {

    const videoSection =
        document.querySelector(
            '[data-section="video"]'
        );


    if (!videoSection) {

        console.log(
            "Video section not found"
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            !entry.isIntersecting &&
                            videoCompleted &&
                            !birthdayActive &&
                            !youtubeSectionPassed
                        ) {

                            const rect =
                                videoSection
                                    .getBoundingClientRect();


                            if (
                                rect.bottom < 0
                            ) {

                                youtubeSectionPassed =
                                    true;


                                console.log(
                                    "👇 User scrolled below YouTube"
                                );


                                continueToBirthday();

                            }

                        }

                    }
                );

            },
            {
                threshold: 0.05
            }
        );


    observer.observe(
        videoSection
    );

}
function continueToBirthday() {

    const screen =
        document.getElementById(
            "videoContinueScreen"
        );


    if (screen) {

        screen.classList.remove(
            "active"
        );

    }


    document.body.style.overflow =
        "hidden";


    clarityEvent(
        "birthday_continue_clicked"
    );


    setTimeout(
        function () {

            startBirthdayExperience();

        },
        900
    );

}
/* =========================================================
   FINAL INITIALIZATION
========================================================= */

function initialiseSakshiWebsite() {

    console.log(
        "❤️ Initialising Sakshi website..."
    );


    /* -----------------------------------------------------
       Tracking
    ----------------------------------------------------- */

    tracking.initialisedAt =
        new Date()
        .toISOString();


    saveTracking();


    /* -----------------------------------------------------
       Hearts
    ----------------------------------------------------- */

    try {

        startHeartAnimation();

    } catch (error) {

        console.log(
            "Heart animation error:",
            error
        );

    }


    /* -----------------------------------------------------
       Memory cards
    ----------------------------------------------------- */

    try {

        setupMemoryCards();

    } catch (error) {

        console.log(
            "Memory card setup error:",
            error
        );

    }


    /* -----------------------------------------------------
       Memory modal
    ----------------------------------------------------- */

    try {

        setupMemoryModal();

    } catch (error) {

        console.log(
            "Memory modal setup error:",
            error
        );

    }


    /* -----------------------------------------------------
       Photo tracking
    ----------------------------------------------------- */

    try {

        setupPhotoVisibility();

    } catch (error) {

        console.log(
            "Photo visibility error:",
            error
        );

    }


    /* -----------------------------------------------------
       Section tracking
    ----------------------------------------------------- */

    try {

        setupSectionTracking();

    } catch (error) {

        console.log(
            "Section tracking error:",
            error
        );

    }


    /* -----------------------------------------------------
       Scroll tracking
    ----------------------------------------------------- */

    try {

        setupScrollTracking();

    } catch (error) {

        console.log(
            "Scroll tracking error:",
            error
        );

    }


    /* -----------------------------------------------------
       YouTube
    ----------------------------------------------------- */

    try {

        setupVideo();

    } catch (error) {

        console.log(
            "YouTube setup error:",
            error
        );

    }
    try {

        setupWatchMoreButton();

    } catch (error) {

        console.log(
            "Watch more button error:",
            error
        );

    }

    /* -----------------------------------------------------
       Extra video tracking
    ----------------------------------------------------- */

    try {

        setupVideoVisibilityTracking();

    } catch (error) {

        console.log(
            "Video visibility error:",
            error
        );

    }


    try {

        setupVideoSectionTimer();

    } catch (error) {

        console.log(
            "Video timer error:",
            error
        );

    }


    /* -----------------------------------------------------
       Generic section tracking
    ----------------------------------------------------- */

    try {

        setupScrollVisibilityObserver();

    } catch (error) {

        console.log(
            "Generic section tracking error:",
            error
        );

    }


    /* -----------------------------------------------------
       Birthday CSS
    ----------------------------------------------------- */

    try {

        addBirthdayCSS();

    } catch (error) {

        console.log(
            "Birthday CSS error:",
            error
        );

    }


    /* -----------------------------------------------------
       Make sure birthday is closed
       when website first opens
    ----------------------------------------------------- */

    const birthday =
        document.getElementById(
            "birthdayOverlay"
        );


    if (birthday) {

        birthday.classList.remove(
            "active"
        );

    }


    /* -----------------------------------------------------
       Make sure sorry is not
       visible at the beginning
    ----------------------------------------------------- */

    const sorry =
        document.getElementById(
            "sorryExperience"
        );


    if (sorry) {

        sorry.classList.remove(
            "active"
        );

    }


    /*
       Final state
    */

    birthdayActive =
        false;


    birthdayCurrent =
        0;


    birthdayVideo =
        null;


    sorryShown =
        false;


    document.body.style.overflow =
        "";


    tracking.websiteReady =
        true;


    tracking.websiteReadyAt =
        new Date()
        .toISOString();


    saveTracking();


    console.log(
        "❤️ Sakshi website ready"
    );

}


/* =========================================================
   DOM READY
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialiseSakshiWebsite
    );

} else {

    initialiseSakshiWebsite();

}


/* =========================================================
   DEBUG COMMANDS
========================================================= */

window.sakshiDebug = {

    /* -----------------------------------------------------
       Show tracking
    ----------------------------------------------------- */

    tracking:
        function () {

            return tracking;

        },


    /* -----------------------------------------------------
       Reset tracking
    ----------------------------------------------------- */

    reset:
        function () {

            localStorage.removeItem(
                trackingKey
            );


            location.reload();

        },


    /* -----------------------------------------------------
       Open memory
    ----------------------------------------------------- */

    openMemory:
        function (filename) {

            openMemory(
                filename
            );

        },


    /* -----------------------------------------------------
       Start birthday manually
    ----------------------------------------------------- */

    startBirthday:
        function () {

            startBirthdayExperience();

        },


    /* -----------------------------------------------------
       Next birthday frame
    ----------------------------------------------------- */

    nextBirthday:
        function () {

            nextBirthdayFrame();

        },


    /* -----------------------------------------------------
       Previous birthday frame
    ----------------------------------------------------- */

    previousBirthday:
        function () {

            previousBirthdayFrame();

        },


    /* -----------------------------------------------------
       Start sorry manually
    ----------------------------------------------------- */

    startSorry:
        function () {

            startSorryExperience();

        },


    /* -----------------------------------------------------
       Show final image manually
    ----------------------------------------------------- */

    showFinal:
        function () {

            showSorryEnding();

        }

};


/* =========================================================
   FINAL CONSOLE MESSAGE
========================================================= */

console.log(
`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❤️ SAKSHI MEMORY WEBSITE READY ❤️

MAIN VIDEO
→ ${YOUTUBE_VIDEO_ID}

BIRTHDAY ORDER
→ 01.mp4
→ 02.jpeg
→ 03.jpeg
→ 04.jpeg
→ 05.jpeg
→ 06.jpeg
→ 07.jpeg
→ 10.mp4

AFTER BIRTHDAY
→ Dark pause
→ "Ek aur baat..."
→ "Ji kehna hai tumse."
→ sorry.mp4
→ Full apology text
→ Final photo
→ Happy Birthday + Sorry
→ END

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
);