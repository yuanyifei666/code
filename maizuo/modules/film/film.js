//电影页面模块
require.config({
    paths: {
        banner: './film/banner/banner',
        filmTag: './film/tag/filmTag',
        filmList: './film/filmList/filmList'
    }
})
define(['art','jquery','text!film.html','banner', 'filmTag', 'filmList'],(art ,$,oTemp, bannerView, filmTagView,filmListView) => {
  
    function filmFn(){
        //获取数据
        let page = {name: '电影'}
        //填充数据
        let html = art.render(oTemp,page);
        //数据的渲染
        $('#content-view').html(html);
        //渲染banner
        bannerView.initBanner();
        //渲染选项卡
        filmTagView.initTag();
        //渲染电影列表
        filmListView.filmListInit('https://www.easy-mock.com/mock/5cb69688611c6a301b7fb462/yuan/maizuoIsPresale')
    }

    // 返回渲染页面的接口
    return {
        initView: filmFn
    }
    

});