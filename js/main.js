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

document.querySelectorAll("#intro p").forEach((p) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: p,
            start: "top 90%",
            end: "top 10%",
            scrub: true,
        }
    });

    tl.fromTo(
        p,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, ease: "none", duration: 0.3 }
    )
        .to(p, { opacity: 0, y: -20, ease: "none", duration: 0.3 });
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
