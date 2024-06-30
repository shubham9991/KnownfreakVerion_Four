document.querySelector('.menu-btn').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('open');
});


document.querySelector('.close-btn').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('open');
});


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