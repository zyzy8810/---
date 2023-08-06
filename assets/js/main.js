// sc-left 닫고 열기
$(function () { //문서 로드 후 최초 1회 

  $('#sideBtn').click(function () {
    $('.sidenav,.dimmed').addClass('on');
    $('body').addClass('no-scroll')
  })

  $('.sidenav .btn-close,.dimmed').click(function () {
    $('.sidenav,.dimmed').removeClass('on');
    $('body').removeClass('no-scroll')
  })


  $('.sidenav .nav').click(function (e) {
    e.preventDefault();

    $(this).toggleClass('open').siblings('.sub-list').slideToggle()


  })

  /* 
  *
  */

  // sc-search 닫고 열기

  $('.search').click(function () {
    $('.sc-search').addClass('on');
    $('body').addClass('no-scroll');
  })

  $('.sc-search .btn-side').click(function(){
    $('.sc-search').removeClass('on');
    $('body').removeClass('no-scroll');
  })

  /**
   * 
   * 
   * 
   */

  var topSlide = new Swiper(".top-slide", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay:3000,
      disableOnInteraction: false,
    }
  });


  /**
   * @123123
   * 
   * 
   */
  var mainSlide = new Swiper(".main-slide", {
    effect: "fade",
    loop: true,
      // autoplay: true 도 가능하며 객체 데이터로 할당하면 추가적인 옵션 설정 가능
  autoplay: {
    // 자동재생 여부
    delay: 2000, // 시작시간 설정
  },
    pagination: {
      el: ".pagination"
    }
  });


  /**
   * @스크롤헤더
   * 
   */

  let lastScroll = 0;
  $(window).scroll(function () {
    curr = $(this).scrollTop(); //내현재크를바의 위치
    if (curr > 0) {
      $('.header').addClass('fixed')
    } else {
      $('.header').removeClass('fixed')
    }

    if (curr >= 10) {

      if (curr > lastScroll) {
        $('.fix-btn').removeClass('show');
      } else {
        $('.fix-btn').addClass('show');
      }

    } else {
      $('.fix-btn').removeClass('show');
    }
    lastScroll = curr;
  })
  $(window).trigger('scroll');





  $('.gnb .group-nav .btn-open').click(function () {
    $('.gnb').toggleClass('open');
    $('.gnb .group-sub').slideToggle()
  })



  var swiper = new Swiper(".product-slide1", {
    slidesPerView: 2.3,
    spaceBetween: 10,
  });

  var second = new Swiper(".product-slide2", {
    slidesPerView: 2.3,
    spaceBetween: 10,
  });

  var third = new Swiper(".product-slide3", {
    slidesPerView: 2.3,
    spaceBetween: 10,
  });


}) //지우지 마세요