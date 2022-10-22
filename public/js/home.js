var tl = gsap.timeline();

tl.from(".hero__bg--stagger", {
        duration: 2,
        height: '0%', /* If you don't put % it will calculate height in px */
        ease: "power4.out",
        stagger: 0.1,

    }).from(
        "#hero__bg-img",{
            autoAlpha:0, 
            duration: 5,  
            ease: "power4.out",
            opacity: 0

    },  "-=0.5"   ).from(".hero__el--stagger", {
        duration: 2,
        y: -100,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.1,

    },  "-=6" /* Overlap animation to -2sec with previous */ 
);
