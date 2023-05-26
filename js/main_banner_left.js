        /*main_banner_left*/
        $(function(){
            function prev2(){
                $(".left_banner li:last").prependTo(".left_banner");
            }
            function next2(){
                $(".left_banner li:first").appendTo(".left_banner");
            }
            $(".main_banner_prev").click(function(){
                prev2();
            });
            $(".main_banner_next").click(function(){
                next2();
            });
        });