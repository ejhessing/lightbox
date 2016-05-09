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
var $img = $('<img>');
var $caption = $('<p></p>');

$overlay.append($img);
$overlay.append($caption);

$("body").append($overlay);



$("#imgGallery a").click(function(event){
	event.preventDefault();
	
	//add image
	var imgLink = $(this).attr("href");
	$img.attr("src", imgLink);
	//add caption
	var captionText = $(this).children("img").attr("alt")
	$caption.text(captionText);
	

	$overlay.show();

});

$overlay.click(function(){
	$overlay.hide();
})




