$(document).ready(function () {
  $(".nav-toggle_icon").click(function (e) {
    e.preventDefault();
    $(".nav-toggle_section").css("left", "0px");
    $(".nav-toggle_section").css({
      transition: "all .5s ease",
    });
  });
  $(".nav-sections_switch").click(function (e) {
    e.preventDefault();
    $(".nav-toggle_section").css("left", "-360px");
  });

  // TODO:try to use transition-delay

  $(".nav-section_item").on("mouseenter", function () {
    console.log("mouse-in");
    var openDiv = $(this).find(".navigation-column");
    setTimeout(function () {
      console.log("display:block");
      openDiv.addClass("block");
      setTimeout(function () {
        console.log("opacity:1");
        openDiv.addClass("open");
      }, 100);
    }, 300);
  });
  stop();


  $(".nav-section_item").on("mouseleave", function () {
    console.log("mouse-out");
    var openDiv = $(this).find(".navigation-column");
    openDiv.removeClass("open");
    console.log("opacity:0");
    setTimeout(function () {
      openDiv.removeClass("block");
      console.log("display:none");
    }, 800);
  });

  // scroll event
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".page-header").css("margin-top", "-40px");
      $(".page-header").addClass("style-fixed");
    } else {
      $(".page-header").css("margin-top", "0px");
      $(".page-header").removeClass("style-fixed");
    }
  });

  // feature-blog_swiper
  var swiper = new Swiper(".feature-blog_swiper-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    speed: 700,
    navigation: {
      nextEl: ".feature-blog_swiper-body .swiper-button-next",
      prevEl: ".feature-blog_swiper-body .swiper-button-prev",
    },
  });
  stop();

  var swiper = new Swiper(".feature-social_swiper-container", {
    slidesPerView: 5,
    spaceBetween: 18,
    slidesPerGroup: 5,
    speed: 1000,
    navigation: {
      nextEl: ".feature-social_container .swiper-button-next",
      prevEl: ".feature-social_container .swiper-button-prev",
    },
  });
  stop();

  $(".feature-social_swiper-container .swiper-slide").on(
    "mouseenter",
    function () {
      var showDiv = $(this).find(".feature-social_swiper-slide_box");
      showDiv.addClass("show");
    }
  );
  $(".feature-social_swiper-container .swiper-slide").on(
    "mouseleave",
    function () {
      var showDiv = $(this).find(".feature-social_swiper-slide_box");
      showDiv.removeClass("show");
    }
  );

  // social_swiper-slide
  $(".feature-social_swiper-slide_box").find(".test").text("0");
  $(".social_swiper-slide_button-plus").on("click", function () {
    // showNum = showNum + 1;
    var $nubDiv = $(this)
      .closest(".feature-social_swiper-slide_box")
      .find(".test");
    var nubText = $nubDiv.text();
    // nubText++ = nubText + 1
    nubText++;
    $nubDiv.text(nubText);
    // $('#c1').html(showNum);
    // document.getElementById("c1").innerHTML = showNum;
  });

  $(".feature-social_swiper-slide_box").find(".test").text("0");
  $(".social_swiper-slide_button-minus").on("click", function () {
    var $numDiv = $(this)
      .closest(".feature-social_swiper-slide_box")
      .find(".test");
    var nubText = $numDiv.text();
    if (nubText > 0) {
      nubText--;
    }
    $numDiv.text(nubText);
  });

  // product_swiper-slide
  var swiper = new Swiper('.feature-product_swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
      nextEl: '.feature-product_swiper_button-next .swiper-button-next',
      prevEl: '.feature-product_swiper_button-prev .swiper-button-prev',
    },
    speed: 700
  });


  $(".feature-social_swiper-slide_box").click(function (e) {
    e.preventDefault();
    $('body').addClass('fixed');
    $('.full-page_part_background').addClass('block');
  });
  $('.full-page_section').click(function (e) {
    e.preventDefault();
    $('body').removeClass('fixed');
    $('.full-page_part_background').removeClass('block');
  });

});