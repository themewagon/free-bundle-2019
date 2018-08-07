$(document).ready(function(){


	$(".dropdown-item").click(function(e){
		e.preventDefault();
		var category  = $(this).text();
		$("#dropdownMenuButton").text(category);

		$(".item").removeClass("d-block");
		$(".item").removeClass("d-none");

		$(".item").each(function(){
			var datacategory = $(this).data("category");

			if(category === datacategory){
				$(this).addClass("d-block");
			}else if(category != 'All Categories'){
				$(this).addClass("d-none");
			}
		});
	});
});