// Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 1000 ,
        disableOnInteraction: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// HTML Card
const crossIcon1 = document.getElementById('crossIcon1');
const htmlMsg = document.getElementById('htmlMsg');
const displayImg1 = document.getElementById('htmlCard');

displayImg1.addEventListener('click', () => {
    htmlMsg.style.display = 'block';
});

crossIcon1.addEventListener('click', () => {
    htmlMsg.style.display = 'none';
});

// Bootstrap Card
const crossIcon2 = document.getElementById('crossIcon2');
const bootMsg = document.getElementById('bootMsg');
const displayImg2 = document.getElementById('bootstrapCard');

displayImg2.addEventListener('click', () => {
    bootMsg.style.display = 'block';
});

crossIcon2.addEventListener('click', () => {
    bootMsg.style.display = 'none';
});

// JS Card
const crossIcon3 = document.getElementById('crossIcon3');
const jsMsg = document.getElementById('jsMsg');
const displayImg3 = document.getElementById('jsCard');

displayImg3.addEventListener('click', () => {
    jsMsg.style.display = 'block';
});

crossIcon3.addEventListener('click', () => {
    jsMsg.style.display = 'none';
});

// Java Card
const crossIcon4 = document.getElementById('crossIcon4');
const javaMsg = document.getElementById('javaMsg');
const displayImg4 = document.getElementById('javaCard');

displayImg4.addEventListener('click', () => {
    javaMsg.style.display = 'block';
});

crossIcon4.addEventListener('click', () => {
    javaMsg.style.display = 'none';
});

// CSS Card
const crossIcon5 = document.getElementById('crossIcon5');
const cssMsg = document.getElementById('cssMsg');
const displayImg5 = document.getElementById('cssCard');

displayImg5.addEventListener('click', () => {
    cssMsg.style.display = 'block';
});

crossIcon5.addEventListener('click', () => {
    cssMsg.style.display = 'none';
});

// CSS Card
const crossIcon6 = document.getElementById('crossIcon6');
const js2Msg = document.getElementById('js2Msg');
const displayImg6 = document.getElementById('js2Card');

displayImg6.addEventListener('click', () => {
    cssMsg.style.display = 'block';
});

crossIcon6.addEventListener('click', () => {
    cssMsg.style.display = 'none';
});

// CSS Card
const crossIcon7 = document.getElementById('crossIcon7');
const pyMsg = document.getElementById('pyMsg');
const displayImg7 = document.getElementById('pyCard');

displayImg7.addEventListener('click', () => {
    cssMsg.style.display = 'block';
});

crossIcon7.addEventListener('click', () => {
    cssMsg.style.display = 'none';
});