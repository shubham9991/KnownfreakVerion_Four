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




let questions = document.querySelectorAll(".faq_question");

questions.forEach((question) => {
  let icon = question.querySelector(".icon-shape");

  question.addEventListener("click", (event) => {
    const active = document.querySelector(".faq_question.active");
    const activeIcon = document.querySelector(".icon-shape.active");

    if (active && active !== question) {
      active.classList.toggle("active");
      activeIcon.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }

    question.classList.toggle("active");
    icon.classList.toggle("active");

    const answer = question.nextElementSibling;

    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});



// const outer = document.querySelector('.container');
// outer.addEventListener('wheel', function(e) {
//     // Check if the user has reached the end of the .outer element
//     if (outer.scrollLeft + outer.clientWidth >= outer.scrollWidth) {
//         // If so, remove the event listener
//         outer.removeEventListener('wheel', arguments.callee);
//     } else {
//         // Otherwise, continue with the existing behavior
//         e.preventDefault();
//         outer.scrollLeft += e.deltaY;
//     }
// }, { passive: false });



// Horizontal card scrollBehavior: 

gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector(".horizontal");

console.log(horizontalSection.scrollWidth);

gsap.to(".horizontal", {
  x: () => horizontalSection.scrollWidth * -1,
  xPercent: 100,
  scrollTrigger: {
    trigger: ".horizontal",
    start: "center center",
    end: "+=2500px",
    pin: "#horizontal-scoll",
    scrub: true,
    invalidateOnRefresh: true,
    markers: true


  },
});


// Vertical card scrollBehavior:

const { ScrollObserver, valueAtPercentage } = aat;

const cardsContainer = document.querySelector(".cards");
const cards = document.querySelectorAll(".card");
cardsContainer.style.setProperty("--cards-count", cards.length);
cardsContainer.style.setProperty(
  "--card-height",
  `${cards[0].clientHeight}px`
);
Array.from(cards).forEach((card, index) => {
  const offsetTop = 20 + index * 20;
  card.style.paddingTop = `${offsetTop}px`;
  if (index === cards.length - 1) {
    return;
  }
  const toScale = 1 - (cards.length - 1 - index) * 0.1;
  const nextCard = cards[index + 1];
  const cardInner = card.querySelector(".card__inner");
  ScrollObserver.Element(nextCard, {
    offsetTop,
    offsetBottom: window.innerHeight - card.clientHeight,
  }).onScroll(({ percentageY }) => {
    cardInner.style.scale = valueAtPercentage({
      from: 1,
      to: toScale,
      percentage: percentageY,
    });
    cardInner.style.filter = `brightness(${valueAtPercentage({
      from: 1,
      to: 0.6,
      percentage: percentageY,
    })})`;
  });
});

// function shery() {
//   Shery.imageEffect("#bimg", {
//     style: 1,
//     config: {
//       "a": { "value": 0, "range": [0, 30] },
//       "b": { "value": -1, "range": [-1, 1] },
//       "zindex": { "value": -9996999, "range": [-9999999, 9999999] },
//       "aspect": { "value": 1.920282478350657 },
//       "ignoreShapeAspect": { "value": true },
//       "shapePosition": { "value": { "x": 0, "y": 0 } },
//       "shapeScale": { "value": { "x": 0.5, "y": 0.5 } },
//       "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] },
//       "shapeRadius": { "value": 0, "range": [0, 2] },
//       "currentScroll": { "value": 0 },
//       "scrollLerp": { "value": 0.07 },
//       "gooey": { "value": true },
//       "infiniteGooey": { "value": false },
//       "growSize": { "value": 2.28, "range": [1, 15] },
//       "durationOut": { "value": 1, "range": [0.1, 5] },
//       "durationIn": { "value": 1.5, "range": [0.1, 5] },
//       "displaceAmount": { "value": 0.5 },
//       "masker": { "value": true },
//       "maskVal": { "value": 1.12, "range": [1, 5] },
//       "scrollType": { "value": 0 },
//       "geoVertex": { "range": [1, 64], "value": 1 },
//       "noEffectGooey": { "value": true },
//       "onMouse": { "value": 1 },
//       "noise_speed": { "value": 0.15, "range": [0, 10] },
//       "metaball": { "value": 0.11, "range": [0, 2], "_gsap": { "id": 23 } },
//       "discard_threshold": { "value": 0.5, "range": [0, 1] },
//       "antialias_threshold": { "value": 0.1, "range": [0, 0.1] },
//       "noise_height": { "value": 0.5, "range": [0, 2] },
//       "noise_scale": { "value": 0, "range": [0, 100] }
//     },
//     gooey: true,
//     // debug: true
//   });

//   Shery.imageEffect(".bimg img", {
//     style: 2,
//     // debug: true
//   });
// }

// shery();