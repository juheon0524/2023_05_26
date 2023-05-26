        /*slider*/
        $(function(){
            let i=0;
            $(".nav2_wrap li").eq(i).css({borderTop:"3px solid red", margin:"-1px 0 0 0",padding:"20px 0 0 0"});

            $(".nav2_wrap li").mouseenter(function(){
                i=$(this).index()
            });
            
            function slide(){
                i++;
                if(i > $(".main_slide:last").index()){
                    i=0;
                }
                $(".main_slide").eq(i).stop().fadeIn("slow");
                $(".main_slide").eq(i-1).stop().fadeOut("slow");

                if(i==1){
                    $(".nav2_wrap li").eq(i-1).css({color:"black", borderTop:"none"});
                    $(".nav2_wrap li").eq(i).css({borderTop:"3px solid red", margin:"-1px 0 0 0",padding:"20px 0 0 0"})
                } else if(i==2){
                    $(".nav2_wrap li").eq(i-1).css({color:"black", borderTop:"none"});
                    $(".nav2_wrap li").eq(i).css({borderTop:"3px solid red", margin:"-1px 0 0 0",padding:"20px 0 0 0"})                    
                } else if(i==3){
                    $(".nav2_wrap li").eq(i-1).css({color:"black", borderTop:"none",margin:"-1px 0 0 0"});
                    $(".nav2_wrap li").eq(i).css({borderTop:"3px solid red", margin:"-1px 0 0 0",padding:"20px 0 0 0"})                    
                } else if(i==4){
                    $(".nav2_wrap li").eq(i-1).css({color:"black", borderTop:"none",margin:"-1px 0 0 0"});
                    $(".nav2_wrap li").eq(i).css({borderTop:"3px solid red", margin:"-1px 0 0 0",padding:"20px 0 0 0"})                    
                } else {
                    $(".nav2_wrap li").eq(i-1).css({color:"black", borderTop:"none"});
                    $(".nav2_wrap li").eq(i).css({borderTop:"3px solid red", margin:"-1px 0 0 0",padding:"20px 0 0 0"})                    
                }
            }

            $(".nav2_wrap li").eq(0).mouseenter(function(){
                var i=0;
                $(".nav2_wrap li").css({borderTop:"none"});
                $(this).css({borderTop:"3px solid red",margin:"-1px 0 0 0",padding:"20px 0 0 0"});
                $(".main_slide").stop().hide();
                $(".main_slide").eq(0).stop().show();
            });

            $(".nav2_wrap li").eq(1).mouseenter(function(){
                var i=0;
                $(".nav2_wrap li").css({borderTop:"none"});
                $(this).css({borderTop:"3px solid red",margin:"-1px 0 0 0",padding:"20px 0 0 0"});
                $(".main_slide").stop().hide();
                $(".main_slide").eq(1).stop().show();
            });
            
            $(".nav2_wrap li").eq(2).mouseenter(function(){
                var i=0;
                $(".nav2_wrap li").css({borderTop:"none"});
                $(this).css({borderTop:"3px solid red",margin:"-1px 0 0 0",padding:"20px 0 0 0"});
                $(".main_slide").stop().hide();
                $(".main_slide").eq(2).stop().show();
            });
            
            $(".nav2_wrap li").eq(3).mouseenter(function(){
                var i=0;
                $(".nav2_wrap li").css({borderTop:"none"});
                $(this).css({borderTop:"3px solid red",margin:"-1px 0 0 0",padding:"20px 0 0 0"});
                $(".main_slide").stop().hide();
                $(".main_slide").eq(3).stop().show();
            });
            
            let ani = setInterval(slide,5000)
            $(".nav2_wrap li").mouseover(function(){
                clearInterval(ani);
            });
            $(".nav2_wrap li").mouseout(function(){
                $(this).css({borderTop: "3px solid red", margin: "-1px 0 0 0",padding:"20px 0 0 0"});
                ani = setInterval(slide,5000);
            });
        });