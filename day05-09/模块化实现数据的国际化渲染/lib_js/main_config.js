//模块化的统一管理配置文件
require.config({
    baseUrl: './lib_js',
    paths: { //配置引入的模块js文件
        text: 'text',
        domReady: 'domReady',
        data: '../data_js/maizuo',
        art: 'artTemplate',
        i18n: 'i18n'
    }
});
// 请求js模块
require(['text!../template/itemTemplate.html','domReady','data','art','i18n'],(htmlTemp,domReady,data,art,i18n) => {
    //页面加载完成后执行
    domReady(() => {
        //请求数据
        console.log(data);
         
        let result = {
            items: data.data.films
        }

        //定义过滤器
        art.defaults.imports.myFilter = val => {
            if(val){
                //有评分则显示评分
                return `<span>观众评分</span>&nbsp;<span>${val}</span>`;
            }else{
                //没有则不显示
                return "";
            }
        }
        //数据的填充
        let resultHtml = art.render(htmlTemp,result);

        //数据的渲染
        document.querySelector('#item_content').innerHTML = resultHtml;

        //国际化处理
        document.getElementById('lang').onchange = function(){
            //得到选择的语言
            console.log(this.value);
            //根据选择的语言请请求相应的语言数据
            requir(['i18n!'])

        }

    });



})