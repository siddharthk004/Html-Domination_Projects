gsap.to("#second h1",{
    transform: "translateX(-125%)",
    scrollTrigger: {
        trigger: "#second",
        pin: true,
        scroller: "body",
        scrub:2,
        start: "top 0",
        end: "top -100%",
        markers:true,
    }
})