/* 소설 분야에서 많은 회원이 구매한 책 */

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"소설" },
	headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
})
.done(function( msg ) {

	console.log( msg.documents[1].title );
	console.log( msg.documents[1].thumbnail );

	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
		var sub1=str.substring(0,28);

		$(".recommend_slide1 > ul > .re_sl_1_1 > ul > li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
		$(".recommend_slide1 > ul > .re_sl_1_1 > ul > li").eq(i).append("<p>" + sub1 + "</p>");

	}

});


$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"문학" },
	headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
})
.done(function( msg ) {

	console.log( msg.documents[1].title );
	console.log( msg.documents[1].thumbnail );

	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
		var sub1=str.substring(0,28);

		$(".recommend_slide1 > ul > .re_sl_1_2 > ul > li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
		$(".recommend_slide1 > ul > .re_sl_1_2 > ul > li").eq(i).append("<p>" + sub1 + "</p>");

	}

});



/* 이 책을 조회한 회원들이 같이 본 책 */

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"태도" },
	headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
})
.done(function( msg ) {

	console.log( msg.documents[1].title );
	console.log( msg.documents[1].thumbnail );

	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
		var sub1=str.substring(0,28);

		$(".recommend_slide2 > ul > .re_sl_2_1 > ul > li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
		$(".recommend_slide2 > ul > .re_sl_2_1 > ul > li").eq(i).append("<p>" + sub1 + "</p>");

	}

});


$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"회사" },
	headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
})
.done(function( msg ) {

	console.log( msg.documents[1].title );
	console.log( msg.documents[1].thumbnail );

	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
		var sub1=str.substring(0,28);

		$(".recommend_slide2 > ul > .re_sl_2_2 > ul > li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
		$(".recommend_slide2 > ul > .re_sl_2_2 > ul > li").eq(i).append("<p>" + sub1 + "</p>");

	}

});




/* 이 책을 구매한 회원들이 구매한 책 */

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"성공" },
	headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
})
.done(function( msg ) {

	console.log( msg.documents[1].title );
	console.log( msg.documents[1].thumbnail );

	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
		var sub1=str.substring(0,28);

		$(".recommend_slide3 > ul > .re_sl_3_1 > ul > li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
		$(".recommend_slide3 > ul > .re_sl_3_1 > ul > li").eq(i).append("<p>" + sub1 + "</p>");

	}

});


$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"가진것" },
	headers:{Authorization: "KakaoAK d194d7880d9d146ec235a78a0c31d605"}
})
.done(function( msg ) {

	console.log( msg.documents[1].title );
	console.log( msg.documents[1].thumbnail );

	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
		var sub1=str.substring(0,28);

		$(".recommend_slide3 > ul > .re_sl_3_2 > ul > li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
		$(".recommend_slide3 > ul > .re_sl_3_2 > ul > li").eq(i).append("<p>" + sub1 + "</p>");

	}

});