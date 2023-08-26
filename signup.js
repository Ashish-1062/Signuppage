// signup.js
document.addEventListener("DOMContentLoaded", function () {
	const signupForm = document.getElementById("signup-form");
	const signupMessage = document.getElementById("signup-message");

	signupForm.addEventListener("submit", function (event) {
		event.preventDefault();

		const fullname = document.getElementById("fullname").value;
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		const confirmPassword = document.getElementById("confirm-password").value;

		if (password !== confirmPassword) {
			displayErrorMessage("Passwords do not match");
			return;
		}

		// Generate a random access token (simplified for example)
		const accessToken = Math.random().toString(36).substr(2, 16);

		// Save user state to local storage
		const userState = {
			fullname,
			email,
			accessToken,
		};
		localStorage.setItem("userState", JSON.stringify(userState));

		// Display success message and redirect to profile page
		displaySuccessMessage("Successfully Signed Up!");
		setTimeout(() => {
			window.location.href = "profile.html";
		}, 1000);
	});

	function displaySuccessMessage(message) {
		signupMessage.textContent = message;
		signupMessage.style.color = "green";
	}

	function displayErrorMessage(message) {
		signupMessage.textContent = "Error: " + message;
		signupMessage.style.color = "red";
	}
});
