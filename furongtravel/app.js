	
$(function () {
    $("a").focus(function () {
        $(this).blur();
    });
    toolbar();//qq在线
	share();//分享代码
    jQuery(".floor_6_slideBox").slide({mainCell:".bd ul",effect:"left",autoPlay:true  });
    jQuery(".slideTxtBox1").slide({mainCell:".bdd ul" ,titCell:".hdd li" });
});
function share(){
	window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "",
        "bdStyle": "0",
        "bdSize": "16"
    },
    "share": {}
};
with(document) 0[(getElementsByTagName('head')[0] || body)
.appendChild(createElement('script'))
.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='
+ ~(-new Date() / 36e5)];
}
function layout(u){
	var $obj = $('<div class="dialog-layout"></div>');
	if(u == 0){
		$('.dialog-layout').remove();
	}else{
		if(!$('.dialog-layout').length){
			$obj.appendTo('body').show();
		}
	}
}
function showNav() {    //首页导航
    var tabh = $("#nav").offset().top;    
    $(window).scroll(function () {
        var a = $(document).scrollTop();
        if (a > tabh+800) {
            $("#nav ").show();
        } else {
            $("#nav").hide();
        }     

    });

}
/****放大镜****/
function scrollimg() {
    if (!$(".photoimg").length) { return false; }
    var time = 5000, tim = 800, speed = 1000, speed2 = 700, n = 0;
    var $simg = $(".photoimg .listcon");
    var len = $(".photoimg .listcon").find("a").length;
    var len = Math.ceil(len / 5);
    var xwid = $(".photoimg .list").width();
    var func = function (index) {
        if (n < len - 1) {
            n++;
        } else {
            n = 0;
        }
        $simg.stop().animate({ "margin-left": -n * xwid }, speed2);
    }
    var func2 = function () {
        if (n > 0) {
            n--;
            $simg.stop().animate({ "margin-left": -n * xwid }, speed2);
        } else {
            $simg.stop().animate({ "margin-left": -(len - 1) * xwid }, speed2);
            n = len - 1;

        }
    }
    var func3 = function (index) {
        $simg.stop().animate({ "margin-left": -index * xwid }, speed2);
        n = index;
    }
    // 绑定按钮事件
    $(".btnleft").click(function () {
        func2();
    });
    $(".btnright").click(function () {
        func();
    });
    $simg.find("img").on("mouseover", function () {
        $("#bigImg").attr("src", $(this).attr("src"));
        $("#bigImg").attr("jqimg", $(this).attr("src"));
    })
    $simg.find("img").on("click", function () {
        $("#bigImg").attr("src", $(this).attr("src"));
        $("#bigImg").attr("jqimg", $(this).attr("src"));

    })
    $(".jqzoom").jqueryzoom({
        xzoom: 450, //放大图的宽度(默认是 200)
        yzoom: 450, //放大图的高度(默认是 200)
        offset: 10, //离原图的距离(默认是 10)
        position: "right", //放大图的定位(默认是 "right")
        preload: 1
    });
}

function toolbar(){
	$('#toolbar dd').bind({
		'mouseenter': function(){
			if($(this).children('.slide').length){
				var _this = $(this).children('.slide');
				_this.stop(true, true).animate({'width': 180}, 200);
			}else if($(this).children('.pop').length){
				var _this = $(this).children('.pop');
				_this.show().animate({'right': 65}, 200);
			}
		},
		'mouseleave': function(){
			if($(this).children('.slide').length){
				var _this = $(this).children('.slide');
				_this.stop(false, false).animate({'width': 0}, 200);
			}else if($(this).children('.pop').length){
				var _this = $(this).children('.pop');
				_this.hide().animate({'right': 90}, 200);
			}
		}
	});
	$("#top").click(function () {
        $("body, html").stop().animate({ "scrollTop": 0 });
    });
	
}

function showTit(){//标题
	var a=$(".des_2");
	if(!a.length){ return false;}
	var arr = new Array();
	var tab=a.offset().top;
	a.find(".ul  li").click(function(){
		var index=$(this).index();		
	    $("body, html").stop().animate({"scrollTop":arr[index]-180},1);
	   $(this).parent().find(".a1").removeClass("cur");
	    $(this).find(".a1").addClass("cur");
	});
	$(window).scroll(function(){
        var h=$(document).scrollTop();
        tab1=a.find("#detail_infor_1").offset().top;
        tab2=a.find("#detail_infor_2").offset().top;
        tab3=a.find("#detail_infor_3").offset().top;
        tab4=a.find("#detail_infor_4").offset().top;
        tab5=a.find("#detail_infor_5").offset().top;
        tab6=a.find("#detail_infor_6").offset().top;
        arr=[tab1,tab2,tab3,tab4,tab5,tab6];
        //console.log(arr[1])
		  if( h+86 >= tab){ 
		   	  a.find(".ul").addClass("hover");
		  }else{
		  	  a.find(".ul").removeClass("hover");
		  }
		  if( h>=arr[0]-180 && h<arr[1] ){   
		  		a.find(".ul  li .a1").removeClass("cur");
		   	  a.find(".ul  li").eq(0).find(".a1").addClass("cur")		   	 
		  }
		  if( h>=arr[1]-250 && h<arr[2]){
		  	a.find(".ul  li .a1").removeClass("cur");
		   	   a.find(".ul  li").eq(1).find(".a1").addClass("cur");
		   	   
		  }
		  if (h >= arr[2]-180 && h<arr[3]) {
		  	a.find(".ul  li .a1").removeClass("cur");
		      a.find(".ul  li").eq(2).find(".a1").addClass("cur");
		  }
		  if (h >= arr[3]-180 && h<arr[4]) {
		  	a.find(".ul  li .a1").removeClass("cur");
		      a.find(".ul  li").eq(3).find(".a1").addClass("cur");
		  }
		  if (h >= arr[4]-180 && h<arr[5]) {
		  	a.find(".ul  li .a1").removeClass("cur");
		      a.find(".ul  li").eq(4).find(".a1").addClass("cur");
		  }
		   if (h >= arr[5]-180) {
		   	a.find(".ul  li .a1").removeClass("cur");
		      a.find(".ul li ").eq(5).find(".a1").addClass("cur");
		  }
	});
	
}
