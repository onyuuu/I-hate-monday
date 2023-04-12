//mobile menu
$('.m_menu_icon').click(function(){
    $('.mobile_menu_list').stop().animate({left:0}, 500);
    $('.header_mobile_menu_bar>div').stop().animate({left:'100%'}, 500);
});
$('.appbarCloseBt').click(function(){
    $('.mobile_menu_list').stop().animate({left:'-100%'}, 500);
    $('.header_mobile_menu_bar>div').stop().animate({left:0}, 500);
});


//header shrink
var shrinkheader =50;
$(window).scroll(function(){
    var scroll=getCurrentScroll();
    if(scroll>=shrinkheader){
        $('#header').addClass('shrink');
    }else{
        $('#header').removeClass('shrink');

    }
})
function getCurrentScroll(){
    return window.pageYOffset || document.documentElement.scrollTop;
}


//slide banner
$(document).ready(function () {
	$(".SlideDiv").not(".active").hide(); //화면 로딩 후 첫번째 div를 제외한 나머지 숨김
	
	setInterval(nextSlide, 4000); //4초(4000)마다 다음 슬라이드로 넘어감
});

//이전 슬라이드
function prevSlide() {
	$(".SlideDiv").hide(); //모든 div 숨김
	var allSlide = $(".SlideDiv"); //모든 div 객체를 변수에 저장
	var currentIndex = 0; //현재 나타난 슬라이드의 인덱스 변수
	
	//반복문으로 현재 active클래스를 가진 div를 찾아 index 저장
	$(".SlideDiv").each(function(index,item){ 
		if($(this).hasClass("active")) {
			currentIndex = index;
		}
        
	});
	
	//새롭게 나타낼 div의 index
	var newIndex = 0;
    
	if(currentIndex <= 0) {
		//현재 슬라이드의 index가 0인 경우 마지막 슬라이드로 보냄(무한반복)
		newIndex = allSlide.length-1;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 뒤로 간 index 지정
		newIndex = currentIndex-1;
	}

	//모든 div에서 active 클래스 제거
	$(".SlideDiv").removeClass("active");
    
	//새롭게 지정한 index번째 슬라이드에 active 클래스 부여 후 show()
	$(".SlideDiv").eq(newIndex).show(1000).addClass("active");
/* 	$(".SlideDiv").eq(newIndex).show(1000); */

}

//다음 슬라이드
function nextSlide() {
	$(".SlideDiv").hide();
	var allSlide = $(".SlideDiv");
	var currentIndex = 0;
	
	$(".SlideDiv").each(function(index,item){
		if($(this).hasClass("active")) {
			currentIndex = index;
		}
        
	});
	
	var newIndex = 0;
	
	if(currentIndex >= allSlide.length-1) {
		//현재 슬라이드 index가 마지막 순서면 0번째로 보냄(무한반복)
		newIndex = 0;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 앞으로 간 index 지정
		newIndex = currentIndex+1;
	}

	$(".SlideDiv").removeClass("active");
	$(".SlideDiv").eq(newIndex).fadeIn(500).addClass("active");
	/* $(".SlideDiv").eq(newIndex).show(1000); */
}



//mobile load more
$( document ).ready(function () {
    $(".moreBox").slice(-1,1).show();
        if ($(".itemBox:hidden").length != 0) {
        $("#loadMore").show();
        }   
        $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 6).slideDown();
        if ($(".moreBox:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        });
});


// sec1 animation fadeInRight
const txtT=$('.sec_1 .sec1_textWrap .sec1_text1').offset().top;
let winH=$(window).height();
let txtTop=txtT-winH;

$(window).scroll(function(){
	if($(window).scrollTop() > txtTop){
		$('.sec1_text1').addClass('addParallax');
	};
	if($(window).scrollTop() == 0){
		$('.sec1_text1').removeClass('addParallax');
	};
});

// sec2 animation ani1
const ani1=$('.sec_2 .inner ul .aniJs').offset().top;
let winHt=$(window).height();
let ani1Top=ani1-winHt;

$(window).scroll(function(){
	if($(window).scrollTop() > ani1Top){
		$('.aniJs').addClass('addParallax');
	};
	if($(window).scrollTop() == 0){
		$('.aniJs').removeClass('addParallax');
	};
});



//모바일메뉴 SHOP 토글
$(".m_menu_wrap>ul>li a img").click(function(){
	$(".m_menu_wrap>ul>li>ul").toggle();
});

let toggleImg=true;
function toggleBtn(){
	document.getElementById('toggle').src=toggleImg?'./img/plus_click.png' :
	'./img/plus.png';
	toggleImg=!toggleImg;
};