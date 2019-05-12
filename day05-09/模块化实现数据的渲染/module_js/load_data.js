// 加载数据的模块
define(['jquery'], function($) {
    let resultData = null;
    //加载数据
    $.ajax({
        url: 'https://www.easy-mock.com/mock/5cb69688611c6a301b7fb462/yuan/maizuo',
        type: 'get',
        dataType: 'json',
        async: false, //同步请求
        success: data => {
            resultData = data;
        }
    })
   
    return resultData;
    

});