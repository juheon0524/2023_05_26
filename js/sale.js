        /*특가할인 정가할인 버튼*/
        $(function(){
            function prev5(){
                $('.main6_sale_ul li:last').prependTo('.main6_sale_ul');
                $('.main6_sale_ul').css({marginLeft:0});
                $('.main6_sale_ul').stop().animate({ marginLeft: 0 }, 800);                
            }

            function next5(){
                $('.main6_sale_ul').stop().animate({marginLeft:0}, function(){
                    $('.main6_sale_ul li:first').appendTo('.main6_sale_ul');
                    $('.main6_sale_ul').css({ marginLeft: 0 });
                });                
            }

            $('.sale_prev').click(function(){
                prev5();
            });
            
            $('.sale_next').click(function(){
                next5();
            });  

        });

        $(function(){
            function prev6(){
                $('.main6_sale_ul2 li:last').prependTo('.main6_sale_ul2');
                $('.main6_sale_ul2').css({marginLeft:0});
                $('.main6_sale_ul2').stop().animate({ marginLeft: 0 }, 800);                
            }

            function next6(){
                $('.main6_sale_ul2').stop().animate({marginLeft:0}, function(){
                    $('.main6_sale_ul2 li:first').appendTo('.main6_sale_ul2');
                    $('.main6_sale_ul2').css({ marginLeft: 0 });
                });                
            }

            $('.sale_prev').click(function(){
                prev6();
            });
            
            $('.sale_next').click(function(){
                next6();
            });  
            
        });   
        
        $(function(){
            $('.main6_box2_menu li:first').click(function(){
                $('.main6_sale_ul').show();
                $('.main6_sale_ul2').hide();
                $('.main6_box2_menu li:first').addClass("sale_li");
                $('.main6_box2_menu li:nth-child(2)').removeClass("sale_li");
            });
            $('.main6_box2_menu li:nth-child(2)').click(function(){
                $('.main6_sale_ul2').show();
                $('.main6_sale_ul').hide();
                $('.main6_box2_menu li:nth-child(2)').addClass("sale_li");
                $('.main6_box2_menu li:first').removeClass("sale_li");                
            });
        });