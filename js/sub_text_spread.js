    /* 출판사 서평 펼쳐보기 */

    $(function () {
        $(".text_spread1").eq(0).click(function () {
            $(".publisher").height("auto");
            $(".text_spread1").eq(0).hide();
            $("#end1").show();
            $(".text_spread1").eq(1).show();
        });
    });


    /* 출판사 서평 접어보기 */

    $(function () {
        $(".text_spread1").eq(1).click(function () {
            $(".publisher").height("auto");
            $(".text_spread1").eq(1).hide();
            $("#end1").hide();
            $(".text_spread1").eq(0).show();
        });
    });


    /* 추천사 서평 펼쳐보기 */

    $(function () {
        $(".text_spread2").eq(0).click(function () {
            $(".recommend").height("auto");
            $(".text_spread2").eq(0).hide();
            $("#end2").show();
            $(".text_spread2").eq(1).show();
        });
    });


    /* 추천사 서평 접어보기 */

    $(function () {
        $(".text_spread2").eq(1).click(function () {
            $(".recommend").height("auto");
            $(".text_spread2").eq(1).hide();
            $("#end2").hide();
            $(".text_spread2").eq(0).show();
        });
    });    



    /* 목록 펼쳐보기 */

    $(function () {
        $(".text_spread3").eq(0).click(function () {
            $(".list").height("auto");
            $(".text_spread3").eq(0).hide();
            $("#end3").show();
            $(".text_spread3").eq(1).show();
        });
    });


    /* 목록 접어보기 */

    $(function () {
        $(".text_spread3").eq(1).click(function () {
            $(".list").height("auto");
            $(".text_spread3").eq(1).hide();
            $("#end3").hide();
            $(".text_spread3").eq(0).show();
        });
    });


    /* 본문중에서 펼쳐보기 */

    $(function () {
        $(".text_spread4").eq(0).click(function () {
            $(".extract").height("auto");
            $(".text_spread4").eq(0).hide();
            $("#end4").show();
            $(".text_spread4").eq(1).show();
        });
    });


    /* 본문중에서 접어보기 */

    $(function () {
        $(".text_spread4").eq(1).click(function () {
            $(".extract").height("auto");
            $(".text_spread4").eq(1).hide();
            $("#end4").hide();
            $(".text_spread4").eq(0).show();
        });
    });