// import LocomotiveScroll from "locomotive-scroll";

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     tablet: {smooth: true},
//     smartphone: {smooth: true},
// });

//Body color
// scroll.on("scroll", () => {
//     if (document.querySelector(".about-section__title.is-inview")) {
//         document.querySelector(".about-section").style.background = "#000";
//         document.querySelector(".about-section").style.color = "#FFF";
//     }else{        
//         document.querySelector(".about-section").style.background = "#FFF";
//         document.querySelector(".about-section").style.color = "#000";
//     }
// });

var message1 = "Hello World!!!";
var message2 =  "I'm Laurent MONNIER";
var msgCount1 = 0;
var msgCount2 = 0;
var blinkCount = 0;
var blinkFlg = 0;
var timer1, timer2, timer3, timer4;
var messageHello = document.getElementById("messageHello");
var messageName = document.getElementById("messageName");

function textFunc1() {
    messageHello.innerHTML = message1.substring(0, msgCount1);
    
        if(msgCount1 == message1.length) {
            //Stop Timer
            clearInterval(timer1);
            
            //Start blinking animation!
            // timer2 = setInterval("blinkFunct1()", 200);
        }else {
            msgCount1++;
        }    
}

function blinkFunct1() {

    // Blink 10 times
    if (blinkCount < 11) {
        if(blinkFlg == 0) {
            messageHello.innerHTML = message1;
            blinkFlg = 1;
            blinkCount++;
        } else {
            messageHello.innerHTML = "";
            blinkFlg = 0;
        }
    } else {
        //Stop Timer
        clearInterval(timer2);
    }
}

timer1 = setInterval("textFunc1()", 150); //Every 150 milliseconds

function textFunc2() {
    messageName.innerHTML = message2.substring(0, msgCount2);

        if(msgCount2 == message2.length) {
            //Stop Timer
            clearInterval(timer3);
            //Start blinking animation!
            // timer4 = setInterval("blinkFunct2()", 220);
        }else {
            msgCount2++;
        }
    
}

function blinkFunct2() {

    // Blink 3 times
    if (blinkCount < 4) {
        if(blinkFlg == 0) {
            messageName.innerHTML = message2;
            blinkFlg = 1;
            blinkCount++;
        } else {
            messageName.innerHTML = "";
            blinkFlg = 0;
        }
    } else {
        //Stop Timer
        clearInterval(timer4);
    }
}

timer3 = setInterval("textFunc2()", 250); //Every 150 milliseconds