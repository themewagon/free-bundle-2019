$(document).ready(function(){

	var $grid = $('.grid').masonry({
	  	// options...
	  	itemSelector: '.item',
	  	columnWidth: '.item'
	});

	// filter functions
	var filterFns = {

	};

	// bind filter button click
	$('.category-list').on( 'click', 'a', function(e) {
		e.preventDefault();
		
		var filterValue = $( this ).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$grid.isotope({ filter: filterValue });
	});

	$(".category-list > a").click(function() {
		$("#dropdownMenuButton").text($(this).text()); 
	});

});