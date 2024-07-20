let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

function validatePhoneNumber(input) {
    // Remove any non-numeric characters
    input.value = input.value.replace(/\D/g, '');

    // Limit the input to 10 digits
    if (input.value.length > 13) {
        input.value = input.value.slice(0, 13);
    }
}

// GSAP initialization and animation logic
function initGSAP() {
    var menu = document.querySelector("#nav i");
    var cross = document.querySelector("#full i");
    var body = document.querySelector("body");

    var tl = gsap.timeline();

    tl.to("#full", {
        top: "0",
        duration: 0.5
    });
    tl.from("#full a", {
        // y: 150,
        duration: 0.5,
        stagger: 0.3,
        opacity: 0
    });
    tl.from("#full i", {
        opacity: 0
    });

    tl.pause();
    menu.addEventListener("click", function () {
        tl.play();
        body.classList.add("no-scroll"); // Add class to disable scroll
    });
    cross.addEventListener("click", function () {
        tl.reverse();
        body.classList.remove("no-scroll"); // Remove class to enable scroll
    });
}

// Execute the GSAP function
initGSAP();