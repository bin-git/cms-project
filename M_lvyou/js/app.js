/*幻灯片*/


TouchSlide({
    slideCell: "#banner",
    titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
    mainCell: ".bd ul",
    effect: "left",
    autoPlay: true,//自动播放
    autoPage: true, //自动分页
    switchLoad: "_src" //切换加载，真实图片路径为"_src"
});

$(function () {
    pro_detail_menu_ShowAndHide();


    $("#returntop").bind("click", function () {
        $("body, html").stop().animate({"scrollTop": "0px"});
    });

    $(".chir_ico").bind('click', function () {
        if ($('.chir_nav').is(':hidden')) {

            $('.chir_nav').show();
        } else {
            $('.chir_nav').hide();
        }
    })
    setTimeout(function () {
        $("#nav li").addClass("route");
    }, 600)

    //加减1
    $("#a1").click(function () {
        if (parseInt($("#input1").val()) == 0) {
            return;
        }
        $("#input1").val(parseInt($("#input1").val()) - 1);
    });
    $("#a1_2").click(function () {
        $("#input1").val(parseInt($("#input1").val()) + 1);
    });

    $("#a2_1").click(function () {
        if (parseInt($("#input2").val()) == 0) {
            return;
        }
        $("#input2").val(parseInt($("#input2").val()) - 1);
    });
    $("#a2_2").click(function () {
        $("#input2").val(parseInt($("#input2").val()) + 1);
    });


    $("#a3_1").click(function () {
        if (parseInt($("#input3").val()) == 0) {
            return;
        }
        $("#input3").val(parseInt($("#input3").val()) - 1);
    });
    $("#a3_2").click(function () {
        $("#input3").val(parseInt($("#input3").val()) + 1);
    });
})
function pro_detail_menu_ShowAndHide() {
    var h = $("#logo_main").height() + (($(".detail-frgl").find(".floor1_main").height())/2);

    $(window).scroll(function () {
        if ($(this).scrollTop() > h) {
            $("#detail_nav").find(".l").css({
                "transform":"translate3d(4.01rem,0,0)"
            })
            $("#detail_nav").find(".r>a").css({
                "transform":"translate3d(-1.13rem,0,0)"
            })
        }
        else {
            $("#detail_nav").find(".l").css({
                "transform":"translate3d(0,0,0)"
            })
            $("#detail_nav").find(".r>a").css({
                "transform":"translate3d(0,0,0)"
            })
        }
    })

}


/*首页切换*/
TouchSlide({slideCell: "#newsBox"});
function showTit() {//标题
    var a = $("#product");
    if (!a.length) {
        return false;
    }
    var arr = new Array();
    var tab = a.offset().top;
    a.find(".fryp_tit  li").click(function () {
        var index = $(this).index();
        $("body, html").stop().animate({"scrollTop": arr[index] - 100}, 1);
        $(this).parent().find(".a1").removeClass("cur");
        $(this).find(".a1").addClass("cur");
    });
    $(window).scroll(function () {
        var h = $(document).scrollTop();
        tab1 = a.find("#detail_infor_1").offset().top;
        tab2 = a.find("#detail_infor_2").offset().top;
        tab3 = a.find("#detail_infor_3").offset().top;
        tab4 = a.find("#detail_infor_4").offset().top;
        tab5 = a.find("#detail_infor_5").offset().top;
        arr = [tab1, tab2, tab3, tab4, tab5];
        //console.log(arr[1])
        if (h >= tab) {
            a.find(".fryp_tit").addClass("hover");
        } else {
            a.find(".fryp_tit").removeClass("hover");
        }
        if (h >= arr[0] - 100 && h < arr[1]) {
            a.find(".fryp_tit  li .a1").removeClass("cur");
            a.find(".fryp_tit  li").eq(0).find(".a1").addClass("cur")
        }
        if (h >= arr[1] - 100 && h < arr[2]) {
            a.find(".fryp_tit  li .a1").removeClass("cur");
            a.find(".fryp_tit  li").eq(1).find(".a1").addClass("cur");

        }
        if (h >= arr[2] - 100 && h < arr[3]) {
            a.find(".fryp_tit  li .a1").removeClass("cur");
            a.find(".fryp_tit  li").eq(2).find(".a1").addClass("cur");
        }
        if (h >= arr[3] - 100 && h < arr[4]) {
            a.find(".fryp_tit  li .a1").removeClass("cur");
            a.find(".fryp_tit  li").eq(3).find(".a1").addClass("cur");
        }
        if (h >= arr[4] - 180) {
            a.find(".fryp_tit  li .a1").removeClass("cur");
            a.find(".fryp_tit li ").eq(4).find(".a1").addClass("cur");
        }
    });

}

/*回到顶部*/
$(window).scroll(function () {
    var i = $(window).scrollTop();
    if (i > 100) {
        $("#returntop").show();
    }
    else if (i < 50) {
        $("#returntop").hide();
    }
});

//侧边栏
$("#WebTel").click(function () {
    if ($("#ShowChannel").css("display") == "none") {
        $(this).find("i").addClass('hov');
        $("#ShowChannel").show();
        $(".gray").height($(document).height());
        $(".gray").show();
        $("#ShowChannel").animate({
            right: 0
        }, 500)

    } else {
        $("#ShowChannel").hide();
        $("#ShowChannel").css({right: "-100%"});
        $(this).find("i").removeClass('hov');
        $(".gray").hide();
    }

});

$(".gray").click(function () {//下拉灰图层
    $("#ShowChannel").css({right: "-100%"})
    $("#ShowChannel").hide();
    $("#WebTel").find("i").removeClass('hov');
    $(this).hide();
})	

