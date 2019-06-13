// chatbot stuff

function sendMsg() {
}

function addUser(t) {
	var div = document.createElement("div");
	div.className = "usermsg";
	div.innerHTML = t;
	document.getElementById("chatmsgs").appendChild(div);
}

function addBot(t) {
	var div = document.createElement("div");
	div.className = "botmsg";
	div.innerHTML = t;
	document.getElementById("chatmsgs").appendChild(div);
}
