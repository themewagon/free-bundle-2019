$(document).ready(function(){

	
	navbar();

	$(window).resize(function(){
		$(".nav-item").removeAttr("style")
		$(".category-list").html(' ');
		navbar();
	});

	function navbar(){
		var totalWidth = 0;
		var navbarWidth = $(".navbar").width() - $(".navbar .dropdown").width();

		$(".nav-item").each(function(){

				totalWidth += $(this).width();

				if(totalWidth > navbarWidth){
					if(!$(this).hasClass("dropdown")){
						$(this).hide();
						var link = $(this).html();

						$(".category-list").append(link);
					}
				}
		});
	}

	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$(".back-to-top").css("opacity","1");
		}
		else{

			$(".back-to-top").css("opacity","0");
		}
	});

	$(".back-to-top").click(function(e){
		$("html, body").animate({ scrollTop: 0 },"slow");

		return false;
	});

}), $(window).on("load",function(){

	var $grid = $('.grid').masonry({
	  	// options...
	  	itemSelector: '.item',
	  	columnWidth: '.item'
	});

	// filter functions
	var filterFns = {};

	// bind filter button click
	$('.navbar').on( 'click', 'a', function(e) {
		e.preventDefault();
		
		var filterValue = $( this ).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$grid.isotope({ filter: filterValue });
	});
	
});