// Need to create a lightbox - An overlay that displays the full size image when the thumbnail is clicked

// Capture the Click event on a link to an image
	// Show the Overlay
	// Update the overlay with the image linked from the thumbnail
	// Make the alt attribute the caption for the image 
// add overlay
	// add image and caption
// When overlay is clicked
	//hide overlay

var $overlay = $('<div id="overlay"> </div>');

$("body").append($overlay);



$("#imgGallery a").click(function(event){
	event.preventDefault();
	// var href = $(this).attr("href");
	$overlay.show();

});





