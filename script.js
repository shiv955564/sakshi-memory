function enterWebsite() {

    const hero = document.querySelector(".hero");
    const mainPage = document.querySelector(".main-page");

    hero.style.opacity = "0";
    hero.style.transform = "scale(1.05)";
    hero.style.transition = "all 0.8s ease";

    setTimeout(() => {

        hero.style.display = "none";

        mainPage.style.display = "block";
        mainPage.style.opacity = "0";

        setTimeout(() => {
            mainPage.style.opacity = "1";
            mainPage.style.transition = "opacity 1s ease";
        }, 50);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);

}