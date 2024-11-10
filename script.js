// 初始化所有幻燈片索引
let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;

// 顯示第一個簡報的幻燈片
function showSlides1(n) {
    let slides = document.getElementsByClassName("sc1")[0].getElementsByClassName("slide");
    if (n > slides.length) { slideIndex1 = 1 }
    if (n < 1) { slideIndex1 = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex1 - 1].style.display = "block";
    setActiveDot1(slideIndex1);
}

// 顯示第二個簡報的幻燈片
function showSlides2(n) {
    let slides = document.getElementsByClassName("sc2")[0].getElementsByClassName("slide");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "block";
    setActiveDot2(slideIndex2);
}

// 顯示第三個簡報的幻燈片
function showSlides3(n) {
    let slides = document.getElementsByClassName("sc3")[0].getElementsByClassName("slide");
    if (n > slides.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex3 - 1].style.display = "block";
    setActiveDot3(slideIndex3);
}

// 改變幻燈片索引
function changeSlide1(n) {
    showSlides1(slideIndex1 += n);
}

function changeSlide2(n) {
    showSlides2(slideIndex2 += n);
}

function changeSlide3(n) {
    showSlides3(slideIndex3 += n);
}

// 設置圓點為激活狀態
function setActiveDot1(n) {
    let dots = document.getElementsByClassName("dot1");
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n - 1].className += " active";
}

function setActiveDot2(n) {
    let dots = document.getElementsByClassName("dot2");
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n - 1].className += " active";
}

function setActiveDot3(n) {
    let dots = document.getElementsByClassName("dot3");
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n - 1].className += " active";
}

// 讓圓點導航可以跳轉到對應的幻燈片
function setSlide1(n) {
    slideIndex1 = n;
    showSlides1(slideIndex1);
}

function setSlide2(n) {
    slideIndex2 = n;
    showSlides2(slideIndex2);
}

function setSlide3(n) {
    slideIndex3 = n;
    showSlides3(slideIndex3);
}

// 初始化顯示第一張幻燈片
showSlides1(slideIndex1);
showSlides2(slideIndex2);

// 顯示第一個簡報的幻燈片
function showSlides1(n) {
    let slides = document.getElementsByClassName("sc1")[0].getElementsByClassName("slide");
    if (n > slides.length) { slideIndex1 = 1 }
    if (n < 1) { slideIndex1 = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex1 - 1].style.display = "block";
    setActiveDot1(slideIndex1);
}

// 顯示第二個簡報的幻燈片
function showSlides2(n) {
    let slides = document.getElementsByClassName("sc2")[0].getElementsByClassName("slide");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "block";
    setActiveDot2(slideIndex2);
}

// 顯示第三個簡報的幻燈片
function showSlides3(n) {
    let slides = document.getElementsByClassName("sc3")[0].getElementsByClassName("slide");
    if (n > slides.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex3 - 1].style.display = "block";
    setActiveDot3(slideIndex3);
}

// 改變幻燈片索引
function changeSlide1(n) {
    showSlides1(slideIndex1 += n);
}

function changeSlide2(n) {
    showSlides2(slideIndex2 += n);
}

function changeSlide3(n) {
    showSlides3(slideIndex3 += n);
}

// 設置圓點為激活狀態
function setActiveDot1(n) {
    let dots = document.getElementsByClassName("dot1");
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n - 1].className += " active";
}

function setActiveDot2(n) {
    let dots = document.getElementsByClassName("dot2");
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n - 1].className += " active";
}

function setActiveDot3(n) {
    let dots = document.getElementsByClassName("dot3");
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n - 1].className += " active";
}

// 讓圓點導航可以跳轉到對應的幻燈片
function setSlide1(n) {
    slideIndex1 = n;
    showSlides1(slideIndex1);
}

function setSlide2(n) {
    slideIndex2 = n;
    showSlides2(slideIndex2);
}

function setSlide3(n) {
    slideIndex3 = n;
    showSlides3(slideIndex3);
}

// 初始化顯示第一張幻燈片
showSlides1(slideIndex1);
showSlides2(slideIndex2);
showSlides3(slideIndex3);