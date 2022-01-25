$('.portfolio__slider').slick({
    infinite: true,
    autoplay:true, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    dots: true,

    responsive: [
      {
        breakpoint: 501,
        settings: {
          arrows: false,
        }
      },
    ]
  });