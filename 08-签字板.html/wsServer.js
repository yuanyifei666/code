var ws = require("nodejs-websocket");
var port=3001;
var user=0;

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
	console.log("New connection");
	user++;
	conn.nickname="user"+user;
	broadcast("tips："+conn.nickname+" comes in");
	conn.on("text", function (str) {
		var val = str.replace(/<[^>]+>|&[^>]+;/g,"").trim();
		if(val == ""){
			broadcast(conn.nickname+" say: ***");
		}else{
			console.log("Received "+val)
			broadcast("<span>"+conn.nickname+": </span><span>"+val+"</span>");
		}
	})
	conn.on("close", function (code, reason) {
		console.log("Connection closed");
		broadcast("tips："+conn.nickname+" left ");
	})
	conn.on("error", function (err) {
		console.log("handdle error");
		console.log(err);
	})
}).listen(port);
console.log("websocket server listening on port "+port);
function broadcast(str){
	server.connections.forEach(function(connection){
		connection.sendText(str);
	})
}