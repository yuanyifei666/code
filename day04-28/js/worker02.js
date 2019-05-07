//信息监听
self.onmessage = function(ev){
	
	var num = ev.data;
	
	count();
	//使用定期实现计数的效果
	function count(){
//		console.log(num);
		//返回给客户端
		self.postMessage(num ++);
		
		setTimeout(count,500);
	}
	
}
