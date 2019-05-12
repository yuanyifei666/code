//发送请求获取数据的模块
define([
    'jquery'
], function($) {
    //通过ajax请求获取数据
    function sendRequired(url, method="get", dataType='json'){
        let p = new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                type: method,
                dataType: dataType,
                async: true,
                success: data => {
                    //成功回调
                    resolve(data);
                },
                error: errorObj => {
                    //失败回调
                    reject(errorObj);
                }
            });
        });
        
        return p;
    }

    return sendRequired;
    
});