const careerCards = document.querySelectorAll(".career-card");

const selectedText = document.getElementById("selectedText");

const searchInput = document.getElementById("searchJob");

const noResult = document.getElementById("noResult");

let selectedJob = "";


// ================= SELECT CAREER =================

careerCards.forEach(function (card) {

    card.addEventListener("click", function () {

        careerCards.forEach(function (item) {
            item.classList.remove("selected");
        });

        this.classList.add("selected");

        selectedJob = this.dataset.job;

        selectedText.textContent = selectedJob;

        selectedText.style.background = "#f0ebff";
        selectedText.style.color = "#5b35d5";

    });

});


// ================= SEARCH CAREER =================

searchInput.addEventListener("input", function () {

    const searchValue = this.value.toLowerCase().trim();

    let visibleCards = 0;

    careerCards.forEach(function (card) {

        const searchData = card.dataset.search.toLowerCase();

        const jobName = card.dataset.job.toLowerCase();

        if (
            searchData.includes(searchValue) ||
            jobName.includes(searchValue)
        ) {

            card.style.display = "flex";

            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleCards === 0) {

        noResult.style.display = "block";

    } else {

        noResult.style.display = "none";

    }

});


// ================= CONTINUE =================

function continueToAssessment() {

    if (!selectedJob) {

        alert("Please select your dream job first.");

        return;
    }


    // Save selected dream job

    localStorage.setItem("dreamJob", selectedJob);


    // Go to skill assessment

    window.location.href = "/skillgap/?job=" + encodeURIComponent(selectedJob);
}