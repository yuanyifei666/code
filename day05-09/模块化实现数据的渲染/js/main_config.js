// 主配置文件，集中配置和管理模块js文件
require.config({
    baseUrl: './js',
    paths: {
        jquery: 'jquery3.4.0', //引入jquery文件的模块名称一定是jquery
        loadData: '../module_js/load_data',
        art: 'artTemplate',
        text: 'text',
        domReady: 'domReady'
    }
});
// 调用模块tempate
require(['jquery','loadData','art','text!../template/itemTemplate.html','domReady'],(jq,resultData,art,htmlTemplate,domReady) => {

    
    let result = {
        items: resultData.data.films
    }
    console.log(result);
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
    let htmlData = art.render(htmlTemplate,result);

    //文档成功加载后执行
    domReady(function(){
        //数据渲染
        document.getElementById('item_content').innerHTML = htmlData;
    })

});