// Javascript and jQuery

$(document).ready(function() {
	// This code will only run when the HTML document is loaded.

	// Functions for the "Who" page
	$("#show_isps").hide();

	$("#users").click(function(e){
		e.preventDefault();
		$(this).addClass("tab_active");
		$("#isps").removeClass("tab_active");
		$("#content_navLeft").addClass("tab_active");
		$("#content_navRight").removeClass("tab_active");
		$("#show_users").show();
		$("#show_isps").hide();
	});

	$("#isps").click(function(e){
		e.preventDefault();
		$(this).addClass("tab_active");
		$("#users").removeClass("tab_active");
		$("#content_navRight").addClass("tab_active");
		$("#content_navLeft").removeClass("tab_active");
		$("#show_isps").show();
		$("#show_users").hide();
	});


    // Script for collapsing menu
    $("#nav_menu nav").hide();
    $("#menu_button").click(function(e){
        e.preventDefault();
        $("#nav_menu nav").slideToggle("fast", function() {
        });
    });

	// Script for scrolling and navigation
	// jquery.scrollTo created by Ariel Flesler (http://flesler.blogspot.ca/2007/10/jqueryscrollto.html)
    // Source from (http://callmenick.com/post/single-page-site-with-smooth-scrolling-highlighted-link-and-fixed-navigation)

    $("#nav_menu nav a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
        $("#nav_menu nav").slideToggle("fast", function() {
        }); 
    });

    $("#nav_header nav a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });

    $("#nav_top nav a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });

    var aChildren = $("#nav_header nav li").children(); 
    var aArray = [];
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } 

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); 
        var windowHeight = $(window).height(); 
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; 
            var divHeight = $(theID).height(); 
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("nav-active");
            } else {
                $("a[href='" + theID + "']").removeClass("nav-active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                $("nav li:last-child a").addClass("nav-active");
            }
        }
    });
});