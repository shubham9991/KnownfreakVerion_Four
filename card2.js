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

      // let cardsToScale = document.querySelectorAll(".horizontal > div:nth-child(n+2) .card");

// // Animation for the first card
// gsap.to(".horizontal > div:nth-child(2) .card", {
//   width: "900px", // Set the width to 900px
//   height: "525px", // Set the height to 525px
//   scrollTrigger: {
//     trigger: ".horizontal", // Set the trigger element
//     start: "center center", // Set the start position
//     end: "+=20%", // Set the end position (20% from the right)
//     scrub: true, // Enable scrubbing for smoother animation
//     markers: true // Display markers for debugging
//   }
// });

// // Animation for the second card
// gsap.to(".horizontal > div:nth-child(3) .card", {
//   width: "900px", // Set the width to 900px
//   height: "525px", // Set the height to 525px
//   scrollTrigger: {
//     trigger: ".horizontal", // Set the trigger element
//     start: "+=60%", // Set the start position
//     end: "+=110%", // Set the end position (20% from the right)
//     scrub: true, // Enable scrubbing for smoother animation
//     markers: true // Display markers for debugging
//   }
// });






      // gsap.registerPlugin(ScrollTrigger);

      // gsap.to(".horizontal", {
      //   x: () => -document.querySelector(".horizontal").scrollWidth + window.innerWidth,
      //   scrollTrigger: {
      //     trigger: ".horizontal",
      //     start: "center center",
      //     end: () => "+=" + (document.querySelector(".horizontal").scrollWidth - window.innerWidth),
      //     pin: "#horizontal-scoll",
      //     scrub: true,
      //     invalidateOnRefresh: true,
      //     markers: true
      //   }
      // });
      
      // let cardsToScale = document.querySelectorAll(".horizontal > div:nth-child(n+2) .card");
      
      // cardsToScale.forEach(card => {
      //   gsap.to(card, {
      //     scale: 0.8, // Initial scale smaller than normal
      //     scrollTrigger: {
      //       trigger: card,
      //       start: "center center",
      //       end: () => "+=" + (document.querySelector(".horizontal").scrollWidth - window.innerWidth),
      //       scrub: false,
      //       onUpdate: self => {
      //         const progress = self.progress;
      //         gsap.to(card, {
      //           scale: 1.1,
      //           overwrite: "auto"
      //         });
      //       }
      //     }
      //   });
      // });
      