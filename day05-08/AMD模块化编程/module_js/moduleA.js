// 定义模块js文件
define(['moduleA','moduleB'],
    (a,b) => { //回调函数中的参数为对应模块返回的的参数
        console.log('moduleB:'+b);
        return '我是moduleA模块提供的接口';
    }
);