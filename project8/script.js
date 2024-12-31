
gsap.from("#firstpage #circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720
})
gsap.from("#secondpage #circle",{
    scale:0,
    delay:1,
    duration:2,
    scrollTrigger: {
        trigger: "#secondpage #circle",
        scroller:"body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub:2
    },
    rotate:720
})
gsap.from("#thirdpage #circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720
})