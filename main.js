const primHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
let isOpened = false;

// Navigation on small devices
navToggle.addEventListener('click', (e) => {
  navToggle.ariaExpanded = primaryNav.hasAttribute('data-visible') ? 'false' : 'true';
  primaryNav.toggleAttribute('data-visible');
  primHeader.toggleAttribute('data-overlay');

  // change open/close icons
  if(isOpened) {
    document.querySelector('.icon-close').classList.add('d-none');
    document.querySelector('.icon-hamburger').classList.remove('d-none');
    isOpened = false;
  } else {
    document.querySelector('.icon-hamburger').classList.add('d-none');
    document.querySelector('.icon-close').classList.remove('d-none');
    isOpened = true;
  }
});

// Slider
const slider = new A11YSlider(document.querySelector('.slider'), {
  slidesToShow: 1,
  arrows: false,
  infinite: true,
  dots: true,
  responsive: {
    576: {
      slidesToShow: 2,
      dots: false
    },
    960: {
      slidesToShow: 3,
    }
  }
});