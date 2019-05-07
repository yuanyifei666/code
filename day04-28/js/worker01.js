//监听信息的改变
self.onmessage = function(ev){
	console.log(ev);
	//得到提交的数据
	var data = ev.data;
	
	console.log('接受到新信息-->'+data);
}
