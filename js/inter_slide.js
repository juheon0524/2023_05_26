        /*인터파크 추천 슬라이드*/
        $(function(){
            function prev3(){
                $('.main2_slide li:last').prependTo('.main2_slide');
                $('.main2_slide').css({marginLeft:-510});
                $('.main2_slide').stop().animate({ marginLeft: 0 }, 800);
            }

            function next3(){
                $('.main2_slide').stop().animate({marginLeft:-510}, function(){
                    $('.main2_slide li:first').appendTo('.main2_slide');
                    $('.main2_slide').css({ marginLeft: 0 });
                });
            }

            function slide3(){
                $('.main2_slide').stop().animate({marginLeft:-510}, function(){
                    $('.main2_slide li:first').appendTo('.main2_slide');
                    $('.main2_slide').css({ marginLeft: 0 });
                });                
            }

            setInterval(slide3,5000);
            $('.inter_prev').click(function(){
                prev3();
            });

            $('.inter_next').click(function(){
                next3();
            });            
        });