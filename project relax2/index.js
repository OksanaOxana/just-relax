gsap.from("h1", {opacity:0, duration: 1, y: 200, delay: 1 })
gsap.from("h2", {opacity: 0, duration: 3.5, repeat: -1, delay: 1.5})
gsap.from(".image", {opacity:0, duration: 1, x: 800, delay: 1.5 })
gsap.from("ul", {opacity: 0, duration: 1, x: -800, delay: 1.5})
gsap.from("#imgStep", {opacity:0, duration: 2.5, x: 200, delay: 3, rotation: 360 })
gsap.from("p", {opacity: 0, duration: 2, x: -200, delay: 3, rotation:720})
gsap.from("#btn", {opacity:0, duration:2.5, delay: 3, repeat: -1, y: -50})


gsap.to("h1", {
    text: "CINNAMON and BONE",
    duration: 4,
    delay: 5,
    repeat:-1,
    yoyo: true
    })

gsap.to(".bon", {
    text: "BON APPETIT",
    duration: 4,
    delay: 5,
    repeat:-1,
    }) 
    
