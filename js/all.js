
const isMobile = $(window).width() <= 480;
const $btn1 = $('.nav-btn').eq(0);
const $btn2 = $('.nav-btn').eq(1);
const $btn3 = $('.nav-btn').eq(2);
const $btn4 = $('.nav-btn').eq(3);
const $btn5 = $('.nav-btn').eq(4);
const $btn6 = $('.nav-btn').eq(5);
// console.log(isMobile);

$btn1.addClass('js-nav-btn');

$('.nav-btn').click(function(){
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});

if(isMobile){
    $('#SlideLs .slide-item').scroll(function(){
        console.log($(this).scrollTop());
        $(this).scrollTop() == 0 ? $('#Nav').removeClass('js-nav') :  $('#Nav').addClass('js-nav') 
    });
}