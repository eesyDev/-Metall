    
    window.addEventListener('DOMContentLoaded', function() {
        $(document).ready(function() {
            $(window).scroll(function() {
                var wScroll = $(this).scrollTop();
    
                if (wScroll > 20) {
                    $('.header').addClass('active');
                    $('.slide-menu').addClass('scrolled');
                }
                else {
                    $('.header').removeClass('active');
                    $('.slide-menu').removeClass('scrolled');
                }
            });
    
            $('.bars').on('click', function(e) {
                e.preventDefault();
                $(this).addClass('open');
                $('.slide-menu').toggleClass('open');
    
                if ($('.slide-menu').hasClass('open')) {
                    $('.close-menu').on('click', function(e) {
                        e.preventDefault();
                        $('.slide-menu').removeClass('open');
                    });
                }
            });
    
            wow = new WOW(
                {
                boxClass:     'wow',      // default
                animateClass: 'animated', // default
                offset:       0,          // default
                mobile:       true,       // default
                live:         true        // default
            }
            );
            wow.init();
        });
    });

    $("a.ajax-link").live("click", function() {
        $this = $(this);
        var link = $this.attr('href');
        var currentUrl = $(location).attr('href');
        if (link != currentUrl && link != '#') {
            $.ajax({
                url:link,
                processData:true,
                dataType:'html',
                success:function(data){
                    document.title = $(data).filter('title').text();
                }
            })
        }
    });