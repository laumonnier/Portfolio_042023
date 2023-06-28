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

// (function(){
//     window.onload = function(){
//         var w_screen = document.getElementById("as-g__col2").clientWidth;
//         var h_screen = document.getElementById("as-g__col2").clientHeight;
//         var img = document.getElementById("animate");
//         var w_img = document.images["as-g__col2--like-programming"].width;
//         var h_img = document.images["as-g__col2--like-programming"].height;

//         img.style.position="absolute";
//         img.style.top=(h_screen-h_img)/7+'px';

//         var x= -w_img;
//         setInterval(function(){
//             img.style.left=(x+=5)+'px';
//             if(parseInt(img.style.left)>w_screen) {
//                 x=-w_img;
//             }
//         }, 40);
//     };
// })();