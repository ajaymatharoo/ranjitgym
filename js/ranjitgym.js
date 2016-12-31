$(document).ready(function () {
/*    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
	*/
	$("#my-slider").swiperight(function() {
		$(this).carousel('prev');
	});
	$("#my-slider").swipeleft(function() {
		$(this).carousel('next');
	});
});