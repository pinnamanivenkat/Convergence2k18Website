(function ($) {
    $('.event-theme').on('click',function(){
        $('.event-theme').each(function() {
            $(this).removeClass("active");
        })
        $(this).addClass("active"); 
        var themeTitle = $(this).text();
        themeTitle ='#'+themeTitle;
        $('.event-cards').each(function() {
            $(this).removeClass("active-cards");
        })
        console.log(themeTitle);
        $(themeTitle).addClass("active-cards");
        
    })
    
    
})(jQuery);
