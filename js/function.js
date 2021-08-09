$(function(){

  const $mnu = $('header > .container > ul.mnu > li');

  const $gnb_1 = $('header > nav > .bg_1');
  const $gnb_2 = $('header > nav > .bg_2');
  const $gnb_3 = $('header > nav > .bg_3');
  const $gnb_4 = $('header > nav > .bg_4');

  $mnu.eq(0).on('mouseover', function(){
    $gnb_1.css({
      display: 'block'
    });
    $(this).css({
      borderBottom : '2px solid #000'
    });
  });
  $mnu.eq(0).on('mouseout', function(){
    $gnb_2.css({
      display: 'none'
    });
    $gnb_3.css({
      display: 'none'
    });
    $gnb_4.css({
      display: 'none'
    });
    $(this).css({
      borderBottom : 'none'
    });
  });
  $gnb_1.on('mouseover', function(){
    $(this).css({
      display: 'block'
    });
    $mnu.eq(0).css({
      borderBottom : '2px solid #000'
    });
  });
  $gnb_1.on('mouseout', function(){
    $(this).hide();
    $mnu.eq(0).css({
      borderBottom : 'none'
    });
  });

  $mnu.eq(1).on('mouseover', function(){
    $gnb_2.css({
      display: 'block'
    });
    $(this).css({
      borderBottom : '2px solid #000'
    });
  });
  $mnu.eq(1).on('mouseout', function(){
    $gnb_1.css({
      display: 'none'
    });
    $gnb_3.css({
      display: 'none'
    });
    $gnb_4.css({
      display: 'none'
    });
    $(this).css({
      borderBottom : 'none'
    });
  });
  $gnb_2.on('mouseover', function(){
    $(this).css({
      display: 'block'
    });
    $mnu.eq(1).css({
      borderBottom : '2px solid #000'
    });
  });
  $gnb_2.on('mouseout', function(){
    $(this).hide();
    $mnu.eq(1).css({
      borderBottom : 'none'
    });
  });

  $mnu.eq(2).on('mouseover', function(){
    $gnb_3.css({
      display: 'block'
    });
    $(this).css({
      borderBottom : '2px solid #000'
    });
  });
  $mnu.eq(2).on('mouseout', function(){
    $gnb_1.css({
      display: 'none'
    });
    $gnb_2.css({
      display: 'none'
    });
    $gnb_4.css({
      display: 'none'
    });
    $(this).css({
      borderBottom : 'none'
    });
  });
  $gnb_3.on('mouseover', function(){
    $(this).css({
      display: 'block'
    });
    $mnu.eq(2).css({
      borderBottom : '2px solid #000'
    });
  });
  $gnb_3.on('mouseout', function(){
    $(this).hide();
    $mnu.eq(2).css({
      borderBottom : 'none'
    });
  });

  $mnu.eq(3).on('mouseover', function(){
    $gnb_4.css({
      display: 'block'
    });
    $(this).css({
      borderBottom : '2px solid #000'
    });
  });
  $mnu.eq(3).on('mouseout', function(){
    $gnb_1.css({
      display: 'none'
    });
    $gnb_2.css({
      display: 'none'
    });
    $gnb_3.css({
      display: 'none'
    });
    $(this).css({
      borderBottom : 'none'
    });
  });
  $gnb_4.on('mouseover', function(){
    $(this).css({
      display: 'block'
    });
    $mnu.eq(3).css({
      borderBottom : '2px solid #000'
    });
  });
  $gnb_4.on('mouseout', function(){
    $(this).hide();
    $mnu.eq(3).css({
      borderBottom : 'none'
    });
  });

  $mnu.eq(4).on('mouseover', function(){
    $gnb_1.css({
      display: 'none'
    });
    $gnb_2.css({
      display: 'none'
    });
    $gnb_3.css({
      display: 'none'
    });
    $gnb_4.css({
      display: 'none'
    });
  });

  $('a').on('click', function (evt) {
    evt.preventDefault();
  });


  // 반응형 메뉴 버튼
  const $rwMnu = $('span.mnu-btn');

  $rwMnu.on('click', function () {
    $('.rw-mnubg').show();
    $('section').hide();
  });

  $('span.close').on('click', function () {
    $('.rw-mnubg').hide();
    $('section').show();
  });

  $('ol.rw-mnu > li.on > a').on('click', function (evt) {
    evt.preventDefault();

    $('ul.rw-gnb').slideToggle();
    $('.rw-gnb_bg').slideToggle();
  });


  // section.cont-8
  // 카드 무한 슬라이드
  const $container = $('.slides-container');
  const $slides = $container.children('li');

  let nowIdx = 2;
  let aniChk = false;

  // 이전 버튼
  $('.prev').on('click', function(evt){
    evt.preventDefault();

    if(aniChk === false){

      aniChk = true;

      if(nowIdx > 0){
        nowIdx--;
      }else{
        nowIdx=4;
      }

      // 활성화 표시
      $slides.removeClass('on').eq(nowIdx).addClass('on');
  
      // 컨테이너 이동
      $container.stop().animate({left:0}, 400, function(){
        // $slides.first().appendTo($container);
        $('.slides-container>li').last().prependTo($container);
        $container.css({left:-240});

        aniChk = false;
      });
    }
  });

  // 다음 버튼
  $('.next').on('click', function(evt){
    evt.preventDefault();

    if(aniChk === false){

      aniChk = true;

      if(nowIdx < 4){
        nowIdx++;
      }else{
        nowIdx=0;
      }
    
      // 활성화 표시
      $slides.removeClass('on').eq(nowIdx).addClass('on');
  
      // 컨테이너 이동
      $container.stop().animate({left:-480}, 400, function(){
        // $slides.first().appendTo($container);
        $('.slides-container>li').first().appendTo($container);
        $container.css({left:-240});

        aniChk = false;
      });
    }
  });
  // end of section.cont-8


  // header
  $(window).scroll(function(){
    if($(this).scrollTop() < 1){
      $('header').css({
        backgroundColor: 'transparent',
        borderBottom: '0'
      });
    }else{
      $('header').css({
        backgroundColor: '#fff',
        borderBottom: '1px solid #ddd'
      });
    }
  });
});