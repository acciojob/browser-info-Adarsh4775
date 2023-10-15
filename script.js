//your JS code here. If required.
const browserName = navigator.appName;
		const version = navigator.appVersion;

		let message = "You are using " + browserName + " version " + version;

		let extractDiv = document.getElementById("browser-info");
		extractDiv.textContent = message;