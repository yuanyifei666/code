// 定义模块js文件
define([
    'moduleA',
    'moduleB'
], (a, b) => {
    console.log('paramA:'+a);
    return '我是moduleB模块提供的接口';
});