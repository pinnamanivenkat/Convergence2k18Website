(function($) {
    var animData = {
        wrapper: document.getElementById('preloader'),
        animType: 'svg',
        prerender: true,
        loop: false,
        autoplay: true,
        path: 'drop_loading.json'
    };
    var anim = bodymovin.loadAnimation(animData);

    anim.addEventListener('complete',function() {
        if(document.readyState === "complete" || document.readyState === "interactive") {
            anim.stop();
            $('#preloader').hide('fast');
        } else {
            anim.play();
        }
    })
})(jQuery);
