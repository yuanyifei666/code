//特惠页面模块
define(['art','jquery','text!preference.html'],(art ,$, oTemp) => {

    function preferenceFn(){
        //获取数据
        let preferenceData = [
            'https://image.watsons.com.cn//upload/19b50d68.jpg',
            'https://image.watsons.com.cn//upload/5823e432.jpg',
            'https://image.watsons.com.cn//upload/51d6eab5.jpg',
            'https://image.watsons.com.cn//upload/6127d10a.jpg']
        //填充数据
        let html = art.render(oTemp,preferenceData);

        // console.log(html);
        //数据的渲染
        $('#content-view').html(html);
    }

    // 返回渲染页面的接口
    return {
        initView: preferenceFn
    }
    

});