window.addEventListener('load', function () {

    /**************** 封装成函数 **************8 */
    //秒杀倒计时
    // downTime();

    // // 顶部背景色渐变
    // searchGradual();

    // // 轮播图初始化
    // slider();


    /************* 封装成对象 ***************8 */
    //秒杀倒计时
    // jdEffect.downTime();

    // // 顶部背景色渐变
    // jdEffect.searchGradual();

    // // 轮播图初始化
    // jdEffect.slider();


     /************* 封装成框架 ***************8 */
 
     //实例化对象

     var jdEffect=new JDEffect();

     //秒杀倒计时
    jdEffect.downTime();

    // 顶部背景色渐变
    jdEffect.searchGradual();

    // 轮播图初始化
    jdEffect.slider();

})

/*************************** 封装成函数 *******************************8 */

//秒杀倒计时功能代码
// function downTime() {
//     // 秒杀倒计时
//     // 1. 获取未来时间 毫秒
//     // 2. 获取当前时间 毫秒
//     // 3. 计算出时间毫秒差 time
//     // 4. 根据毫秒计算出小时hour= time/3600
//     // 5. 分 min= time%3600/60
//     // 6. 秒 second= time/60
//     // 7. 将时分秒赋给span,计算出每个span 放的数字
//     var futureTime = Math.floor(new Date(2018, 8, 22, 17, 30, 00).getTime());
//     // console.log(futureTime);
//     var currentTime = Math.floor(new Date().getTime());
//     // console.log(currentTime);
//     var time = (futureTime - currentTime) / 1000;
//     // console.log(time);
//     setInterval(function () {
//         time--;
//         var hour = Math.floor(time / 3600);
//         var min = Math.floor(time % 3600 / 60);
//         var second = Math.floor(time % 60);
//         // console.log(hour, min, second);
//         var spans = document.querySelectorAll('.time span');
//         spans[0].innerHTML = Math.floor(hour / 10);
//         spans[1].innerHTML = Math.floor(hour % 10);
//         spans[3].innerHTML = Math.floor(min / 10);
//         spans[4].innerHTML = Math.floor(min % 10);
//         spans[6].innerHTML = Math.floor(second / 10);
//         spans[7].innerHTML = Math.floor(second % 10);

//     }, 1000)
// }

// 实现顶部背景颜色渐变功能代码
// function searchGradual() {
//     // 背景颜色的透明度=滚出去的距离/轮播图的高度
//     // 给window一个滚动事件
//     var header = document.querySelector('#header');
//     //  将滚出去的距离/轮播图的高度比的透明度封装成函数
//     //是为了解决 如果是在页面中间刷新,没有滚动,这时头部没有触发滚动事件,头部背景色是透明的
//     // 所以需要在事件外面再调用一次
//     function scroll() {
//         // 获取文档html滚出去的距离
//         var scrollTop = document.documentElement.scrollTop;
//         // console.log(scrollTop);
//         // 获取到轮播图的高度
//         var sliderHeight = document.querySelector('#banner').offsetHeight;
//         // console.log(sliderHeight);
//         var opacity = scrollTop / sliderHeight;
//         if (opacity > 1) {
//             header.style.backgroundColor = "rgba(222, 24, 27,1)";
//         }
//         header.style.backgroundColor = "rgba(222, 24, 27," + opacity + ")";
//     }
//     window.addEventListener('scroll', scroll);
//     scroll();
// }

// 轮播图初始化功能代码
// function slider() {
//     var mySwiper = new Swiper('.swiper-container', {
//         autoplay: {
//             delay: 2000,
//             stopOnLastSlide: false,
//             disableOnInteraction: false, //用户手动滑动后是否停止自动轮播
//         },

//         loop: true,
//         pagination: {
//             el: '.swiper-pagination',
//         },

//     });
// }


/*************************** 封装成对象 *******************************8 */

// var jdEffect = {
//     downTime: function () {
//         // 秒杀倒计时
//         // 1. 获取未来时间 毫秒
//         // 2. 获取当前时间 毫秒
//         // 3. 计算出时间毫秒差 time
//         // 4. 根据毫秒计算出小时hour= time/3600
//         // 5. 分 min= time%3600/60
//         // 6. 秒 second= time/60
//         // 7. 将时分秒赋给span,计算出每个span 放的数字
//         var futureTime = Math.floor(new Date(2018, 8, 22, 17, 30, 00).getTime());
//         // console.log(futureTime);
//         var currentTime = Math.floor(new Date().getTime());
//         // console.log(currentTime);
//         var time = (futureTime - currentTime) / 1000;
//         // console.log(time);
//         setInterval(function () {
//             time--;
//             var hour = Math.floor(time / 3600);
//             var min = Math.floor(time % 3600 / 60);
//             var second = Math.floor(time % 60);
//             // console.log(hour, min, second);
//             var spans = document.querySelectorAll('.time span');
//             spans[0].innerHTML = Math.floor(hour / 10);
//             spans[1].innerHTML = Math.floor(hour % 10);
//             spans[3].innerHTML = Math.floor(min / 10);
//             spans[4].innerHTML = Math.floor(min % 10);
//             spans[6].innerHTML = Math.floor(second / 10);
//             spans[7].innerHTML = Math.floor(second % 10);

//         }, 1000)
//     },
//     searchGradual: function () {
//         // 背景颜色的透明度=滚出去的距离/轮播图的高度
//         // 给window一个滚动事件
//         var header = document.querySelector('#header');
//         //  将滚出去的距离/轮播图的高度比的透明度封装成函数
//         //是为了解决 如果是在页面中间刷新,没有滚动,这时头部没有触发滚动事件,头部背景色是透明的
//         // 所以需要在事件外面再调用一次
//         function scroll() {
//             // 获取文档html滚出去的距离
//             var scrollTop = document.documentElement.scrollTop;
//             // console.log(scrollTop);
//             // 获取到轮播图的高度
//             var sliderHeight = document.querySelector('#banner').offsetHeight;
//             // console.log(sliderHeight);
//             var opacity = scrollTop / sliderHeight;
//             if (opacity > 1) {
//                 header.style.backgroundColor = "rgba(222, 24, 27,1)";
//             }
//             header.style.backgroundColor = "rgba(222, 24, 27," + opacity + ")";
//         }
//         window.addEventListener('scroll', scroll);
//         scroll();
//     },
//     slider: function () {
//         var mySwiper = new Swiper('.swiper-container', {
//             autoplay: {
//                 delay: 2000,
//                 stopOnLastSlide: false,
//                 disableOnInteraction: false, //用户手动滑动后是否停止自动轮播
//             },

//             loop: true,
//             pagination: {
//                 el: '.swiper-pagination',
//             },

//         });
//     }
// }


/*************************** 封装成框架 *******************************8 */
// 创建一个构造函数
var JDEffect=function () {  }
JDEffect.prototype = {
    downTime: function () {
        // 秒杀倒计时
        // 1. 获取未来时间 毫秒
        // 2. 获取当前时间 毫秒
        // 3. 计算出时间毫秒差 time
        // 4. 根据毫秒计算出小时hour= time/3600
        // 5. 分 min= time%3600/60
        // 6. 秒 second= time/60
        // 7. 将时分秒赋给span,计算出每个span 放的数字
        var futureTime = Math.floor(new Date(2018, 8, 22, 17, 30, 00).getTime());
        // console.log(futureTime);
        var currentTime = Math.floor(new Date().getTime());
        // console.log(currentTime);
        var time = (futureTime - currentTime) / 1000;
        // console.log(time);
        setInterval(function () {
            time--;
            var hour = Math.floor(time / 3600);
            var min = Math.floor(time % 3600 / 60);
            var second = Math.floor(time % 60);
            // console.log(hour, min, second);
            var spans = document.querySelectorAll('.time span');
            spans[0].innerHTML = Math.floor(hour / 10);
            spans[1].innerHTML = Math.floor(hour % 10);
            spans[3].innerHTML = Math.floor(min / 10);
            spans[4].innerHTML = Math.floor(min % 10);
            spans[6].innerHTML = Math.floor(second / 10);
            spans[7].innerHTML = Math.floor(second % 10);

        }, 1000)
    },
    searchGradual: function () {
        // 背景颜色的透明度=滚出去的距离/轮播图的高度
        // 给window一个滚动事件
        var header = document.querySelector('#header');
        //  将滚出去的距离/轮播图的高度比的透明度封装成函数
        //是为了解决 如果是在页面中间刷新,没有滚动,这时头部没有触发滚动事件,头部背景色是透明的
        // 所以需要在事件外面再调用一次
        function scroll() {
            // 获取文档html滚出去的距离
            var scrollTop = document.documentElement.scrollTop;
            // console.log(scrollTop);
            // 获取到轮播图的高度
            var sliderHeight = document.querySelector('#banner').offsetHeight;
            // console.log(sliderHeight);
            var opacity = scrollTop / sliderHeight;
            if (opacity > 1) {
                header.style.backgroundColor = "rgba(222, 24, 27,1)";
            }
            header.style.backgroundColor = "rgba(222, 24, 27," + opacity + ")";
        }
        window.addEventListener('scroll', scroll);
        scroll();
    },
    slider: function () {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false, //用户手动滑动后是否停止自动轮播
            },

            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },

        });
    }
}