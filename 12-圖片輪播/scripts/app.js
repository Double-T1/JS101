// 程式碼寫這裡
let currentPic = 0;
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const indi = document.querySelectorAll(".indicator");

//helper functions
const manageNav = function() {
    indi[currentPic].classList.add("active"); 
}

const manageButton = function() {
    if (currentPic === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    } 
    
    if (currentPic === slides.length-1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
}

const changeSlide = function() {
    document.querySelector(".slide-track").innerHTML = `<li class="slide">${slides[currentPic].innerHTML}</li>`;
    manageButton();
    manageNav();
}

const createChangePic = function(target) {
    const changePic = function() {
        indi[currentPic].classList.remove("active");
        currentPic = target;
        changeSlide();
    }
    return changePic;
}

const toNextPic = function() {
    if (currentPic<slides.length-1) {
        indi[currentPic].classList.remove("active");
        currentPic += 1;
        changeSlide();
    } 
}

const toPrevPic = function() {
    if (currentPic>0) {
        indi[currentPic].classList.remove("active");
        currentPic -= 1;
        changeSlide();
    } 
}

//logic starts
changeSlide();

prevButton.addEventListener("click",toPrevPic);
nextButton.addEventListener("click",toNextPic);

//switch indicator
indi.forEach((ele,index) => {
    ele.addEventListener("click",createChangePic(index));
})