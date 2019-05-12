// 订票过滤模块
define([
    'art',
    'jquery',
    'text!/code/maizuo/modules/cinema/cinematag/filter/dinpiao/dinpiao.html',
    'cinemaList'
], function(art, $, dinpiaoTemp, cinemaListView) {
   let oSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAbCAMAAADIxWbRAAAARVBMVEVHcEz/Xxb/YRb/Xxb/Xxb/Yh3/Xxb/Xxb/YRb/axr/YBf/YRf/Xxf/YBf/Yhj/Xxb/Xxf/////YBn/qlX/Xxb/Xxb/XxbWaxl3AAAAFnRSTlMA2lni0Br8/VwTvFbdQj6d0QEyA7jNnhclQwAAAHZJREFUOMvl08cSgCAMBFAUK/a2//+pio5jIcje5fyGkGxQijjDODGsXDAzrAc0wRIgrzhW/I+1XUPdppHFTFEDETpvSyMJCi1IUOzUhZ6BvKF3bk/4Md47/EzhgoGwThjM9IBE9DusiQ2xkFokCwm2QaN9H3AFzvQKRwi3C2UAAAAASUVORK5CYII='

    //实现订票过滤条件的数据渲染
    function dinpiaoViewFn(){
        //定义数据
        let data =['APP订票','前台兑换'];
        //填充数据
        let html = art.render(dinpiaoTemp, data);
        //渲染数据
        
        $('#filter-wrap').html(html);
        //初始化样式
        let index = $('#cinema-tag-ul li:nth-of-type(2) span')[0].index;
        if(index){
            $('#dinpiao-ul li').eq(index).addClass('active');
            $('#dinpiao-ul li').eq(index)[0].firstElementChild.src = oSrc;
        }else{
            $('#dinpiao-ul li:first-child').addClass('active');
            $('#dinpiao-ul li:first-child img')[0].src = oSrc;
        }
        
        // 绑定点击事件
        $('#dinpiao-ul li').click(function(){
            //重置样式
            $('#dinpiao-ul li').each(function(i, el){
                el.firstElementChild.src = '';
                el.className = '';
            });
            //激活样式
            this.firstElementChild.src = oSrc;
            this.className = 'active';
            $('#cinema-tag-ul li:nth-of-type(2) span').html(this.lastElementChild.innerHTML);
            $('#cinema-tag-ul li:nth-of-type(2) span')[0].index = $(this).index();
            //保存数据的类型
            $('#cinema-tag-ul>li:nth-of-type(2)')[0].dataset.urltype = $(this).index();
            //实现过滤
            let dinpiaoDistrictid = $('#cinema-tag-ul>li:nth-of-type(1)')[0].dataset.districtid;
            //得到数据的类型
            let dinpiaoType = $('#cinema-tag-ul>li:nth-of-type(2)')[0].dataset.urltype;
          
            //显示过滤后的影院
            cinemaListView.cinemaListInitView(dinpiaoDistrictid,dinpiaoType)
            
        });

    }
    //提供接口
    return {
        dinpiaoInitView: dinpiaoViewFn
    }
    
});