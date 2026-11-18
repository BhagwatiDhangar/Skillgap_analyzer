window.onload = function () {

    const savedTheme =
        localStorage.getItem("theme");

    const reminder =
        localStorage.getItem("learningReminder");

    const progress =
        localStorage.getItem("progressUpdate");

    const privacy =
        localStorage.getItem("profilePrivacy");


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        document.getElementById("theme").value = "dark";
    }


    if (reminder === "false") {

        document.getElementById(
            "learningReminder"
        ).checked = false;
    }


    if (progress === "false") {

        document.getElementById(
            "progressUpdate"
        ).checked = false;
    }


    if (privacy === "false") {

        document.getElementById(
            "profilePrivacy"
        ).checked = false;
    }

};


document.getElementById("theme").addEventListener(
    "change",
    function () {

        if (this.value === "dark") {

            document.body.classList.add("dark");

        } else {

            document.body.classList.remove("dark");

        }

    }
);


function saveSettings() {

    const theme =
        document.getElementById("theme").value;

    const reminder =
        document.getElementById("learningReminder").checked;

    const progress =
        document.getElementById("progressUpdate").checked;

    const privacy =
        document.getElementById("profilePrivacy").checked;


    localStorage.setItem(
        "theme",
        theme
    );

    localStorage.setItem(
        "learningReminder",
        reminder
    );

    localStorage.setItem(
        "progressUpdate",
        progress
    );

    localStorage.setItem(
        "profilePrivacy",
        privacy
    );


    alert("Settings saved successfully!");

}


function logout() {

    const confirmLogout = confirm("Are you sure you want to log out?");

    if (confirmLogout) {

        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("dreamJob");
        localStorage.removeItem("skills");
        localStorage.removeItem("skillLevel");

        alert("Logged out successfully!");

        window.location.href = "/login/";
    }
}
function goDashboard() {

    window.location.href =
        "/dashboard/";

}