'use strict'

// Our Services

const tabsListOurServices = document.querySelector('.our-services-menu');
tabsListOurServices.addEventListener('click', tabsOurServicesMenu);

function tabsOurServicesMenu(element) {
    const data = element.target.dataset.type;
    document.querySelector('.activeOurServicesText').classList.remove('activeOurServicesText');
    document.querySelector(`[data-block = ${data}]`).classList.add('activeOurServicesText');
    document.querySelector('.activeOurServicesTab').classList.remove('activeOurServicesTab');
    element.target.classList.add('activeOurServicesTab');
}

// Our Amazing Work - Tab Filter


const tabsList = document.querySelectorAll('.our-amazing-work-menu-block');
const imageBlock = document.querySelectorAll('.our-amazing-work-img-block');
const tab = document.querySelector('#portfolioTabsList')
tab.onclick = (e) => {
    let target = e.target;
    tabsList.forEach((elem) => {
        elem.classList.remove('active')
    });
    target.classList.add('active');
    let tabCategory = target.dataset.content;
    imageBlock.forEach((e) => {
        e.classList.add('hidden');
        let cardCategory = e.dataset.content;
        let loadAttr = e.getAttribute('data-load');
        if (tabCategory === 'all' && loadAttr === null) {
            e.classList.remove('hidden');
        } else if (tabCategory === cardCategory && loadAttr === null) {
            e.classList.remove('hidden');
        }
    });
};

// Our Amazing Work - Button Add


const loadMore = document.querySelector('#morePhoto')
loadMore.addEventListener('click', funcLoadMore)

function funcLoadMore() {
    loadMore.style.display = 'none'
    imageBlock.forEach(e => {
        e.removeAttribute('data-load')
    });
    tabsList.forEach((el) => {
        if (el.classList.contains("active")) {
            let a = el.getAttribute("data-content");
            imageBlock.forEach((element) => {
                let we = element.getAttribute("data-content");
                if (a === we) {
                    element.classList.remove('hidden');
                } else if (a === "all") {
                    element.classList.remove('hidden');
                }
            });
        }
    });
}


// What People Say - Slider

let currentSlide = 0;
const navigation = document.querySelectorAll('.people-gallery-icon');
const slides = document.querySelectorAll('.what-people-say-text');
const next = document.querySelector('.arrow-right')
const previous = document.querySelector('.arrow-left')

for (let i = 0; i < navigation.length; i++) {

    navigation[i].onclick = function () {
        currentSlide = i;

        document.querySelector('.what-people-say-text.what-people-say-text-active').classList.remove('what-people-say-text-active');
        document.querySelector('.people-gallery-icon.people-gallery-icon-active').classList.remove('people-gallery-icon-active');
        navigation[currentSlide].classList.add('people-gallery-icon-active');
        slides[currentSlide].classList.add('what-people-say-text-active');
    }
}

next.onclick = function () {
    nextSlide(currentSlide);
};

previous.onclick = function () {
    previousSlide(currentSlide);
};

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    hideSlides();
    currentSlide = (n + slides.length) % slides.length;
    showSlides();
}

function hideSlides() {
    slides[currentSlide].className = 'what-people-say-text';
    navigation[currentSlide].className = 'people-gallery-icon';
}

function showSlides() {
    slides[currentSlide].className = 'what-people-say-text what-people-say-text-active';
    navigation[currentSlide].className = 'people-gallery-icon people-gallery-icon-active';
}







