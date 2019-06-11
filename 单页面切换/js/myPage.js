$(function () {
    var flag = false;
    var k = $(window).height();//当前屏幕的高度
    //点击next往下走
    $(".next").click(function (event) {
        $.fn.fullpage.moveSectionDown();
    })
    $('#fullpage').fullpage({
        navigation: true,
        //navigationPosition:"left",
        //loopBottom:true,
        scrollingSpeed: 1200,
        /* 回调函数 */
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                $(".next").fadeOut();
                $(".search").show().animate({ "right": 370 }, 1500, "easeOutBack", function () {
                    // 方块走进来，沙发2个字显示
                    $(".search-wrods").animate({ "opacity": 1 }, 500, function () {
                        $(".search").hide();
                        // 图片 往右上角， 缩小
                        $(".search-02-1").show().animate({ "height": 30, "right": 250, "bottom": 452 }, 1000);
                        // 同时 沙发图片 变大
                        $(".goods-02").show().animate({ "height": 218 }, 1000)
                        // 同时 白色文字渐渐的显示出来
                        $(".words-02").animate({ "opacity": 1 }, 500, function () {
                            $(".next").fadeIn();
                        })
                    });
                });
            }
        },
        onLeave:function (index, nextIndex, direction) {
            $(".next").fadeOut();
            if (index == 2 && nextIndex == 3) {
                $(".shirt-02").show().animate({ "bottom": -(k - 250), "width": 207, "left": 260 }, 2000, function () {
                    $(".img-01-a").animate({ "opacity": 1 }, 500, function () {
                        $(".btn-01-a").animate({ "opacity": 1 }, 500, function () {
                            $(".next").fadeIn();
                        })
                    })
                });
                $(".cover").show();
            }
            if (index == 3 && nextIndex == 4) {
                $('.shirt-02').hide();
                //沙发的距离 bottom:-(k-300)
                $('.t1f').show().animate({ "bottom": -((k - 250) + 50), "left": 260 }, 2000, function () {
                    $(this).hide();
                    $(".car-img").show();
                    $(".car").animate({ "left": "150%" }, 3000, "easeInElastic", function () {
                        $(".note").show();
                        $(".note-img,.words-04-a").animate({ "opacity": 1 }, 1000,function(){
                            $(".next").fadeIn();
                        });
                    });
                });

            }
            if (index == 4 && nextIndex == 5) {
                $(".hand-05").animate({ "bottom": 0 }, 2000, function () {
                    $(".mouse-05-a").animate({ "opacity": 1 });
                    $(".t1f-05").show().animate({ "bottom": 70 }, 1000, function () {
                        $(".order-05").animate({ "bottom": 390 }, function () {
                            $(".words-05").addClass("words-05-a");
                            $(".next").fadeIn();
                        });
                    })
                })
            }
            if (index == 5 && nextIndex == 6) {
                $(".t1f-05").animate({ "bottom": -(k - 500), "left": "40%", "width": 65 }, 1500, function () {
                    $(".t1f-05").hide();
                })
                $(".box-06").animate({ "left": "38%", "opacity": 1 }, 1500, function () {
                    $(".box-06").animate({ "bottom": 40 }, 500, function () {
                        $(".box-06").hide();
                        //行走的過程就是背景移動的過程
                        $(".section6").animate({ "backgroundPositionX": "100%" }, 4000, function () {
                            //当背景动画执行完毕 boy 大小复原
                            $(".boy").show().animate({ "height": 305, "bottom": 116 }, 1000, function () {
                                $(this).animate({ "right": 500 }, 500, function () {
                                    $(".door").animate({ "opacity": 1 }, 200, function () {
                                        $(".girl").show().animate({ "right": 350, "height": 306 }, 500, function () {
                                            $(".pop-07").show();
                                        })
                                        $(".words-06-a").show().animate({ "left": "35%" }, 2000, "easeOutElastic",function(){
                                            $(".next").fadeIn();
                                        });
                                    })
                                })
                            })
                        })
                        //光的速度

                        $(".pop-06").show()
                    });
                });
            }
            if (index == 6 && nextIndex == 7) {
                $(".xx").eq(0).animate({ "opacity": 1 }, 400, function () {
                    $(".xx").eq(1).animate({ "opacity": 1 }, 400, function () {
                        $(".xx").eq(2).animate({ "opacity": 1 }, 400, function () {
                            $(".xx").eq(3).animate({ "opacity": 1 }, 400, function () {
                                $(".xx").eq(4).animate({ "opacity": 1 }, 400, function () {
                                    $(".good-07").show();
                                    $(".next").fadeIn();
                                })
                            })
                        })
                    })
                })
            }
            //这是第八屏动画；
            /* $(".beginShoping").mouseenter(function(e){
                $(".btn-08-a").show()
            }).mouseleave(function(e){
                $(".btn-08-a").hide();
            }) */
            //我们可以用hover和toggle来显示离开隐藏；
            $(".beginShoping").hover(function () {
                $(".btn-08-a").toggle();
            })
            $(document).mousemove(function (event) {
                var x = event.pageX - $(".hand-08").width() / 2;
                var y = event.pageY + 20;
                //手的top值不能小于当前屏幕的高减去图片高;
                var minY = k - 449;
                if (y < minY) {
                    y = minY;
                }
                $(".hand-08").css({ "left": x, "top": y });
            })
            //当我们点击再来一次的时候，分两步进行
            //1.返回第一屏幕
            $(".again").click(function (event) {
                $.fn.fullpage.moveTo(1);
                //2.所有动画都复原
                //核心原理就是 让我们的图片（做动画的元素 清除 行内样式就可以）
                //所有做动画的div 盒子添加 move 类名
                $("img,.move").attr("style", "");
            });

        },
    });
});