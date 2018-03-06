// navbar collapse
$(".button-collapse").sideNav();


// slider
$(document).ready(function(){
	$('.slider').slider({full_width: true});
});



// Fade In Fade Out Menu Button
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.fixed-action-btn').fadeIn();
		} else {
			$('.fixed-action-btn').fadeOut();
		}
	});
});




// SCROLL TO TOP BUTTON
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


// Modal

  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
          


// FORM DROPDOWN

  $(document).ready(function() {
    $('select').material_select();
  });


// PARALLAX

  $(document).ready(function(){
      $('.parallax').parallax();
    });
        

// PUSHPIN

  $('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });



