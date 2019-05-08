// require的主配置文件,集中管理js模块的配置文件
require.config({
    baseUrl: './module_js', //配置js模块文件的存放目录
    paths: {                 //配置要集中管理的js模块文件
        'moduleA': './moduleA',
        'moduleB': './moduleB'
    }
   
});
require(['moduleA','moduleB'],function(a,b){ //回调函数中的参数为对应模块返回的的参数
    console.log(`moduleA${a}`);
    console.log(`moduleB${b}`);
});