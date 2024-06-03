//Header bar
var amountScrolled = 200;
var amountScrolledNav = 25;
$(window).scroll(function () {
  if ($(window).scrollTop() > amountScrolled) {
    $('#topheader').addClass('sticky');
  } else {
    $('#topheader').removeClass('sticky');
  }
});

//   $('#topheader').click(function() {
//     $('html, body').animate({
//       scrollTop: 0
//     }, 1000);
//     return false;
//   });


// Back to top
$(window).scroll(function () {
  if ($(window).scrollTop() > amountScrolled) {
    $('.backto_top').addClass('show');
  } else {
    $('.backto_top').removeClass('show');
  }
});

$('.backto_top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 200);
  return false;
});


//slider
jQuery(document).ready(function ($) {
  var owl = $('.owl-carousel');
  var owl_testimonial = $('.testimonial_sec');
  var owl_announcements_sec = $('.announcements_sec');
  var owl_whatshappening_sec = $('.whatshappening_sec');
  var owl_topbnr_slider = $('.topbnr_slider');
  var owl_placement_slider = $('.placement_slider');



  owl.on('initialize.owl.carousel initialized.owl.carousel ' +
    'initialize.owl.carousel initialize.owl.carousel ' +
    'resize.owl.carousel resized.owl.carousel ' +
    'refresh.owl.carousel refreshed.owl.carousel ' +
    'update.owl.carousel updated.owl.carousel ' +
    'drag.owl.carousel dragged.owl.carousel ' +
    'translate.owl.carousel translated.owl.carousel ' +
    'to.owl.carousel changed.owl.carousel',
    function (e) {
      $('.' + e.type)
        .removeClass('secondary')
        .addClass('success');
      window.setTimeout(function () {
        $('.' + e.type)
          .removeClass('success')
          .addClass('secondary');
      }, 500);
    });
  owl_topbnr_slider.owlCarousel({
    loop: false,
    nav: false,
    lazyLoad: true,
    margin: 0,
    dots: true,
    video: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      960: {
        items: 1,
      },
      1200: {
        items: 1
      }
    }
  });
  owl_testimonial.owlCarousel({
    loop: true,
    nav: false,
    lazyLoad: true,
    margin: 20,
    video: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      960: {
        items: 3,
      },
      1200: {
        items: 4
      }
    }
  });

  owl_whatshappening_sec.owlCarousel({
    loop: true,
    nav: false,
    lazyLoad: true,
    margin: 20,
    video: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      960: {
        items: 3,
      },
      1200: {
        items: 4
      }
    }
  });

  owl_announcements_sec.owlCarousel({
    loop: true,
    nav: false,
    lazyLoad: true,
    margin: 20,
    video: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      960: {
        items: 3,
      },
      1200: {
        items: 4
      }
    }
  });


  owl_placement_slider.owlCarousel({
    loop: true,
    nav: false,
    lazyLoad: true,
    margin: 20,
    video: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      960: {
        items: 2,
      },
      1200: {
        items: 2
      }
    }
  });

  // Custom Button
  $('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function () {
    owl.trigger('prev.owl.carousel');
  });

});



//  Image Model
$(document).ready(function () {
  $('.modelbx-images img').click(function () {
    var imgSrc = $(this).attr('src');
    $('#modalImage').attr('src', imgSrc);
    $('#imageModal').modal('show');
  });
});

