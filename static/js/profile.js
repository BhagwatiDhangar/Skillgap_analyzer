window.onload = function () {

    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");
    const education = localStorage.getItem("education");
    const college = localStorage.getItem("college");
    const dreamJob = localStorage.getItem("dreamJob");
    const skillLevel = localStorage.getItem("skillLevel");
    const skills = localStorage.getItem("skills");


    if (name) {
        document.getElementById("name").value = name;

        document.getElementById("displayName").textContent = name;

        document.getElementById("avatar").textContent =
            name.charAt(0).toUpperCase();
    }


    if (email) {
        document.getElementById("email").value = email;

        document.getElementById("displayEmail").textContent = email;
    }


    if (education) {
        document.getElementById("education").value = education;
    }


    if (college) {
        document.getElementById("college").value = college;
    }


    if (dreamJob) {
        document.getElementById("dreamJob").value = dreamJob;

        document.getElementById("displayJob").textContent =
            dreamJob;
    }


    if (skillLevel) {
        document.getElementById("skillLevel").value = skillLevel;
    }


    if (skills) {
        document.getElementById("skillInput").value = skills;
    }

};


function saveProfile() {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const education =
        document.getElementById("education").value.trim();

    const college =
        document.getElementById("college").value.trim();

    const dreamJob =
        document.getElementById("dreamJob").value;

    const skillLevel =
        document.getElementById("skillLevel").value;

    const skills =
        document.getElementById("skillInput").value.trim();


    if (
        name === "" ||
        email === "" ||
        education === "" ||
        college === ""
    ) {

        alert("Please fill all personal details.");

        return;
    }


    localStorage.setItem(
        "userName",
        name
    );

    localStorage.setItem(
        "userEmail",
        email
    );

    localStorage.setItem(
        "education",
        education
    );

    localStorage.setItem(
        "college",
        college
    );

    localStorage.setItem(
        "dreamJob",
        dreamJob
    );

    localStorage.setItem(
        "skillLevel",
        skillLevel
    );

    localStorage.setItem(
        "skills",
        skills
    );


    document.getElementById(
        "displayName"
    ).textContent = name;


    document.getElementById(
        "displayEmail"
    ).textContent = email;


    document.getElementById(
        "displayJob"
    ).textContent =
        dreamJob || "Dream Career not selected";


    document.getElementById(
        "avatar"
    ).textContent =
        name.charAt(0).toUpperCase();


    alert("Profile saved successfully!");

}


function goDashboard() {

    window.location.href =
        "/dashboard/";

}