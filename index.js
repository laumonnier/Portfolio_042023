// import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {smooth: true},
    smartphone: {smooth: true},
});

//Body color
scroll.on("scroll", () => {
    if (document.querySelector(".about-section__title.is-inview")) {
        document.querySelector(".about-section").style.background = "#000";
        document.querySelector(".about-section").style.color = "#FFF";
    }else{        
        document.querySelector(".about-section").style.background = "#FFF";
        document.querySelector(".about-section").style.color = "#000";
    }
});

var message = "Hello World!!! I'm Laurent MONNIER";
var msgCount = 0;
var blinkCount = 0;
var blinkFlg = 0;
var timer1, timer2;
var messageName = document.getElementById("messageName");

function textFunc() {
    messageName.innerHTML = message.substring(0, msgCount);

        if(msgCount == message.length) {
            //Stop Timer
            clearInterval(timer1);

            //Start blinking animation!
            // timer2 = setInterval("blinkFunct()", 200);
        }else {
            msgCount++;
        }
    
}

function blinkFunct() {

    // Blink 10 times
    if (blinkCount < 11) {
        if(blinkFlg == 0) {
            messageName.innerHTML = message;
            blinkFlg = 1;
            blinkCount++;
        } else {
            messageName.innerHTML = "";
            blinkFlg = 0;
        }
    } else {
        //Stop Timer
        clearInterval(timer2);
    }
}

timer1 = setInterval("textFunc()", 150); //Every 150 milliseconds
