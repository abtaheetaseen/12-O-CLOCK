// Swiper Categories
var swiper = new Swiper(".categories-container", {
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 25,
        },
      },
  });


// Accessories Section

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabcontent) => {
      tabcontent.classList.remove('active-tab');
    });
    target.classList.add('active-tab');

    tabs.forEach((tab) =>{
      tab.classList.remove('active-tab');
    });
    tab.classList.add('active-tab');
  });
  
});
