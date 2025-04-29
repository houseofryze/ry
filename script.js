document.addEventListener("DOMContentLoaded", (event) => {

    gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

    let smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 2,
        smoothTouch: 0.1,
        effects: true
    })
    
    let loadTl = gsap.timeline();
    loadTl.from(".hero_background-wrapper", {opacity: 0, duration: 2.5});
    loadTl.from(".nav", {opacity: 0, duration: 2.5, ease:"power4.inOut"}, "<")
    loadTl.from(".hero_content-wrapper", {opacity: 0, y: "32px", duration: 2.5, ease: "power4.inOut"}, "<0.25");
    loadTl.from(".hero_card-list-wrapper", {opacity: 0, y: "32px", duration: 2.5, ease:"power4.inOut"}, "<0.25")

});
