document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    alert("Login successful!");

    window.location.href = "/dashboard/";
 });


function goToRegister() {
    window.location.href = "/register/";
}


function goToHome() {
    window.location.href = "/";
}


function forgotPassword(event) {

    event.preventDefault();

    alert("Password reset feature will be available soon.");
}