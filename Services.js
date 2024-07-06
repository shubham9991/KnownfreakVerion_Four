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


// For string

// var Path = `M 10 100 Q 500 100 990 100`

// var finalPath = `M 10 100 Q 500 100 990 100`

// var string = document.querySelector('.string')

// string.addEventListener('mousemove', function (dets) {
//     var viewBoxX = dets.x / string.offsetWidth * 1000;
//     var viewBoxY = dets.y / string.offsetHeight * 200;

//     var Path = `M 10 100 Q ${viewBoxX} ${viewBoxY} 990 100`;
//     gsap.to("svg path", {
//         attr: { d: Path },
//         duration: 0.2,
//     });
// });


// string.addEventListener('mouseleave', function () {
//     gsap.to("svg path", {
//         attr: { d: finalPath },
//         duration: 2.2,
//         ease: "elastic.out(1,0.2)"
//     })
// })