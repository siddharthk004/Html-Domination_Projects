// gsap.to("#box",{
//     x:1612,
//     rotate: 360,
//     backgroundColor: "blue",
//     duration: 3,
//     delay:1 
// })

// gsap.from("#box",{
//     x:1612,
//     rotate: 360,
//     backgroundColor: "blue",
//     duration: 3,
//     delay:1 
// })

var tl = gsap.timeline()

tl.to("#box1",{
    x:1612,
    rotate: 360,
    duration:2,
    delay:1,
    scale:0.5
})
tl.to("#box2",{
    x:1612,
    rotate: 360,
    duration:2,
    scale:0.5
})
tl.to("#box3",{
    x:1612,
    rotate: 360,
    duration:2,
    scale:0.5
})

