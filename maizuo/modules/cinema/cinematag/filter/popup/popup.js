// 订票过滤模块
define([
    'art',
    'jquery',
    'text!/code/maizuo/modules/cinema/cinematag/filter/popup/popup.html'
], function(art, $, popupTemp) {
   let oSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAbCAMAAADIxWbRAAAARVBMVEVHcEz/Xxb/YRb/Xxb/Xxb/Yh3/Xxb/Xxb/YRb/axr/YBf/YRf/Xxf/YBf/Yhj/Xxb/Xxf/////YBn/qlX/Xxb/Xxb/XxbWaxl3AAAAFnRSTlMA2lni0Br8/VwTvFbdQj6d0QEyA7jNnhclQwAAAHZJREFUOMvl08cSgCAMBFAUK/a2//+pio5jIcje5fyGkGxQijjDODGsXDAzrAc0wRIgrzhW/I+1XUPdppHFTFEDETpvSyMJCi1IUOzUhZ6BvKF3bk/4Md47/EzhgoGwThjM9IBE9DusiQ2xkFokCwm2QaN9H3AFzvQKRwi3C2UAAAAASUVORK5CYII='

    //实现订票过滤条件的数据渲染
    function popupViewFn(){
        //定义数据
        let data =['最近去过','离我最近'];
        //填充数据
        let html = art.render(popupTemp, data);
        //渲染数据
        
        $('#filter-wrap').html(html);
        //初始化样式
        let index = $('#cinema-tag-ul li:nth-of-type(3) span')[0].index;
        if(index){
            $('#popup-ul li').eq(index).addClass('active');
            $('#popup-ul li').eq(index)[0].firstElementChild.src = oSrc;
        }else{
            $('#popup-ul li:first-child').addClass('active');
            $('#popup-ul li:first-child img')[0].src = oSrc;
        }
        
        // 绑定点击事件
        $('#popup-ul li').click(function(){
            //重置样式
            $('#popup-ul li').each(function(i, el){
                el.firstElementChild.src = '';
                el.className = '';
            });
            //激活样式
            this.firstElementChild.src = oSrc;
            this.className = 'active';
            $('#cinema-tag-ul li:nth-of-type(3) span').html(this.lastElementChild.innerHTML);
            $('#cinema-tag-ul li:nth-of-type(3) span')[0].index = $(this).index();
            //实现过滤????

        });

    }
    //提供接口
    return {
        popupInitView: popupViewFn
    }
    
});