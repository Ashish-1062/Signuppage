document.addEventListener("DOMContentLoaded", function () {
	const profileDetails = document.getElementById("profile-details");
	const logoutButton = document.getElementById("logoutButton");

	const logout = document.getElementById("logout");
	const userState = JSON.parse(localStorage.getItem("userState"));

	if (userState && userState.fullname && userState.email) {
		// Display profile details
		profileDetails.innerHTML = `
            <h1>Full Name: ${userState.fullname}</h1>
            <h1>Email: ${userState.email}</h1>
            <h1>Password: ******</h1>
        `;
	} else {
		// Redirect to signup page if user data is not available
		window.location.href = "index.html";
	}

	function performLogout() {
		// Clear user state from localStorage
		localStorage.removeItem("userState");

		// Redirect to signup page
		window.location.href = "index.html";
	}

	logoutButton.addEventListener("click", performLogout);
	logout.addEventListener("click", performLogout);
});
