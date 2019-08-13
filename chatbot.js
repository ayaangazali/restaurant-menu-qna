// chatbot stuff

var rules = [
	{keywords:["hours","open","close","timing","time","when"], reply:"We are open Mon-Wed 11am-9pm, Thu 11am-10pm, Fri 11am-11pm, Sat 10am-11pm and Sun 10am-8pm."},
	{keywords:["location","address","where","directions","find"], reply:"We are located at 142 Maple Street, Riverton, OH 45011. See you soon!"},
	{keywords:["menu","food","dishes","eat","serve"], reply:"You can see our full menu on the Menu page. We have starters, mains, desserts and drinks!"},
	{keywords:["contact","phone","call","number","email"], reply:"You can reach us at (555) 482-1190 or email hello@thecopperspoon.com."},
	{keywords:["reservation","reserve","book","booking","table"], reply:"Sure! To book a table just give us a call at (555) 482-1190 and we will set you up."}
];

function sendMsg() {
	var text = document.getElementById("userinput").value;
	if (text == "") {
		return;
	}
	addUser(text);
	document.getElementById("userinput").value = "";

	var lc = text.toLowerCase();
	var found = false;
	for (var i = 0; i < rules.length; i++) {
		for (var j = 0; j < rules[i].keywords.length; j++) {
			if (lc.indexOf(rules[i].keywords[j]) != -1) {
				addBot(rules[i].reply);
				found = true;
				break;
			}
		}
		if (found) {
			break;
		}
	}

	if (!found) {
		addBot("Thanks for your message!");
	}
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
