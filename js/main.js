$(document).ready(function(){
	var newClass = "";
	$('ul.sociallinks i').on('click', function(){ 
		window.location = $(this).attr('data-href'); 
	});
	$('ul.sociallinks i').on('touchstart', function(){ 
		$('ul.sociallinks i').addClass('social-off').removeClass(newClass);
		newClass = $(this).attr('data-hover');
		$(this).removeClass('social-off').addClass(newClass);
		window.location = $(this).attr('data-href'); 
	});
	$('ul.sociallinks i').on('mouseover', function(){ 
		newClass = $(this).attr('data-hover');
		$(this).removeClass('social-off').addClass(newClass);
	});
	$('ul.sociallinks i').on('mouseout', function(){ 
		newClass = $(this).attr('data-hover');
		$(this).addClass('social-off').removeClass(newClass);
	});

	function goToByScroll(id){
	      // Remove "link" from the ID
	    id = id.replace("link", "section");
	    if (id === "homesection") {id = "topsection";}
	      // Scroll
	     scrollTarget = $("#"+id).offset().top - 30;
	     console.log(scrollTarget);
	    $('html,body').animate({
	        scrollTop: scrollTarget},
	        'slow', 'swing');
	}

	$(".navigation a").click(function(e) { 
	      // Prevent a page reload when a link is pressed
	    e.preventDefault(); 
	      // Call the scroll function
	    if ($(this).attr("id")) {
	   		goToByScroll($(this).attr("id"));  
	   	}         
	});

	$(window).scroll(function(){
		$('div.mainlink > ul > li').removeClass('navactive');
		var thisScroll = $(window).scrollTop();
		var scrollOffset 	= 50;
		var scrollAbout 	= ($('#aboutsection').offset().top - scrollOffset);
		var scrollSkills	= ($('#skillssection').offset().top - scrollOffset);
		var scrollWork		= ($('#worksection').offset().top - scrollOffset);
		var scrollContact 	= ($('#contactsection').offset().top - scrollOffset);
		if (thisScroll <= scrollAbout) {
			$('a#homelink').parent().addClass('navactive');
		} else if (thisScroll > scrollAbout && thisScroll <= scrollSkills) {
			$('a#aboutlink').parent().addClass('navactive');
		} else if (thisScroll > scrollSkills && thisScroll <= scrollWork) {
			$('a#skillslink').parent().addClass('navactive');
		} else if (thisScroll > scrollWork && thisScroll <= scrollContact) {
			$('a#worklink').parent().addClass('navactive');
		} else if (thisScroll > scrollContact) {
			$('a#contactlink').parent().addClass('navactive');
		}
	}); 

});