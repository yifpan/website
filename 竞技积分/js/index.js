
$(function () {
    new cocogc();
    function cocogc() {
        //生产接口
        this.apiUrl = "https://api.cocogc.cn/";

        //吸顶
        var obj = document.querySelector(".nav-Wrap");
        var ot = obj.offsetTop;
        var st = document.body.scrollTop || document.documentElement.scrollTop;
        obj.setAttribute("data-fixed", st >= ot ? "fixed" : "");
        if (st < 1) {
            obj.removeAttribute("data-fixed");
            $(".logo").css("background-image", "url('images/logo.png')")
        } else {
            $(".logo").css("background-image", "url('images/logo1.png')")
        }
        document.onscroll = function () {
            st = document.body.scrollTop || document.documentElement.scrollTop;
            obj.setAttribute("data-fixed", st >= ot ? "fixed" : "");
            if (st < 1) {
                obj.removeAttribute("data-fixed");
                $(".logo").css("background-image", "url('images/logo.png')")
            } else {
                $(".logo").css("background-image", "url('images/logo1.png')")
            }
        }
        //导航栏滚动
        $(".nav-Wrap .nav-list li a").off("click").on("click", function () {
            var navIndex = $(this).parent().index();
            $(".nav-list li").removeClass("activeNav")
            $(".nav-list li").eq(navIndex).addClass("activeNav");
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, 500);
            return false;

        })
        $(".footer-nav li a").click(function () {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, 500);
            return false;
        })

        //新闻
        var newList = []
        $.ajax({
            type: "POST",
            url: this.apiUrl + "news/newsList",
            data: JSON.stringify({
                "catId": 202,
                "startNum": 0,
                "num": 20
            }),
            contentType: 'application/json',
            dataType: "json",
            success: function (result) {
                var data = result.data;
                for (var i = 0; i < data.length; i++) {
                    var createTime = data[i].createTime.replace('-', '.');
                    var creatMonth = createTime.substr(0, 7);
                    var creatDate = createTime.substr(8, 2);
                    var noticeTitle = data[i].noticeTitle;
                    var noticeContent = data[i].noticeContent;
                    var noticeId = data[i].noticeId
                    $(".contenHid").html(noticeContent);
                    var text = $(".contenHid").text();

                    var html = `<div class="swiper-slide">
                            <a href="articel.html?${noticeId}" >
                                    <div class="newsLi">
                                        <div class="left">
                                            <p>${creatDate}</p>
                                            <p>${creatMonth}</p>
                                        </div>
                                        <div class="right">
                                            <p>${noticeTitle}</p>
                                            <p class="notic">${text}</p>
                                        </div>
                                    </div>
                                    </a>
                                </div>`;
                    $(".news-wrapper").append(html);
                }
                //新闻中心
                this.mySwiperNew = new Swiper('#section-news .swiper-container', {
                    nextButton: '.news-swiperBntN',
                    prevButton: '.news-swiperBntP',
                    pagination: '.swiper-pagination',
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    paginationClickable: true,
                    // spaceBetween: 30
                })
            },
            error: function (result) {

            }
        });

        //案例展示
        $.ajax({
            type: "POST",
            url: this.apiUrl + "news/newsList",
            data: JSON.stringify({
                "catId": 203,
                "startNum": 0,
                "num": 20
            }),
            contentType: 'application/json',
            dataType: "json",
            success: function (result) {
                var data = result.data;
                for (var i = 0; i < data.length; i++) {
                    var createTime = data[i].createTime.replace('-', '.');
                    var creatMonth = createTime.substr(0, 7);
                    var creatDate = createTime.substr(8, 2);
                    var noticeTitle = data[i].noticeTitle;
                    var noticeContent = data[i].noticeContent;
                    $(".contenHid").html(noticeContent);
                    var text = $(".contenHid").text();

                    var html = `<div class="swiper-slide ">
                        <div class="case-LiWrap">
                            <div class="case-Li">
                                <span class="case-green"></span>
                                <h3 class="case-name">${noticeTitle}</h3>
                                <p class="case-content ${text.length}">${text}</p>
                                <span class="case-more"></span>
                            </div>
                        </div>
                    </div>`;

                    $(".case-wrapper").append(html);

                }

                // // 案例展示
                this.mySwiperNew = new Swiper('#section-case .swiper-container', {
                    slidesPerView: 5,
                    pagination: '.swiper-pagination',
                    // loop: true,
                    spaceBetween: 50,
                    grabCursor: true,

                })
            },
            error: function (result) {

            }
        });


        //banner
        this.mySwiperNav = new Swiper('#header-nav .swiper-container', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: false,
            // autoplay: 2000,
            // autoplayDisableOnInteraction : false,
            noSwiping:true
        })


        //联系我们
        this.mySwiperCont = new Swiper('#section-contact .swiper-container', {
            slidesPerView: 2,
            // slidesPerGroup: 5,
            pagination: '.swiper-pagination',
            nextButton: '.contact-swiperBntN',
            prevButton: '.contact-swiperBntP',
            spaceBetween: 25,
            // loop: true,
            grabCursor: true,
            // simulateTouch: false,
            noSwiping:true
        })


        //项目特色
        var _this = this;
        this.swiperActive = function () {
            var swiperActive = $(".feature-wrapper").find(".swiper-slide-active").attr("data-swiper-slide-index");
            switch (swiperActive) {
                case "0":
                    $(".feature-left01").show();
                    $(".feature-left02").hide();
                    $(".feature-left03").hide();
                    $(".feature-left04").hide();
                    $(".feature-left05").hide();
                    break;
                case "1":
                    $(".feature-left02").show();
                    $(".feature-left01").hide();
                    $(".feature-left03").hide();
                    $(".feature-left04").hide();
                    $(".feature-left05").hide();
                    break;
                case "2":
                    $(".feature-left03").show();
                    $(".feature-left01").hide();
                    $(".feature-left02").hide();
                    $(".feature-left04").hide();
                    $(".feature-left05").hide();
                    break;
                case "3":
                    $(".feature-left04").show();
                    $(".feature-left01").hide();
                    $(".feature-left02").hide();
                    $(".feature-left03").hide();
                    $(".feature-left05").hide();
                    break;
                case "4":
                    $(".feature-left05").show();
                    $(".feature-left01").hide();
                    $(".feature-left02").hide();
                    $(".feature-left03").hide();
                    $(".feature-left04").hide();
                    break;
            }
        }

        //项目特色
        this.mySwiperCont = new Swiper('#section-feature .swiper-container', {
            slidesPerView: 1,
            nextButton: '.feature-swiperBntN',
            prevButton: '.feature-swiperBntP',
            spaceBetween: 60,
            loop: true,
            simulateTouch: false,
            autoplay:3000,
            autoplayDisableOnInteraction : false,
            noSwiping:false
        })

        setInterval(function () {
            _this.swiperActive();
        }, 500)

        $(".feature-swiperBntN").off("click").on("click", function () {
            _this.swiperActive();
        })

        $(".feature-swiperBntP").off("click").on("click", function () {
            _this.swiperActive();
        })

        $(".profit-Ulclick li").hover(function () {
            $(this).find(".profit-descript").show();
            $(this).find(".profit-img").hide();
            $(this).find(".profit-imga").show();
            // $(this).addClass("profit-liHover")
        }, function () {
            $(this).find(".profit-descript").hide();
            $(this).find(".profit-img").show();
            $(this).find(".profit-imga").hide();
            // $(this).removeClass("profit-liHover")
        })

        $(".feature-swiperBntP").hover(function () {
            $(".feature-bntP").css("background", "#46464F");
            $(".feature-bntP img").attr('src', 'images/arrow_lefth.png');
            $(".feature-bntN img").attr('src', 'images/arrow_right.png');
            $(".feature-bntN").css("background", "#232429")
        })

        $(".feature-swiperBntN").hover(function () {
            $(".feature-bntP img").attr('src', 'images/arrow_righth.png');
            $(".feature-bntN img").attr('src', 'images/arrow_left.png');
            $(".feature-bntP").css("background", "#232429");
            $(".feature-bntN").css("background", "#46464F");
        })


        $(".footer-wx").hover(function () {
            $(".footer-wxg").show();
        }, function () {
            $(".footer-wxg").hide();
        })


        $(window).on('scroll', function (e) {
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            if (818 >= top) {
                $(".nav-list li").removeClass("activeNav");
                $(".nav-list li").eq(0).addClass("activeNav");
            } else if (818 < top && top <= 1448) {
                $(".nav-list li").removeClass("activeNav");
                $(".nav-list li").eq(1).addClass("activeNav");

            } else if (1448 < top && top <= 2088) {
                $(".nav-list li").removeClass("activeNav");
                $(".nav-list li").eq(2).addClass("activeNav");

            } else if (2088 < top && top <= 2713) {
                $(".nav-list li").removeClass("activeNav");
                $(".nav-list li").eq(3).addClass("activeNav");

            } else if (2713 < top && top <= 3314) {
                $(".nav-list li").removeClass("activeNav");
                $(".nav-list li").eq(4).addClass("activeNav");

            } else if (top > 3314) {
                $(".nav-list li").removeClass("activeNav");
                $(".nav-list li").eq(5).addClass("activeNav");
            }

        });

        $('.copy').off("click").on("click",function(){
            var Url2 = document.getElementById("copyAddress").innerText;
            var oInput = document.createElement('input');
            oInput.value = Url2;
            document.body.appendChild(oInput);
            oInput.select();
            document.execCommand("Copy");
            oInput.className = 'oInput';
            oInput.style.display = 'none';
            alert('复制成功');
        })
    }
})
