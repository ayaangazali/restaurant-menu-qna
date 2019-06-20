// chatbot stuff

function sendMsg() {
	var text = document.getElementById("userinput").value;
	if (text == "") {
		return;
	}
	addUser(text);
	document.getElementById("userinput").value = "";

	addBot("Thanks for your message!");
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
