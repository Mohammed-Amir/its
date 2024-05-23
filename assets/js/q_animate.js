var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

$cart = $(".cart");

$("button.coincollect_btn").on("click", function(){
    $btn = $(this);
    var $coin = $('<div class="coinicon">')
    
        .insertAfter($btn)
        .css({
            "left": $btn .offset().left,
            "top": $btn .offset().top
        })
        .animate({
            "top": $cart.offset().top,
            "left": $cart.offset().left
        }, 1500, function() {
            $coin.remove();
        });
        $('.coincollect').html(function(i, val) { return val*1+1 });
});

var coincollectmp = new Audio('../assets/images/question/winning-a-coin-game.wav');


var jumpbtn = new Audio('../assets/images/question/jump_button.mp3');



//var bgsound = new Audio('../assets/images/question/question-bgsound.mp3');
window.onload = function() {
  //var bgsound = document.getElementById("bgaudio").play();
  document.getElementById("bgaudio").play();
  volume = 0.1;
   
}
 

 

$(document).on('click', 'button.next, button.prev', function() {
    var _link = $(this);
   if(_link.hasClass('audio-2')) {
     audio2.play();
   } else {
    jumpbtn.play();
   } 
});


$(document).on('click', 'button.coincollect_btn', function() {
    var _link = $(this);
    
   if(_link.hasClass('audio-2')) {
     audio2.play();
   } else {
    coincollectmp.play();
   }
  //  $('.coincollect').html(function(i, val) { return val*1+1 });
   //Materialize.toast('You have clicked me!', 2000)
});

$('.next').on("click", function(){
  const $active = $('.kbc_questionbx.active');
  const $next = $active.next();

  if ($next.length) {
    $active.removeClass('active');
    $next.addClass('active');
 

    // bof:animate
  
      $('.kbc_questionbx').each(function(i) {
          $(this).attr('data-aos', 'fade-right');
      });
      AOS.init({
          easing: 'ease-out-back',
          duration: 500,
          delay: 500,
          once: true,
          disable: 'mobile'
      });
  
    //eof:animate

  }
})


$('.prev').on("click", function(){
  const $active = $('.kbc_questionbx.active');
  const $prev = $active.prev();

  if ($prev.length) {
    $active.removeClass('active');
    $prev.addClass('active');
    // bof:animate
  
    $('.kbc_questionbx').each(function(i) {
      $(this).attr('data-aos', 'fade-right');
  });
  AOS.init({
      easing: 'ease-out-back',
      duration: 500,
      delay: 500,
      once: true,
      disable: 'mobile'
  });

//eof:animate
  }
})
 
/// TRY animation
$( ".nextBtnEase" ).click(function(e) {
	goRightEase();
});
$( ".backBtnEase" ).click(function(e) {
	goLeftEase();
});


function goRightEase(){ // inner stuff slides left
	var initalLeftMargin = $( ".innerbody" ).css('margin-left').replace("px", "")*1;
	var newLeftMargin = (initalLeftMargin - 302); // extra 2 for border
	$( ".innerbody" ).animate({ marginLeft: newLeftMargin }, 1000, 'easeOutBounce');
}
function goLeftEase(){ // inner stuff slides right
	var initalLeftMargin = $( ".innerbody" ).css('margin-left').replace("px", "")*1;
	var newLeftMargin = (initalLeftMargin + 302); // extra 2 for border
	$( ".innerbody" ).animate({ marginLeft: newLeftMargin }, 1000, 'easeOutBounce');
}
