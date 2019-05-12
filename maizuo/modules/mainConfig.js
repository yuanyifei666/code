// 项目的公共模块集中主配置文件
require.config({
    baseUrl: './lib',
    paths: {
        art: 'artTemplate',
        domReady: 'domReady',
        text: 'text',
        jquery: 'jquery3.4.0',
        index: '../modules/index',
        common: '../modules/commons/common'
    }
});
// 请求其他模块
require(['art','domReady','jquery','text','index'],(art,domReady,$,tempHtml,index) => {
   


});