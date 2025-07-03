gsap.registerPlugin(ScrollTrigger);

// Fade out hero section on scroll
gsap.to("#hero", {
    scrollTrigger: {
        trigger: "#intro",
        start: "top 100%",
        end: "top 35%",
        scrub: 0.3,
    },
    opacity: 0,
});

// Animate each paragraph in .intro with stagger
ScrollTrigger.batch(".intro p", {
    start: "top 65%",
    end: "bottom 60%",
    scrub: true,

    onEnter: (batch) =>
        gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            duration: 1,
            ease: "power2.out",
        }),

    onLeave: (batch) =>
        gsap.to(batch, {
            opacity: 0,
            y: -50,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.in",
        }),

    onEnterBack: (batch) =>
        gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            duration: 1,
            ease: "power2.out",
        }),

    onLeaveBack: (batch) =>
        gsap.to(batch, {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.in",
        }),
});

// Wali Slide Animation
gsap
    .timeline({
        scrollTrigger: {
            trigger: "#wali-slide",
            start: "top 99%",
            end: "top 20%",
            scrub: true,
        },
    })
    .to("#wali-slide", { opacity: 1, ease: "none" })
    .to("#wali-line", { opacity: 1, ease: "none" }, "<");
