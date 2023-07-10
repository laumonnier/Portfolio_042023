// Hello world home-title animation

var message1 = "Hello World!!!";
var message2 =  "I'm Laurent MONNIER";
var msgCount1 = 0;
var msgCount2 = 0;
var blinkCount = 0;
var blinkFlg = 0;
var timer1, timer2, timer3, timer4, timer5, timer6;
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

timer3 = setInterval("textFunc2()", 250); //Every 250 milliseconds


//**********************************************************************************


//IntersectionObserver

// For the skills animations
const ratioSkills = 0.3;
const optionsSkills = {
    root: null,
    rootMargin: '0px',
    threshold: ratioSkills,
}

const handleIntersectSkills = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratioSkills) {
            entry.target.classList.add('reveal-animation');
            observer.unobserve(entry.target);
        }
    });
}

document.documentElement.classList.add('reveal-loaded');
const observerSkills = new IntersectionObserver(handleIntersectSkills, optionsSkills);
observerSkills.observe(document.querySelector('.reveal'));

const ratioSkillsText = 0.5;
const optionsSkillsText = {
    root: null,
    rootMargin: '0px',
    threshold: ratioSkillsText,
}

const handleIntersectSkillsText = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratioSkillsText) {
            entry.target.classList.add('appear-animation');
            observer.observe(entry.target);
        }
    });
}

const observerSkillsText = new IntersectionObserver(handleIntersectSkillsText, optionsSkillsText);
observerSkillsText.observe(document.querySelector('.appear'));


//**********************************************************************************


//The scramble animation

//TextScramble

class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}-=+*^?#________'
        this.update = this.update.bind(this)        
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++)
    {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
                char = this.randomChar()
                this.queue[i].char = char
            }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [

  '<strong>Laurent MONNIER</strong>,',
  'progressera au fur et à mesure du temps',
  'sois en tant qu\'<strong>"Autodidacte"</strong>',
  'ou bien grâçe à <strong>votre Entreprise</strong> !',
  'Vous me ferez <strong>confiance</strong> dans la gestion de mes projets,',
  'de mon <strong>"Sérieux"</strong> concernant l\'art du "Développement Web" !',
  'Ma <strong>curiosité</strong> et mon <strong>engagement</strong>,',
  'dans l\'apprentissage de nouveaux <strong>"Langages"</strong> et <strong>"Technologies !"</strong>',
  'Voilà son futur tout tracé !!!'
]

const el = document.querySelector('.text-decoding')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2800)
    })
    counter = (counter + 1) % phrases.length
}  
next()


//**********************************************************************************


//Slides animations

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); //Change image every 2 seconds
}


//**********************************************************************************