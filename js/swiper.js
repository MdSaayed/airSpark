const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
    },
    on: {
        init: function () {
            updateNavigationButtons(this);
        },
        slideChange: function () {
            updateNavigationButtons(this);
        },
    },
    breakpoints: {
        640: {
            slidesPerView: 1, // Mobile
        },
        768: {
            slidesPerView: 2, // Tablet
        },
        1024: {
            slidesPerView: 3, // Desktop
        },
    },
});

// work single page
const exclusiveContainer = new Swiper('.exclusive-container', {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


function updateNavigationButtons(swiper) {
    const prevButton = document.querySelector('.custom-swiper-button-prev');
    const nextButton = document.querySelector('.custom-swiper-button-next');

    if (swiper.isBeginning) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }

    if (swiper.isEnd) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}
