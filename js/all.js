
const isMobile = $(window).width() <= 480;
const $btn1 = $('.nav-btn').eq(0);
const $btn2 = $('.nav-btn').eq(1);
const $btn3 = $('.nav-btn').eq(2);
const $btn4 = $('.nav-btn').eq(3);
const $btn5 = $('.nav-btn').eq(4);
const $btn6 = $('.nav-btn').eq(5);
const $ul = $('#SlideLs');
const $Nav = $('#Nav');

const $afancybox = $('.pic-item > a');

// console.log(isMobile);

$btn1.addClass('js-nav-btn');

$('.nav-btn').click(function(){
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});

if(isMobile){
    $ul.find('.slide-item').scroll(function(){
        console.log($(this).scrollTop());
        $(this).scrollTop() == 0 ? $Nav.removeClass('js-nav') :  $Nav.addClass('js-nav') 
    });
}

$btn1.click(function(){
    $ul.css({
        left: 0,
        top: 0,
    })
});
$btn2.click(function(){
    $ul.css({
        left: '-100%',
        top: 0,
    })
});
$btn3.click(function(){
    $ul.css({
        left: '-200%',
        top: 0,
    })
});
$btn4.click(function(){
    $ul.css({
        left: 0,
        top: '-100%',
    })
});
$btn5.click(function(){
    $ul.css({
        left: '-100%',
        top: '-100%',
    })
});
$btn6.click(function(){
    $ul.css({
        left: '-200%',
        top: '-100%',
    })
});

$afancybox.fancybox({
    loop: true,
    keyboard: true,
    animationDuration: 500,
    transitionDuration: 800,
    // transitionEffect: 'circular',
    // slideShow: {
    //     autoStart:true,
    //     speed: 2000,
    // },
    buttons:[
        'zoom',
        'share',
        'download',
        'slideShow',
        'thumbs',
        'close',
    ],
    media: {
        youtube: {
            params: {
                autoplay: false,
            }
        }
    }
});