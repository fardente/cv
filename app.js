const tl = gsap.timeline();
tl.from("aside", {
    duration: 1,
    x: "-100%",
    stagger: 0.5,
    ease: "bounce.out",
})
    .from(
        "main",
        {
            duration: 0.5,
            opacity: 0,
            y: "200%",
            stagger: 0.2,
        },
        "-=1"
    )
    .from(
        ".title h1",
        {
            y: -300,
            duration: 2,
            ease: "expo.inOut",
        },
        "-=1"
    )
    .from(".title h3", { duration: 1, x: "-=200%" }, "-=2");
