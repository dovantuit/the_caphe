
$('#owl-product-menu').owlCarousel({
    nav:true,
    autoplayTimeout:5000,
    dots:true,
    autoplay: false,
    loop:false,
    margin:10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2,
        margin:5
      }
    }
  });
  