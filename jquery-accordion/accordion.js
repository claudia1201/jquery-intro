$(document).on("ready", function(){

	$(".selection").each(function(index,selection){
		
		var $selection = $(selection)

		$selection.attr("paragraph-selector", index)

		$( $(".content")[index]).attr('paragraph-selector',index)
		
		
	})

	$(".selection").on("click", function(){

		$(".selection").removeClass("active")

		$(this).addClass("active")

		$(".content").removeClass("active")

		$(".content[paragraph-selector='" + $(this).attr("paragraph-selector") + "']").addClass("active")

	})

	$(".selection:eq(0), .content:eq(0)").addClass("active")
})


