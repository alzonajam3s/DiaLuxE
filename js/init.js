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


