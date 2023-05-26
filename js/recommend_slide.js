/* 소설 분야에서 많은 회원이 구매한 책 버튼 */

$(function() {
	function prevsub1() {
		$('.recommend_slide1 > ul').find('li:last').prependTo('.recommend_slide1 > ul');
	}

	function nextsub1() {
		$('.recommend_slide1 > ul').find('li:first').appendTo('.recommend_slide1 > ul');
	}

	$('.sub1_prev').click(function () {
		nextsub1();
	});

	$('.sub1_next').click(function () {
		nextsub1();
	});
});


/* 이 책을 조회한 회원들이 같이 본 책 버튼 */

$(function() {
	function prevsub2() {
		$('.recommend_slide2 > ul').find('li:last').prependTo('.recommend_slide2 > ul');
	}

	function nextsub2() {
		$('.recommend_slide2 > ul').find('li:first').appendTo('.recommend_slide2 > ul');
	}

	$('.sub2_prev').click(function () {
		nextsub2();
	});

	$('.sub2_next').click(function () {
		nextsub2();
	});
});



/* 이 책을 구매한 회원들이 구매한 책 버튼 */

$(function() {
	function prevsub3() {
		$('.recommend_slide3 > ul').find('li:last').prependTo('.recommend_slide3 > ul');
	}

	function nextsub3() {
		$('.recommend_slide3 > ul').find('li:first').appendTo('.recommend_slide3 > ul');
	}

	$('.sub3_prev').click(function () {
		nextsub3();
	});

	$('.sub3_next').click(function () {
		nextsub3();
	});
});