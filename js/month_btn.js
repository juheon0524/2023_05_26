        /*주목! 이달의 책버튼*/
        $(function(){
            function prev4(){
                $('.month_ul li:last').prependTo('.month_ul');
                $('.month_ul').css({marginLeft:-450});
                $('.month_ul').stop().animate({ marginLeft: 0 }, 800);
            }

            function next4(){
                $('.month_ul').stop().animate({marginLeft:-450}, function(){
                    $('.month_ul li:first').appendTo('.month_ul');
                    $('.month_ul').css({ marginLeft: 0 });
                });
            }

            function slide5(){
                $('.month_ul').stop().animate({marginLeft:-450}, function(){
                    $('.month_ul li:first').appendTo('.month_ul');
                    $('.month_ul').css({ marginLeft: 0 });
                });                
            }


            setInterval(slide5,5000);
            $('.month_prev1').click(function(){
                prev4();
            });

            $('.month_prev2').click(function(){
                prev4();
            });            

            $('.month_next1').click(function(){
                next4();
            });  
            
            $('.month_next2').click(function(){
                next4();
            });            
        });