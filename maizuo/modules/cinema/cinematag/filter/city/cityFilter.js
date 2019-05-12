// 城市过滤条件模块
define([
    'art',
    'jquery',
    'text!/code/maizuo/modules/cinema/cinematag/filter/city/cityFilter.html',
    'cinemaList'
], function(art, $, cityFilterTemp, cinemaListView) {
    // let dataUrl = 'https://www.easy-mock.com/mock/5cb69688611c6a301b7fb462/yuan/maizuo/cinemas';
      
    //根据城市来过滤影院数据
    function cityFilterFn(){
        //定义数据
        let cityData = [
            {districtId: '000000', cityName: '全城'},
            {districtId: '440304', cityName: '福田区'},
            {districtId: '440305', cityName: '南山区'},
            {districtId: '440307', cityName: '龙岗区'},
            {districtId: '440309', cityName: '龙华区'},
            {districtId: '440306', cityName: '宝安区'},
            {districtId: '440303', cityName: '罗湖区'},
            {districtId: '440308', cityName: '盐田区'},
            {districtId: '440310', cityName: '坪山区'}
        ]

        //填充数据
        let html = art.render(cityFilterTemp, cityData);
        //数据渲染
        $('#filter-wrap').html(html);
        //初始化样式
        let index = $('#cinema-tag-ul>li:first-child>span')[0].index;
        if(index){
            $('#filter-city-ul li').eq(index).addClass('active');
        }else{
            $('#filter-city-ul li').eq(0).addClass('active');
        }

        //给所有的城市绑定点击事件
        $('#filter-city-ul li').click(function(){
            //初始化样式
            $('#filter-city-ul li').each(function(i, el){
                el.className = '';
            });
            //激活样式
            this.className = 'active';
            $('#cinema-tag-ul>li:first-child>span').html(this.innerHTML);
            $('#cinema-tag-ul>li:first-child>span')[0].index = $(this).index();
            //得到对应城市的id
            let citydistrictid = this.dataset.districtid;
            $('#cinema-tag-ul>li:nth-of-type(1)')[0].dataset.districtid = citydistrictid;
            //得到数据的类型
            let cityType = $('#cinema-tag-ul>li:nth-of-type(2)')[0].dataset.urltype;
        
            //显示过滤后的影院
            cinemaListView.cinemaListInitView(citydistrictid,cityType)
            
        });

    }
    //提供接口
    return {
        cityFilterInitView: cityFilterFn
    }
});