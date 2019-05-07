//引入提供的接口
import {userName as username, userAge as age} from './modelA.js';
//引入一个模块中提供的所有接口
import * as resultObj from './testModule02.js';

//引入模块中的默认接口
import Student from './moduleDefault.js';

console.log(username ,age);

console.log(resultObj.width,resultObj.height);

let stu = new Student(12,'张三',22,170);

console.log(stu)
stu.say(stu.name);
stu.tall(stu.name);
console.log(`${stu.name}的身高为:${stu.height+10}`);


let user = {name:'haha'} ;
export default user;

