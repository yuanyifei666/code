// 轮播图
define([
    'art',
    'jquery',
    'common',
    'text!banner.html'
], function(art, $, sengRequired, bannerTemp) {
   
    //banner的渲染
    function bannerViewFn(){
        let url = 'https://www.easy-mock.com/mock/5cb69688611c6a301b7fb462/yuan/maizuo/banner'
      //请求数据
      sengRequired(url).then((data) => {
            // console.log(data);
            let html = art.render(bannerTemp, data.data);
            //数据渲染
            $('#film-view-banner').html(html);
      });
    }

     return {
         initBanner: bannerViewFn
     }

});