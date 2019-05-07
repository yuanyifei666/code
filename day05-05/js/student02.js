//使用对象的方式提供多个接口
let username = '李四';
let age = 22;

function tall(val){
	console.log(val + '调用了student02中的方法');
}

//使用对象的方式给外部模块体动多个接口
export  {username as userId, age as userAge, tall as userTall}
