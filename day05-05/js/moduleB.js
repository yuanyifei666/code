//引入moduleA.js文件
import username from './moduleA.js'

console.log('在moduleB中引入外部js文件的username:'+username.username);

export default {
	username
}
