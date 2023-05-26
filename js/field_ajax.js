        /*분야별 추천_문학*/
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: { query:"문학"},
            headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
        })
        .done(function(msg){
            console.log( msg );
            var divs = document.getElementsByTagName('div');

            for(var i=0; i<divs.length; i++){
                var str=msg.documents[i].title;
                var str2=str.substring(0,25);

                $("#main5_box_wrap1 li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                $("#main5_box_wrap1 li").eq(i).append("<h4><a href=''>"+str2+"..."+"</a></h4>");
                $("#main5_box_wrap1 li").eq(i).append("<span>"+msg.documents[i].sale_price+"원"+"</span>");
            }
        });

        /*분야별 추천_인문*/
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: { query:"인문"},
            headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
        })
        .done(function(msg){
            console.log( msg );
            var divs = document.getElementsByTagName('div');

            for(var i=0; i<divs.length; i++){
                var str=msg.documents[i].title;
                var str2=str.substring(0,25);

                $("#main5_box_wrap2 li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                $("#main5_box_wrap2 li").eq(i).append("<h4><a href=''>"+str2+"..."+"</a></h4>");
                $("#main5_box_wrap2 li").eq(i).append("<span>"+msg.documents[i].sale_price+"원"+"</span>");
            }
        }); 
        
        /*분야별 추천_경제*/
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: { query:"경제"},
            headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
        })
        .done(function(msg){
            console.log( msg );
            var divs = document.getElementsByTagName('div');

            for(var i=0; i<divs.length; i++){
                var str=msg.documents[i].title;
                var str2=str.substring(0,25);

                $("#main5_box_wrap3 li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                $("#main5_box_wrap3 li").eq(i).append("<h4><a href=''>"+str2+"..."+"</a></h4>");
                $("#main5_box_wrap3 li").eq(i).append("<span>"+msg.documents[i].sale_price+"원"+"</span>");
            }
        });    
        
        /*분야별 추천_아동*/
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: { query:"유아"},
            headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
        })
        .done(function(msg){
            console.log( msg );
            var divs = document.getElementsByTagName('div');

            for(var i=0; i<divs.length; i++){
                var str=msg.documents[i].title;
                var str2=str.substring(0,25);

                $("#main5_box_wrap4 li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                $("#main5_box_wrap4 li").eq(i).append("<h4><a href=''>"+str2+"..."+"</a></h4>");
                $("#main5_box_wrap4 li").eq(i).append("<span>"+msg.documents[i].sale_price+"원"+"</span>");
            }
        }); 
        
        /*분야별 추천_학습*/
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: { query:"학습"},
            headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
        })
        .done(function(msg){
            console.log( msg );
            var divs = document.getElementsByTagName('div');

            for(var i=0; i<divs.length; i++){
                var str=msg.documents[i].title;
                var str2=str.substring(0,25);

                $("#main5_box_wrap5 li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                $("#main5_box_wrap5 li").eq(i).append("<h4><a href=''>"+str2+"..."+"</a></h4>");
                $("#main5_box_wrap5 li").eq(i).append("<span>"+msg.documents[i].sale_price+"원"+"</span>");
            }
        });  
        
        /*분야별 추천_외국도서*/
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: { query:"speak"},
            headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
        })
        .done(function(msg){
            console.log( msg );
            var divs = document.getElementsByTagName('div');

            for(var i=0; i<divs.length; i++){
                var str=msg.documents[i].title;
                var str2=str.substring(0,25);

                $("#main5_box_wrap6 li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                $("#main5_box_wrap6 li").eq(i).append("<h4><a href=''>"+str2+"..."+"</a></h4>");
                $("#main5_box_wrap6 li").eq(i).append("<span>"+msg.documents[i].sale_price+"원"+"</span>");
            }
        });  