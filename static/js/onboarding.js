document.getElementById("onboardingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const dreamJob = document.getElementById("dreamJob").value;
    const skills = document.getElementById("skills").value.trim();
    const level = document.getElementById("level").value;

    if (name === "" || dreamJob === "" || skills === "" || level === "") {
        alert("Please complete all the fields.");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("dreamJob", dreamJob);
    localStorage.setItem("skills", skills);
    localStorage.setItem("skillLevel", level);

    window.location.href = "/dashboard/";
});