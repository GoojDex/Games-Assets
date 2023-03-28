function fixUrlCheck(url) {
	if (typeof url === 'string' || url instanceof String) {
		return true;
	} else {
		return false;
	}
}

function fixUrl(url) {
	url= url.replace("https://cdn.fbrq.io/@orange-games/splash/assets/spine/", "kizi/");
	url= url.replace("https://cdn.fbrq.io/@orange-games/splash/assets/images/", "kizi/");	
	url= url.replace("https://cdn.fbrq.io/@orange-games/splash/assets/json/", "json/null.json?");	
	console.log("fx--fixUrl--", url);
	return url;
}
