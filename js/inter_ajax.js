        /*인터파크 추천!*/
        $(function(){
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: {query:"오늘밤, 세계에서"},
                headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
            })
            .done(function(msg){
                console.log( msg.documents[1].title );
                console.log( msg.documents[1].thumbnail );
                var divs = document.getElementsByTagName('div');
                for(var i=0; i<divs.length; i++){
                    $(".main2_slide > li:nth-child(1) > .inter_imgbox").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
                    $(".main2_slide > li:nth-child(1) > .inter_content > p").eq(i).append(msg.documents[i].title);
                    var str=msg.documents[i].contents;
                    var main2str2=str.substring(0,70);
                    $(".main2_slide > li:nth-child(1) > .inter_content > .content > p").eq(i).append("<p>"+main2str2+"</p>");
                }
            });


            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: {query:"나미야 잡화점의 기적"},
                headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
            })
            .done(function(msg){
                console.log( msg.documents[1].title );
                console.log( msg.documents[1].thumbnail );
                var divs = document.getElementsByTagName('div');
                for(var i=0; i<divs.length; i++){
                    $(".main2_slide > li:nth-child(2) > .inter_imgbox").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
                    $(".main2_slide > li:nth-child(2) > .inter_content > p").eq(i).append(msg.documents[i].title);
                    var str=msg.documents[i].contents;
                    var main2str2=str.substring(0,70);
                    $(".main2_slide > li:nth-child(2) > .inter_content > .content > p").eq(i).append("<p>"+main2str2+"</p>");
                }
            });
            
            
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: {query:"세상의 마지막"},
                headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
            })
            .done(function(msg){
                console.log( msg.documents[1].title );
                console.log( msg.documents[1].thumbnail );
                var divs = document.getElementsByTagName('div');
                for(var i=0; i<divs.length; i++){
                    $(".main2_slide > li:nth-child(3) > .inter_imgbox").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
                    $(".main2_slide > li:nth-child(3) > .inter_content > p").eq(i).append(msg.documents[i].title);
                    var str=msg.documents[i].contents;
                    var main2str2=str.substring(0,70);
                    $(".main2_slide > li:nth-child(3) > .inter_content > .content > p").eq(i).append("<p>"+main2str2+"</p>");
                }
            });
            
            
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: {query:"죽음에 네가"},
                headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
            })
            .done(function(msg){
                console.log( msg.documents[1].title );
                console.log( msg.documents[1].thumbnail );
                var divs = document.getElementsByTagName('div');
                for(var i=0; i<divs.length; i++){
                    $(".main2_slide > li:nth-child(4) > .inter_imgbox").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
                    $(".main2_slide > li:nth-child(4) > .inter_content > p").eq(i).append(msg.documents[i].title);
                    var str=msg.documents[i].contents;
                    var main2str2=str.substring(0,70);
                    $(".main2_slide > li:nth-child(4) > .inter_content > .content > p").eq(i).append("<p>"+main2str2+"</p>");
                }
            });            


        });