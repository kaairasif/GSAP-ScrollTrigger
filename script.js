gsap.registerPlugin(ScrollTrigger);

const progressCount = document.querySelector(".progress__count")
const progressChild = document.querySelector(".progress__child");

// gsap.to(".two", {
//   x: 400,
//   duration: 3,
//   scrollTrigger: ".three",
// });


// gsap.from(".three", {
//   x: 400,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".three",
//     // start: 400
//     start: "center 30%",
//     markers: true
//   },
// });



// let tl = gsap.timeline({
//  scrollTrigger: {
//     trigger: ".three",
//     start: "center 40%",
//     end: "center 25%",
//     scrub: 3,
//     toggleClass: "highlight",
//     markers: true
//   }
// })

// tl.to(".three", {
//   x: 400,
//   duration: 3,
//   rotation: 360,
// });

// tl.to(".ghost", {
//   x: 400,
//   duration: 3,
//   rotation: 360,
// });

// gsap.to(".three", {
//   x: 400,
//   duration: 3,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: ".ghost",
//     // start: 400
//     start: "center 60%",
//     end: "center 15%",
//     // endTrigger: ".c",
//     // end: () => `+=${document.querySelector(".three").offsetHeight}`,
//     // end: "top 30%",
//     // scrub: 1,
//     // pin: true,
//     // toggleActions: "restart pause reverse pause",
//     scrub: 1,
//     // toggleClass: "highlight",
//     pin: true,
//     markers: true,
//   },
// });


gsap.to(".three", {
  x: 400,
  duration: 3,
  rotate: 360,
  scrollTrigger: {
    trigger: ".progress",
    // start: 400
    start: "center 60%",
    end: "center 15%",
    // endTrigger: ".c",
    // end: () => `+=${document.querySelector(".three").offsetHeight}`,
    // end: "top 30%",
    // scrub: 1,
    // pin: true,
    // toggleActions: "restart pause reverse pause",
    scrub: 1,
    // toggleClass: "highlight",
    pin: true,
    // markers: true,
    // onEnter: () => {
    //   console.log("Enter");
    // },
    // onEnterBack: () => {
    //   console.log("Enter back");
    // },
    // onLeave: () => {
    //   console.log("Leave");
    // },
    // onLeaveBack: () => {
    //   console.log("Leave back");
    // },
    onUpdate: (self) => {
        let percentage = Math.round(self.progress * 100);
        progressChild.style.width = percentage + "%";

        progressCount.textContent = percentage;
    }
  },
});