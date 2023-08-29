$(function () { //문서 로드 후 최초 1회 
  
  // sidenav 닫고 열기
  $('#sideBtn').click(function () {
    $('.sidenav,.dimmed').addClass('on');
    $('body').addClass('no-scroll')
  })
  //btn-close,dimmed 눌렀을 때도 닫히게
  $('.sidenav .btn-close,.dimmed').click(function () {
    $('.sidenav,.dimmed').removeClass('on');
    $('body').removeClass('no-scroll')
  })


  $('.sidenav .nav').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('open').siblings('.sub-list').slideToggle()
  })

  // sc-search 닫고 열기
  $('.search').click(function () {
    $('.sc-search').addClass('on');
    $('body').addClass('no-scroll');
  })

  $('.sc-search .btn-side').click(function(){
    $('.sc-search').removeClass('on');
    $('body').removeClass('no-scroll');
  })

  // 탑슬라이드
  var topSlide = new Swiper(".top-slide", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay:3000,
      disableOnInteraction: false,
    }
  });

  // 메인슬라이드
  var mainSlide = new Swiper(".main-slide", {
    effect: "fade",
    loop: true,
  autoplay: {
    delay: 2000,
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
    curr = $(this).scrollTop();
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


/* 탑메뉴 */
  $('.gnb .group-nav .btn-open').click(function () {
    $('.gnb').toggleClass('open');
    $('.gnb .group-sub').slideToggle()
  })




/* 제품별 슬라이드 */
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