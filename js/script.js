gsap.config()

gsap.to(".box", {
    rotate: 360,
    duration: 2,
    repeat: -1
});

MouseEvent.on("move", (event) => {
    gsap.to(".box", {
        x: event.clientX,
        y: event.clientY,
        duration: 0.5,
        ease: "power2.out"
    });
});


