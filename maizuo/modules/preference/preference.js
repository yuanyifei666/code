//特惠页面模块
define(['art','jquery','text!preference.html'],(art ,$, oTemp) => {

    function preferenceFn(){
        //获取数据
        let page = {name: '特惠'}
        //填充数据
        let html = art.render(oTemp,page);

        console.log(html);
        //数据的渲染
        $('#content-view').html(html);
    }

    // 返回渲染页面的接口
    return {
        initView: preferenceFn
    }
    

});