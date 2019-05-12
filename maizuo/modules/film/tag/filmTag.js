// 选项卡
define([
    'art',
    'jquery',
    'text!filmTag.html',
    'filmList'
], function(art, $, filmTagTmp,filmListView) {
    
    //选项卡的切换
    function switchTagFn(){
        //定义数据
        let tagData = ['正在热映', '即将上映'];
        //填充数据
        let html = art.render(filmTagTmp, tagData);
        //渲染数据集
        $('#film-view-tags').html(html);
        // 初始化选项卡的样式active
        $('.film-tag span').eq(0).addClass('active');
        // 给切换按钮绑定点击事件
        $('.film-tag li').click(function(){
            //重置样式
            $('.film-tag span').each(function(i, el){
                el.className = '';
            });
            //激活样式
            $('.film-tag span').eq($(this).index()).addClass('active');
            document.documentElement.scrollTop = 0;
            //渲染对应的电影列表数据
            switch($(this).index()){
                case 0: //正在热映
                     filmListView.filmListInit('https://www.easy-mock.com/mock/5cb69688611c6a301b7fb462/yuan/maizuoIsPresale')
                     break;
                case 1: //即将上映
                    filmListView.filmListInit('https://www.easy-mock.com/mock/5cb69688611c6a301b7fb462/yuan/maizuoNoPresale')
                    break;
            }
        });
        //当切换栏到达顶部时使用固定定位
        window.onscroll = function(){
            let oTop = document.documentElement.scrollTop;
            if(oTop >= 210){
                //使用固定定位固定在顶部
                $('.film-tag')[0].className = 'film-tag flim-tag-fixed';
            }else{
                $('.film-tag')[0].className = 'film-tag';
            }
        }
    }
    //提供接口 给外部调用
    return {
        initTag: switchTagFn
    }
    
});