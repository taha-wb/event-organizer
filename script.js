let bars = document.querySelector('.fa-bars');
let menu = document.querySelector('header ul');


bars.onclick = () => {
bars.classList.toggle('fa-times');
menu.classList.toggle('active');
}


let togglerBtn = document.querySelector('.toggler-btn i');
let themeToggler = document.querySelector('.theme-toggler');

togglerBtn.onclick = () => {
  themeToggler.classList.toggle('active');
}

window.onscroll = () => {
  themeToggler.classList.remove('active');
}

let colorBtns = document.querySelectorAll('.color-btns .theme-btn');


colorBtns.forEach(btn => {
  btn.onclick = () => {
    let color = btn.style.background ;
    document.querySelector(':root').style.setProperty('--main-color',color);
  }
 
})


var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
      delay: 3000,
      disableOnInteraction:false,
    }
  });

  var swiper1 = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction:false,
  }
});