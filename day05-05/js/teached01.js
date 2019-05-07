//导入其他模块提供的接口
//import {username, age, say} from './student01.js';
import {userId as username, userAge as age, userTall as tall} from  './student02.js';
//全部引入该模块中提供的接口
//import * as user from './student01.js';

//默认导出
//import {default as tall,username } from './student03.js';
//import {student} from './student04.js';

//console.log(user)
//console.log(user.username);
//user.say('hah11')
//使用外部模块提供的接口
//console.log(username,age);
//say('teached01');
//console.log(username)
//tall('王五');
//console.log(tall)

//let stu = new student('zh',12);
//
//console.log(stu.name)
//stu.call('haha')

let user = 'lik'

export default {
	user
}