
/* VARIABLES AND FUNCTIONS */

var animateFlag = true;

function listAnimation() {
	if ($(window).width() < 768 && $(window).height() > 500 && animateFlag == true) {
  		animateFlag = false;
		$( '.list' ).animate({top: '50%'}, 100);
		$( '.description' ).animate({opacity: 0}, 500);
	}
}

function bulletAnimation(listItem) {
	$(".bullet").stop(true,true);
    var liClass = $( listItem ).attr("class");
    var bulletClass = '.bullet' + liClass;
    $( bulletClass ).fadeIn();
    $( '.bullet' ).not( bulletClass ).fadeOut();
    var position = $( bulletClass ).position().left - 200;
    $(".wrapper").scrollTo(position,500);
}

/* HOVER ON LIST ELEMENT */

$( ".listSection ul li" ).hover(
	function() {

		$( 'h1' ).animate({opacity: 0}, 500); // FADE OUT "WORLD AHEAD"
  		listAnimation();
  		bulletAnimation(this);

  }, function() {

  }
);

/* MOBILE MENU */

$('.mobileMenu').css('top',$('.titleSection').height());

$( ".hamburger" ).click(function() {
	$( ".mobileMenu" ).slideToggle( "slow", function() {

  });
});


