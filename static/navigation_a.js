$(document).ready(function(){

	$("ul.subnav").parent().append("<span></span>");
	$("ul.topnav li span,ul.topnav li a").mouseover(function() {
		$(this).parent().find("ul.subnav").slideDown('fast').show();
		$(this).parent().hover(function() {
		}, function(){	
			$(this).parent().find("ul.subnav").slideUp('slow');
		});
		}).hover(function() { 
			$(this).addClass("subhover");
		}, function(){	//On Hover Out
			$(this).removeClass("subhover");
	});

});