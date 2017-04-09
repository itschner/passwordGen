var pbGenPassword = document.getElementById("pbGenPassword");
var safePsw = document.getElementById("safePsw");
var easyPsw = document.getElementById("easyPsw");
var siteTkn = document.getElementById("siteToken");
easyPsw.focus();
chrome.tabs.getSelected(null,function(tab){
	var url = new URL(tab.url)
	siteTkn.value = url.hostname
	//This will become more sophisticated, taking into account not only user site, but
	//also incorporate something specific to user account when doing the hash like randomly
	//chosen digits in the MAC address from the computer used to sign up and/or the API key
	//Would require user create and login functionality
})

 pbGenPassword.onclick=generateStrongPW;
 function generateStrongPW(){
	 //Either insert API calls or write the algorithm in JS here
	 safePsw.value='clicked';
 }
