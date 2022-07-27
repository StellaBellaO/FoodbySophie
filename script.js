function loader(){
      document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut(){
      setInterval(loader, 3000);
  }

  window.onload = fadeOut();

  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
