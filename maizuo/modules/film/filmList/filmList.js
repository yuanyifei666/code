//电影列表模块
define([
    'art',
    'jquery',
    'common',
    'text!filmList.html'
], function(art, $, sendRequired, filmListTemp) {

    function filmListView(url){
      
        // 获取数据
        sendRequired(url).then(resultData => {
            // console.log(resultData);
            let result = {
                items: resultData.data.films
            }
            //定义过滤器实现当有评分时显示评分，没有则不显示
            art.defaults.imports.myFilter = val => {
                if(val){
                    //有评分则显示评分
                    return `<span>观众评分</span>&nbsp;<span>${val}</span>`;
                }else{
                    //没有则不显示
                    return "";
                }
            }
            // 数据填充
            let htmlData = art.render(filmListTemp,result);

            //数据渲染
            $('#film-view-items').html(htmlData);
        })
        
    }
    //给外部提供接口
    return {
        filmListInit: filmListView
    }
  
});