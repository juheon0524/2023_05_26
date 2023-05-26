        /*분야별 추천_nav*/
        $(function(){
            var i=0;
            $("#main5 > .main5_wrap > #main5_nav > li").mouseenter(function(){
                i = ($(this).index())+1
                $("#main5 > .main5_wrap > div").hide()
                $("#main5 > .main5_wrap > #main5_nav > li").css({
                        "border-bottom":"none",
                        "color":"#000   "
                }); 
                $("#main5 > .main5_wrap > #main5_nav > li:hover").css({
                        "border-bottom":"2px solid #e66a57",
                        "color":"#e66a57"
                });  
                $("#main5 > .main5_wrap > div:nth-of-type"+"("+i+")").stop().fadeIn("fast");

                if(i==3||i==4){
                $(".main5_imgbox").attr("src","img/main5_img2.jpg");
            } else if(i==5||i==6){
                $(".main5_imgbox").attr("src","img/main5_img3.jpg");
            } else {
                $(".main5_imgbox").attr("src","img/main5_img1.jpg");
            }                                            
            });
        });