$(function(){
   var jdEle=new jdContent();
    jdEle.swiperLeft();
    jdEle.swiperRight();
    jdEle.leftCeiling();
}) 
   


// 封装成对象 
var jdContent = function () {}
jdContent.prototype = {
    // 左侧内容滑动
    swiperLeft: function () {
        var swiper = new Swiper('#contentL .swiper-container', {
            direction: 'vertical', //滑动方向
            slidesPerView: 'auto', //根据轮播图的高度宽度自动适应放几张图片
            freeMode: true, //是否要回弹 弹簧效果
            mousewheel: true, //允许鼠标滚轮滚动
        });
    },
    // 右侧内容滑动
    swiperRight: function () {
        var swiper = new Swiper('#contentR .swiper-container', {
            direction: 'vertical', //滑动方向
            slidesPerView: 'auto', //根据轮播图的高度宽度自动适应放几张图片
            freeMode: true, //是否要回弹 弹簧效果
            scrollbar: {
                el: '.swiper-scrollbar', //添加滚动条
            },
            mousewheel: true, //允许鼠标滚轮滚动
        });
    },

    // 左侧点击吸顶
    leftCeiling: function () {
        //实现点击某个li,该li置顶,即内容盒子向上移动
        /* 1. 遍历li,给每一个li添加它的索引
              添加索引的方法:
                ① 给li dom对象添加一个属性index 存放当前li的下标
                  该属性是在js对象中,直接用点语法添加,用点语法获取
                ② 给li自定义一个行内属性 index 用来存放当前li的下标
                  该属性在行内,用setAttribute设置,用geiAttribute获取
            2.  需要给每一个li点击事件
                当需要给很多子元素添加重复事件时,可以给它们的父元素添加使用事件,捕获到子元素
                所以给ul点击事件
                 ① 获取当前点击的li
                  var li = e.target.parentNode;
                 ② 获取到当前li的下标 
                 var index = li.index
                 ③ 获取到li的高度 offsetHeight
                 ④ 计算出内容盒子需要移出去的距离 =  - (当前li的下标index)*li的高度;
                 ⑤ 求出内容盒子能够移出的最大距离 = 内容盒子父元素的高度-内容盒子的高度 
                    这个值也是负值,因为内容盒子的高度要大于它的父盒子的高度
                 ⑥ 判断: 如果 需要移出去的距离的绝对值 > 能够移出去的最大距离的绝对值
                        那么,就只能移出最大距离 transform
                        否则,就移出计算出来的需要移出的距离
          */  

          var ul = $('#contentL ul');
          var lis = ul.children();
          lis.each(function(index,ele){
            $(ele).attr('index',index);
          })
        
          ul.on('click',function (e) {
               var li = $(e.target).parent();
               var index=li.attr("index");
               console.log(index);
               var liHeight=li.height();
               var distance=-index*liHeight;
               var maxLeave = $('#contentL').height()-ul.height();
               if(distance>maxLeave) {
                   ul.parent().css('transform',"translate(0px,"+distance+"px)");
               }else {
                ul.parent().css('transform',"translate(0px,"+maxLeave+"px)");
               }
                lis.removeClass('active');
                li.addClass('active');
          })
    }

}