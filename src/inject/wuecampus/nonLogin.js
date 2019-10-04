chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			console.log("Will check if you're logged in");

			let loggedIn = true;
			const loginSpans = document.getElementsByClassName("login");
			if (loginSpans.length > 0) {
				for (let i = 0; i < loginSpans.length; i++) {
					if (loginSpans[i].innerText.includes('sind nicht angemeldet') ||
						loginSpans[i].innerText.includes('sind als Gast angemeldet')) {
						loggedIn = false;
					}
				}
			}

			if (!loggedIn) {
				console.log("You are not logged in will now login");
				window.location.href = 'https://wuecampus2.uni-wuerzburg.de/moodle/login/index.php';
			}

			chrome.storage.local.set({
				username: 'sXXXXX',
				password: 'Password',
			})

			function onGot(item) {
				console.log(item);
			}

			function onError(error) {
				console.log(`Error: ${error}`);
			}

			const getPromise = browser.storage.local.get('username');
			browser.then(onGot, onError);s

		}
	}, 10);
});