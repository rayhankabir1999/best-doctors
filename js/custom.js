$(window).scroll(function(){

    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
    
        $(".navbar").addClass("nav_bg");
    
    }else{
        $(".navbar").removeClass("nav_bg");
    }
    
    });
    