// ---------------------------------------------------------- Start Catching Elements ---------------------------------- //
let navbarBtn = document.querySelector('#menu-btn');
let navbarBtnSpan = document.querySelectorAll('#menu-btn span');
let navbarMenuOverlay = document.querySelector('#overlay');
let navbarMenu = document.querySelector('#navbar-menu');
let navbarLinks = document.querySelectorAll('.link-item');

// ---------------------------------------------------------- End Catching Elements ---------------------------------- //

// ------------------------------------------------------------ Start navbar click listener ------------------------------ //
navbarBtn.addEventListener('click', openNavBarMenuAndClosed);

navbarMenuOverlay.addEventListener('click', openNavBarMenuAndClosed);
// ------------------------------------------------------------ End navbar click listener ------------------------------ //

// ------------------------------------------------------------ Start openNavBarMenuAndClosed Function ------------------------------ //

function openNavBarMenuAndClosed() {
  navbarLinks.forEach((el) => {
    el.classList.toggle(`animate-linksAnimate6`);
  });
  navbarBtnSpan[0].classList.toggle('w-1/4');
  navbarBtnSpan[0].classList.toggle('span-open-1');

  navbarBtnSpan[2].classList.toggle('w-3/4');
  navbarBtnSpan[2].classList.toggle('span-open-2');

  navbarBtn.classList.toggle('left-0');
  navbarBtn.classList.toggle('btn-open');

  navbarMenu.classList.toggle('w-0');
  navbarMenu.classList.toggle('open-menu');
  navbarMenu.classList.toggle('-right-20');
  navbarMenu.classList.toggle('right-0');
  navbarMenu.classList.toggle('hidden');

  navbarMenuOverlay.classList.toggle('hidden');
}
// ------------------------------------------------------------ End openNavBarMenuAndClosed Function ------------------------------ //

//---------------------------------------------------- Initialize Swiper ----------------------------------------------------------- //

var swiper = new Swiper('.mySwiper3', {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination3',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 23,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 23,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 23,
    },
  },
});

var swiper = new Swiper('.mySwiper2', {
  slidesPerView2: 1,
  centeredSlides: false,
  loop: true,
  spaceBetween: 5,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
});

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
