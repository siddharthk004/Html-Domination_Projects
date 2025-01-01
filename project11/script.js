

gsap.to("#second img",{
    width: "100%",
    scrollTrigger: { 
        trigger: "#second",
        scroller: "body",
        markers: true,
        start: "top 0",
        end:"top -100%",
        scrub:2,
        pin: true
    }
})