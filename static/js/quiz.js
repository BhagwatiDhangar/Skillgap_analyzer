const params = new URLSearchParams(window.location.search);

let dreamJob =
    params.get("job") ||
    localStorage.getItem("dreamJob") ||
    localStorage.getItem("dreamjob") ||
    "";

dreamJob = dreamJob.trim();


const questionBanks = {

    "Python Developer": [
        {
            question: "Which keyword is used to define a function in Python?",
            options: ["function", "def", "fun", "define"],
            answer: 1
        },
        {
            question: "Which data type is used to store multiple values in an ordered collection?",
            options: ["List", "Integer", "Boolean", "Float"],
            answer: 0
        },
        {
            question: "Which library is commonly used for data manipulation in Python?",
            options: ["Pandas", "React", "Bootstrap", "Node.js"],
            answer: 0
        },
        {
            question: "Which language is commonly used to query MySQL databases?",
            options: ["HTML", "SQL", "CSS", "XML"],
            answer: 1
        },
        {
            question: "Which tool is used for version control?",
            options: ["Git", "Figma", "Excel", "Chrome"],
            answer: 0
        }
    ],

    "Data Analyst": [
        {
            question: "Which Python library is widely used for data analysis?",
            options: ["Pandas", "React", "Django", "Tkinter"],
            answer: 0
        },
        {
            question: "Which language is mainly used to query databases?",
            options: ["HTML", "SQL", "CSS", "JavaScript"],
            answer: 1
        },
        {
            question: "Which tool is commonly used to create business dashboards?",
            options: ["Power BI", "Notepad", "Git", "PyAutoGUI"],
            answer: 0
        },
        {
            question: "Which chart is useful for showing trends over time?",
            options: ["Line Chart", "Pie Chart", "Icon", "Table only"],
            answer: 0
        },
        {
            question: "Which software is commonly used for spreadsheet analysis?",
            options: ["Excel", "Git", "Figma", "VS Code"],
            answer: 0
        }
    ],

    "Web Developer": [
        {
            question: "Which language is used to structure web pages?",
            options: ["HTML", "Python", "SQL", "Java"],
            answer: 0
        },
        {
            question: "Which language is mainly used for styling web pages?",
            options: ["CSS", "SQL", "Python", "Git"],
            answer: 0
        },
        {
            question: "Which language adds interactivity to web pages?",
            options: ["JavaScript", "HTML", "CSS", "SQL"],
            answer: 0
        },
        {
            question: "Which tool is commonly used for version control?",
            options: ["Git", "Excel", "Figma", "Chrome"],
            answer: 0
        },
        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: ["a", "p", "img", "div"],
            answer: 0
        }
    ],

    "Software Developer": [
        {
            question: "What is inheritance in programming?",
            options: [
                "Reusing properties and methods of another class",
                "Deleting a class",
                "Creating only variables",
                "Running a program"
            ],
            answer: 0
        },
        {
            question: "Which tool is commonly used for source code version control?",
            options: ["Git", "Excel", "Power BI", "Figma"],
            answer: 0
        },
        {
            question: "Which data structure follows FIFO?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            answer: 1
        },
        {
            question: "Which of these is a programming language?",
            options: ["Python", "HTML", "CSS", "Git"],
            answer: 0
        },
        {
            question: "What is debugging?",
            options: [
                "Finding and fixing errors",
                "Designing a logo",
                "Creating a database",
                "Writing documentation only"
            ],
            answer: 0
        }
    ],

    "Data Scientist": [
        {
            question: "Which Python library is mainly used for numerical computing?",
            options: ["NumPy", "HTML", "React", "Git"],
            answer: 0
        },
        {
            question: "Which library is commonly used for data manipulation?",
            options: ["Pandas", "Figma", "Bootstrap", "Django"],
            answer: 0
        },
        {
            question: "Which technique is used to visually represent data?",
            options: ["Data Visualization", "Compilation", "Inheritance", "Version Control"],
            answer: 0
        },
        {
            question: "Which field focuses on teaching computers to learn from data?",
            options: [
                "Machine Learning",
                "Web Design",
                "Database Management",
                "Networking"
            ],
            answer: 0
        },
        {
            question: "Which language is widely used in data science?",
            options: ["Python", "HTML", "CSS", "XML"],
            answer: 0
        }
    ],

    "UI/UX Designer": [
        {
            question: "What does UX mainly focus on?",
            options: [
                "User experience",
                "Database queries",
                "Server configuration",
                "Programming syntax"
            ],
            answer: 0
        },
        {
            question: "Which tool is commonly used for UI/UX design?",
            options: ["Figma", "MySQL", "Git", "Python"],
            answer: 0
        },
        {
            question: "What is a wireframe?",
            options: [
                "A basic layout of a design",
                "A database",
                "A programming language",
                "A server"
            ],
            answer: 0
        },
        {
            question: "What is usability?",
            options: [
                "How easy a product is to use",
                "How fast a database runs",
                "How much code is written",
                "How many files exist"
            ],
            answer: 0
        },
        {
            question: "Visual hierarchy helps users to:",
            options: [
                "Understand important content first",
                "Write Python code",
                "Create databases",
                "Manage Git branches"
            ],
            answer: 0
        }
    ]
};

if (!questionBanks[dreamJob]) {
    alert("Selected career not found: " + dreamJob);
    window.location.href = "/dreamjob/";
}


let questions = questionBanks[dreamJob] || questionBanks["Python Developer"];
console.log("Career:",dreamJob);
console.log("First question",questions[0].question);
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("quizTitle").textContent =
        dreamJob + " Skill Quiz";

    document.getElementById("careerBadge").textContent =
        "Target Career: " + dreamJob;

    loadQuestion();
});


function loadQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    document.getElementById("question").textContent =
        question.question;

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";

    selectedAnswer = null;

    question.options.forEach(function (option, index) {

        const button = document.createElement("div");

        button.className = "option";

        button.textContent = option;

        button.onclick = function () {

            document.querySelectorAll(".option").forEach(function (item) {
                item.classList.remove("selected");
            });

            button.classList.add("selected");

            selectedAnswer = index;
        };

        optionsContainer.appendChild(button);
    });

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

    

    if (currentQuestion === questions.length - 1) {
        document.getElementById("nextBtn").textContent =
            "Submit Quiz";
    } else {
        document.getElementById("nextBtn").textContent =
            "Next";
    }

   
}


function nextQuestion() {

    if (selectedAnswer === null) {
        alert("Please select an answer.");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    } else {

        showResult();
    }
}


function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();
    }
}


function showResult() {

    const percentage =
        Math.round((score / questions.length) * 100);

    document.getElementById("quiz").style.display = "none";

    document.getElementById("result").style.display = "block";

    document.getElementById("finalScore").textContent =
        percentage + "%";

    document.getElementById("resultMessage").textContent =
        "You scored " + score + " out of " +
        questions.length + " questions.";

    localStorage.setItem("quizScore", percentage);
    localStorage.setItem("quizCareer", dreamJob);
    console.log("Saving quiz result:",dreamJob,score,questions.length);
    fetch("/save-quiz-result/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken")
    },
    body: JSON.stringify({
        career: dreamJob,
        score: score,
        total_questions: questions.length
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error("Could not save quiz result");
    }
    return response.json();
})
.then(data => console.log(data.message))
.catch(error => console.error(error));
}


function retryQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("quiz").style.display = "block";

    document.getElementById("result").style.display = "none";

    loadQuestion();
}


function goDashboard() {

    window.location.href = "/dashboard/";
}
function getCookie(name) {
    let cookieValue = null;

    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");

        for (let cookie of cookies) {
            cookie = cookie.trim();

            if (cookie.startsWith(name + "=")) {
                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );
                break;
            }
        }
    }
   return cookieValue;
}