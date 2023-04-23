$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});

$(document).ready(function () {
  $('.cp_nav').click(function () {
    $('.cp_nav').toggleClass('active')
    $('.left_navs').toggleClass('active')
  });
});

$(document).ready(function () {
  $('.nav_ss img').click(function () {
    $('.nav_ss').toggleClass('active')
  });
});

$(document).ready(function () {
  $('.san').click(function () {
    $('.san').toggleClass('active')
    $('.nav').toggleClass('active')
  });
});
$(document).ready(function () {
  $('.cp_rr').click(function () {
    $('.fwcp_left').toggleClass('active')
  });
});

$(document).ready(function () {
  $('#zp_1').click(function () {
    $('#zp_1').toggleClass('active')
    $('#zps_1').toggleClass('active')
  });
  $('#zp_2').click(function () {
    $('#zp_2').toggleClass('active')
    $('#zps_2').toggleClass('active')
  });
  $('#zp_3').click(function () {
    $('#zp_3').toggleClass('active')
    $('#zps_3').toggleClass('active')
  });
  $('#zp_4').click(function () {
    $('#zp_4').toggleClass('active')
    $('#zps_4').toggleClass('active')
  });
  $('#zp_5').click(function () {
    $('#zp_5').toggleClass('active')
    $('#zps_5').toggleClass('active')
  });
  $('#zp_6').click(function () {
    $('#zp_6').toggleClass('active')
    $('#zps_6').toggleClass('active')
  });
  $('#zp_7').click(function () {
    $('#zp_7').toggleClass('active')
    $('#zps_7').toggleClass('active')
  });
  $('#zp_8').click(function () {
    $('#zp_8').toggleClass('active')
    $('#zps_8').toggleClass('active')
  });
  $('#zp_9').click(function () {
    $('#zp_9').toggleClass('active')
    $('#zps_9').toggleClass('active')
  });
  $('#zp_10').click(function () {
    $('#zp_10').toggleClass('active')
    $('#zps_10').toggleClass('active')
  });
});

//$(document).ready(function () {
//
//  $('.video_a').click(function () {
//    $('.tc_bj').toggleClass('active')
//  });
//  
//  $('.tc_guan').click(function () {
//    $('.tc_bj').toggleClass('active')
//  });
//});




function showCselt(temp)
{
	for(i=1;i<=5;i++)
	{
		if(i==temp){
			$('#cs_'+i).addClass('active');
			$('#cselt_'+i).addClass('active');
			}
		else{
			$('#cs_'+i).removeClass('active');
			$('#cselt_'+i).removeClass('active');
		}
	}
}


//function showCselt_zp(temp)
//{
//	for(i=1;i<=20;i++)
//	{
//		if(i==temp){
//			$('#zp_'+i).addClass('active');
//			$('#zps_'+i).addClass('active');
//			}
//		else{
//			$('#zp_'+i).removeClass('active');
//			$('#zps_'+i).removeClass('active');
//		}
//	}
//}




function pauseVid(target)
  {
  document.getElementById('video_'+target).pause();
  }






		
		
		var _content = []; //临时存储li循环内容
		var xieyubd = {
			_default:7, //默认显示图片个数
			_loading:5,  //每次点击按钮后加载的个数
			init:function(){
				var lis = $(".xieyubd .hidden li");
				$(".xieyubd ul.list").html("");
				for(var n=0;n<xieyubd._default;n++){
					lis.eq(n).appendTo(".xieyubd ul.list");
				}
				$(".xieyubd ul.list img").each(function(){
					$(this).attr('src',$(this).attr('realSrc'));
				})
				for(var i=xieyubd._default;i<lis.length;i++){
					_content.push(lis.eq(i));
				}
				$(".xieyubd .hidden").html("");
			},
			loadMore:function(){
				var mLis = $(".xieyubd ul.list li").length;
				for(var i =0;i<xieyubd._loading;i++){
					var target = _content.shift();
					if(!target){
						$('.xieyubd .gengduo').html("<p>All loaded...</p>");
						break;
					}
					$(".xieyubd ul.list").append(target);
					$(".xieyubd ul.list img").eq(mLis+i).each(function(){
						$(this).attr('src',$(this).attr('realSrc'));
					});
				}
			}
		}
		xieyubd.init();


$('#top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});




//这个是返回顶部的JS
$(function(){
	//页面跳转时定位
	if(window.location.hash){
		var targetScroll = $(window.location.hash).offset().top - 40;
		$("html,body").animate({scrollTop:targetScroll},300);
	}
	$(window).scroll(function(){
		var $this = $(this);
		var targetTop = $(this).scrollTop();
		/*var footerTop = $("#footer").offset().top;*/
		var height = $(window).height();
		
		if (targetTop >= 300){
			$(".t_top").addClass("active");
			/*$(".empty-placeholder").removeClass("hidden");*/
		}else{
			$(".t_top").removeClass("active");
			/*$(".empty-placeholder").addClass("hidden");*/
		}
	})
}());




//这个是头部nav的JS
$(function(){
	//页面跳转时定位
	if(window.location.hash){
		var targetScroll = $(window.location.hash).offset().top - 40;
		$("html,body").animate({scrollTop:targetScroll},300);
	}
	$(window).scroll(function(){
		var $this = $(this);
		var targetTop = $(this).scrollTop();
		/*var footerTop = $("#footer").offset().top;*/
		var height = $(window).height();
		
		if (targetTop >= 120){
			$(".header").addClass("active");
			/*$(".empty-placeholder").removeClass("hidden");*/
		}else{
			$(".header").removeClass("active");
			/*$(".empty-placeholder").addClass("hidden");*/
		}
	})
}());


