$(document).ready(function(){
	$(".arrow").click(function(){
		$("html, body").animate({ scrollTop: $(".content-wrapper").position().top }, "slow");
	});
});

