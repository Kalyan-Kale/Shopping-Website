tl = gsap.timeline();

tl.from(".navbar",{
    y:-20,
    opacity:0,
    duration:1
    })

    .from(".nav-contain",{
        y:20,
        opacity:0,
    })
    .from(".hero-section h2,p",{
        y:20,
        opacity:0,
        stagger:0.5
    })
    .from(".hero-section .btn",{
        opacity:0,
        scale:0,
        duration:0.6,
    })
    .from(".hero-section .hero-col2 img",{
        opacity:0,
        scale:0,
        duration:0.6,
    })
    .from(".shop-heading h3",{
        opacity:0,
        duration:0.6,
        y:30
    })
