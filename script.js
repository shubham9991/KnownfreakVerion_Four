document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('open');
});


document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('open');
});







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