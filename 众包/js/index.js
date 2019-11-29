
$(function () {
  new collect();
  function collect() {
    this.apiUrl = "https://api.cocogc.cn/";
    //banner
    this.mySwiperNav = new Swiper('#header-nav .swiper-container', {
      pagination: '.swiper-pagination',
      // loop: true,
      // autoplay: 2000,
      autoplayDisableOnInteraction : false,
    })

    // 顶部
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    $(".nav-Wrap").attr("data-fixed", top>0 ? "fixed" : "");
    $(".nav-Wrap .logo").css("background-image", top>0 ? "url('images/logo1.png')" : "url('images/logo.png')");

    // 弹窗
    $(".close").on('click',function(){
      $(".zizhi-wrap").hide();
      $(".zizhi").css('transform','translateY(0px)');
    })

    $(".zizhi-wrap .bnt").on('click',function(){
        $(".zizhi-wrap").hide();
        $(".zizhi").css('transform','translateY(0px)');
    })

    $('.showZizhi').on('click',function(){
        $(".zizhi-wrap").show();
        $(".zizhi").show().css('transform','translateY(150px)');
    })
    
    //导航栏滚动
    $(".nav-Wrap .nav-list li a").off("click").on("click", function () {
        var navIndex = $(this).parent().index();
        $(".nav-list li").find('a').removeClass("activeNav");
        $(".nav-list li").find('a').eq(navIndex).addClass("activeNav");
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, 500);
        return false;
    })

    $(".adv-ul li").hover(function () {
      $(this).find(".adv-imga").show();
      $(this).find(".adv-infoa").show();
      $(this).find(".adv-img").hide();
      $(this).find(".adv-info").hide();
      $(this).css('background',"#fff");
      $(this).removeClass("animate-visible").removeClass("animate-hidden").addClass("animate-visible");
    }, function () {
        $(this).find(".adv-img").show();
        $(this).find(".adv-info").show();
        $(this).find(".adv-imga").hide();
        $(this).find(".adv-infoa").hide();
        $(this).css('background',"transparent");
        $(this).removeClass("animate-visible").addClass("animate-hidden")
    })


    $(window).on('scroll', function (e) {
      var top = document.documentElement.scrollTop || document.body.scrollTop;
      $(".nav-Wrap").attr("data-fixed", top>0 ? "fixed" : "");
      $(".nav-Wrap .logo").css("background-image", top>0 ? "url('images/logo1.png')" : "url('images/logo.png')");
      if (712 >= top) {
          $(".nav-list li").find('a').removeClass("activeNav");
      } else if (712 < top && top <= 2690) {
          $(".nav-list li").find('a').removeClass("activeNav");
          $(".nav-list li").eq(0).find('a').addClass("activeNav");

      } else if (2690 < top && top <= 4083) {
          $(".nav-list li").find('a').removeClass("activeNav");
          $(".nav-list li").eq(1).find('a').addClass("activeNav");

      } else if (4083 < top && top <= 5980) {
          $(".nav-list li").find('a').removeClass("activeNav");
          $(".nav-list li").eq(2).find('a').addClass("activeNav");

      } else if (5980 < top && top <= 6736) {
          $(".nav-list li").find('a').removeClass("activeNav");
          $(".nav-list li").eq(3).find('a').addClass("activeNav");

      } else if (top > 6736) {
          $(".nav-list li").find('a').removeClass("activeNav");
          $(".nav-list li").eq(4).find('a').addClass("activeNav");
      }
  });

  }
})