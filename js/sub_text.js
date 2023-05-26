    /* 책소개 텍스트 가져오기 */	
	$(function(){
		$.get("./sub_txt/txt1.txt", function(data) {
			$(".introduce").html(data);
		})     
	});

	/* 출판사 서평 텍스트 가져오기 */

	$(function(){
		$.get("./sub_txt/txt2.txt", function(data) {
			$(".publisher").html(data);
		})     
	});

	/* 추천사 텍스트 가져오기 */

	$(function(){
		$.get("./sub_txt/txt3.txt", function(data) {
			$(".recommend").html(data);
		})     
	});  
    
	/* 목록 텍스트 가져오기 */

	$(function(){
		$.get("./sub_txt/txt4.txt", function(data) {
			$(".list").html(data);
		})     
	});    


	/* 본문중에서 텍스트 가져오기 */

	$(function(){
		$.get("./sub_txt/txt5.txt", function(data) {
			$(".extract").html(data);
		})     
	});     

	/* 저자소개 텍스트 가져오기 */

	$(function(){
		$.get("./sub_txt/txt6.txt", function(data) {
			$(".author_text").html(data);
		})     
	}); 