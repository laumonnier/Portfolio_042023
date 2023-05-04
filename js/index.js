const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {smooth: true},
    smartphone: {smooth: true},
});

//Body color
scroll.on("scroll", () => {
    console.log("ça scroll!!!");
});