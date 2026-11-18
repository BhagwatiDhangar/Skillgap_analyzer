function registerUser() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill all the fields.");
        return;
    }

    alert("Registration successful!");

    window.location.href = "/login/";
}

function loginPage() {
    window.location.href = "/login/";
}

function goToHome() {
    window.location.href = "/index/";
}