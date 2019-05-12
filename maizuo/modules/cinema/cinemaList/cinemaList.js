// 影院列表的数据
define([
    'art',
    'jquery',
    'common',
    'text!cinemaList.html'
], function(art, $, sendRequired, cinemaListTemp) {
   let dinweiSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAA1CAMAAAD1YwKXAAABblBMVEX////s7O7NztHFx8r+/v7AwsbHycy+wMS/wcXCxMje3+H5+frt7e/09PXT1df39/fV1tnz8/T8/Pz6+vv9/f3j5ObGyMv7+/vO0NPBw8ff4OLLzdDBwsbz9PT6+vro6er39/jY2dz29vf4+Pnx8vPs7e7n6OnGyMzJy87P0dTt7u/l5uji4+Xh4uTGx8vExsrNz9L09fXMztHR0tXHyMzT1NfIys3y8/TX2Nvd3uDCw8f4+fnq6+zu7/Dn6Orl5uf6+/vDxMj9/v77+/zX2Nrn5+ns7O3Iys7m5+nx8fLi4+TDxcj19vbk5efS09bKzM/AwcXv7/DQ0tTp6evb3N7c3d/3+PjZ2tzt7e7Dxcnb3N/U1tjQ0tXFx8vR09by8vPj5OXX2dv4+Pj5+fn19fbU1djY2dvS1NbJys7ExcnMzdH5+vrg4ePw8fLLzND+///7/PzP0NPr7O3a293W19rQ0dTk5ebW2Nr8/f3R09WCbK1KAAACgklEQVRIx52UV1vbQBREx7bks7LBNBeMDab3DoGEhJBACr0kpPfee//3eZCFZZDsfJmn3auR9s7s6Ep+tJV+fbnq5OPTqfEZheHT+qyhgsnDvkDaYJxjsHu6T7DORgHsa5mD7dZ098b1S1MAduYYbfkNENtp9ZU+7AK8yvlpJQPFifSxl/vbgSFfl8s2ZBcDek4YWGjzdjMOvO0KFDeQh4LXzR5k34WYNWDgibscg3ynV29MRGN2LJpo9ApjYDYkqXUKJsrFptSReammcu0FfJSkCZhcdUsNjs9lp8EtPi3CdUmzsF6mGTDNkaSVjDQbMGViAnalPrBdQU0OxFvKp7XEwXGP7gN7TT9hzn2UgnhbJTpxSLnLWbis77DjKgXT4nOkxYCrehN69AMOvDaaq6xrhoQkaRTmNAzbkqQoRKp4EYi69wV7ugiujBgkq3hJiEmSPsOWimBJkmxv4cEC21sUlYULdb7XBlkVoLdOf71Q0Jz3OFzvFfijb9BRx78OONRXuFbnPkYgotZ99nM177fLYP+WpmGlZl4y0O4G9qpq5M8agvOSVqfgXI08D0LWkqT38NoK/T/Sk+BOhZwD46HT6QzEygNgBZa6Q2j9ptKVojASTEsvwKmjXacJO/kSOM8q2w6wHwXQLgMlf6Ed4msnaItFuFU9Ju/Aw+O0riwUqrOrK3i5qeS5HS52B/hkBqoqPWBGT/Z8H5xe3z4DPA7QlpuH4cqAbjBwOtCrzrzP0+cOTFvB5pcqWi7EYagr7M5vgIl4UpcaQ7OhkbKWl94LIcjNw3BaGWBTtdCZh3ujoVIrOA/YELXq8NQD8CBZjyarAHa/6uPmFoP6F9y+q//HXzl1QJFrg6y6AAAAAElFTkSuQmCC'
    // 影院列表数据的渲染
    function cinemaListInitFn(districtId='000000', type = '0'){
        //获取数据
        let url = '';
        if(type == '0'){//请求普通数据
            url = 'https://www.easy-mock.com/mock/5cb69688611c6a301b7fb462/yuan/maizuo/cinemas';
        }else{//请求前台兑换的数据
            url = 'https://www.easy-mock.com/mock/5cb69688611c6a301b7fb462/yuan/maizuo/dinpiao';
        }
        sendRequired(url).then(data => {
            //成功回调
            // console.log(data);
            // 定义影院价格过滤器
            art.defaults.imports.lowPriceFilter = price => {
                if(type == '0'){
                    if(price){ 
                        return `￥${price/100} 起`;
                    }
                }else{//显示定位图片
                    return `<img src="${dinweiSrc}"/>`;
                }
               
            }
            //定义距离的过滤器
            art.defaults.imports.distanceFilter = val => {
                return '距离未知';
            }
            // 前台兑换数据格式的过滤器
            art.defaults.imports.ticketFilter = tickets => {
                var resultArr = new Array();
                for(var i = 0;i < tickets.length;i++){
                    resultArr.push(tickets[i].name);
                }
                return resultArr.join(' | ');
            }
            
            //定义数据的格式
            let tempData = {
                districtId: districtId,
                cinemas: data.data.cinemas
            }
            //填充数据
            let html = art.render(cinemaListTemp, tempData);

            //渲染数据
            $('#cinema-list').html(html);

        });

    }

    return {
        cinemaListInitView: cinemaListInitFn
    }
});