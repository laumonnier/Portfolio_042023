// import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    // tablet: {smooth: true},
    // smartphone: {smooth: true},
});

// //Body color
// scroll.on("scroll", () => {
//     if (document.querySelector(".about-section__title.is-inview")) {
//         document.querySelector(".about-section").style.background = "#000";
//         document.querySelector(".about-section").style.color = "#FFF";
//     }else{        
//         document.querySelector(".about-section").style.background = "#FFF";
//         document.querySelector(".about-section").style.color = "#000";
//     }
// });