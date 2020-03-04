
$('#owl-recipes').owlCarousel({
    margin: 20,
    nav:true,
    autoplayTimeout:5000,
    dots:false,
    autoplay: false,
    loop:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
