const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.set(".title h1", { zIndex: 400, delay: 0.1 })
    .to(".title h1", {
        opacity: 1,
        duration: 1.5,
        stagger: 0.4,
    })
    .to(".title h1", {
        y: 0,
        stagger: 0.2,
        duration: 0.8,
    })
    .to(
        ".loading",
        {
            opacity: 1,
            y: "+=100%",
            duration: 1,
        },
        "-=0.5"
    )
    .from("body", {
        overflow: "hidden",
    });
// .fromTo(
//     ".loading",
//     {
//         opacity: 1,
//     },
//     {
//         opacity: 0,
//         y: "+=80%",
//         delay: 13,
//         duration: 5,
//         ease: "power4",
//     }
// );

// tl.from(".container", {
//     opacity: 0,
//     delay: 0.5,
// }).to(".container", {
//     opacity: 1,
//     duration: 0.5,
// });
// tl.from(".title h1", {
//     y: 20,
//     opacity: 0,
//     delay: 0.5,
// }).to(".title h1", {
//     y: 0,
//     opacity: 1,
//     duration: 0.5,
// });

// tl.from("aside", {
//     duration: 1,
//     x: "-100%",
//     stagger: 0.5,
//     ease: "bounce.out",
// })
//     .from(
//         "main",
//         {
//             duration: 0.5,
//             opacity: 0,
//             y: "200%",
//             stagger: 0.2,
//         },
//         "-=1"
//     )
//     .from(
//         ".title h1",
//         {
//             y: -300,
//             duration: 2,
//             ease: "expo.inOut",
//         },
//         "-=1"
//     )
//     .from(".title h3", { duration: 1, x: "-=200%" }, "-=2");
