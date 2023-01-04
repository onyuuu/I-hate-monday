$('.m_menu_icon').click(function(){
    $('.mobile_menu_list').stop().animate({left:0}, 500);
    $('.header_mobile_menu_bar>div').stop().animate({left:'100%'}, 500);
});
$('.appbarCloseBt').click(function(){
    $('.mobile_menu_list').stop().animate({left:'-100%'}, 500);
    $('.header_mobile_menu_bar>div').stop().animate({left:0}, 500);
});