const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list li");

    burger.addEventListener('click', function () {
        //Toggle Nav
        navList.classList.toggle("navActive");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`
            }
        });

        burger.classList.toggle("toggle");
    });
}

navSlide()
