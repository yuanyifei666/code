//给其他模块提供一个类
class SuperStudent {
	constructor(id, name, age){
		this.id = id;
		this.name = name;
		this.age = age;
	}
	say(val){
		console.log(val + '执行SuperStudent中的say函数-----');
	}
}
export default class Student extends SuperStudent{
	constructor(...arg){
		//arg 是一个数组
		super(...arg)
		this.height = arg[3]
		console.log(arg);
	}
	tall(val){
		console.log(val + '调用Student中的方法---');
	}
}
