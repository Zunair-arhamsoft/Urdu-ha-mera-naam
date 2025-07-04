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
gsap.timeline({
    scrollTrigger: {
        trigger: "#wali-slide",
        start: "top 0%",
        end: "+=60%",
        scrub: true,
        pin: "#wali-slide",
        anticipatePin: 1,
    },
})
    .fromTo("#wali-line",
        { opacity: 0 },
        { opacity: 1, duration: 1 }
    )
    .to("#wali-line",
        { opacity: 0, duration: 1 }
    );


// ---------------- Additional fun on-scroll animations ----------------

// 1. Parallax effect for the background of the content wrapper
gsap.to(".content-wrapper", {
    backgroundPositionY: "40%",
    ease: "none",
    scrollTrigger: {
        trigger: ".content-wrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
});

// 2. Reveal columns in the Wali bio section
gsap.timeline({
    scrollTrigger: {
        trigger: "#wali-bio",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    },
})
    .from(".wali-left", { xPercent: -50, opacity: 0, ease: "power1.out" })
    .from(".wali-right", { xPercent: 50, opacity: 0, ease: "power1.out" }, "<")
    .from(".wali-image img", {
        rotationY: 180,
        scale: 0,
        opacity: 0,
        transformOrigin: "center center",
        ease: "back.out(1.7)",
    }, "-=" + 0.2);

// 3. Hero text subtle zoom and tilt while scrolling out
gsap.to(".hero-text", {
    scale: 1.1,
    rotation: 2,
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});
document.querySelectorAll(".wali-intro").forEach((p) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: p,
            start: "top 90%",
            end: "top 10%",
            scrub: true,
        },
    });

    tl.fromTo(
        p,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, ease: "none", duration: 0.3 }
    ).to(p, { opacity: 0, y: -20, ease: "none", duration: 0.3 });
});
