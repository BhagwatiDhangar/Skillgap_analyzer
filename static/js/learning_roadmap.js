document.addEventListener("DOMContentLoaded", function () {

    /* Dream Job se selected career read karo */

    let dreamJob = localStorage.getItem("dreamJob");

    if (!dreamJob) {
        dreamJob = "Python Developer";
    }


    /* ================= CAREER DATA ================= */

    const roadmaps = {

        "Python Developer": {
            icon: "🐍",
            description: "Complete these learning steps to become a job-ready Python Developer.",
            steps: [
                {
                    title: "Python Fundamentals",
                    description: "Learn variables, data types, conditions, loops, functions and basic Python programming.",
                    tags: ["Variables", "Loops", "Functions", "Lists"],
                    status: "completed"
                },
                {
                    title: "Advanced Python",
                    description: "Improve your Python skills with OOP, modules, file handling and error handling.",
                    tags: ["OOP", "File Handling", "Modules", "Exceptions"],
                    status: "progress"
                },
                {
                    title: "Web Development",
                    description: "Learn how Python is used to build web applications using Flask or Django.",
                    tags: ["Flask", "Django", "APIs", "HTML"],
                    status: "upcoming"
                },
                {
                    title: "Database & MySQL",
                    description: "Learn database concepts, SQL queries and connecting Python applications with MySQL.",
                    tags: ["MySQL", "SQL", "CRUD", "Database"],
                    status: "upcoming"
                },
                {
                    title: "Projects & Job Preparation",
                    description: "Build projects, use GitHub and prepare for Python Developer interviews.",
                    tags: ["Projects", "GitHub", "Resume", "Interview"],
                    status: "upcoming"
                }
            ]
        },


        "Data Analyst": {
            icon: "📊",
            description: "Build the skills needed to become a job-ready Data Analyst.",
            steps: [
                {
                    title: "Excel Fundamentals",
                    description: "Learn spreadsheets, formulas, sorting, filtering, charts and basic data cleaning.",
                    tags: ["Excel", "Formulas", "Charts", "Cleaning"],
                    status: "completed"
                },
                {
                    title: "SQL & MySQL",
                    description: "Learn queries, filtering, joins, grouping and working with databases.",
                    tags: ["SQL", "MySQL", "Joins", "Queries"],
                    status: "progress"
                },
                {
                    title: "Python & Pandas",
                    description: "Use Python and Pandas to clean, analyse and work with datasets.",
                    tags: ["Python", "Pandas", "NumPy", "Data Cleaning"],
                    status: "upcoming"
                },
                {
                    title: "Power BI & Visualization",
                    description: "Create interactive dashboards and communicate insights using data visualization.",
                    tags: ["Power BI", "Charts", "Dashboard", "DAX"],
                    status: "upcoming"
                },
                {
                    title: "Projects & Interview Preparation",
                    description: "Build analytics projects and prepare for Data Analyst interviews.",
                    tags: ["Projects", "Portfolio", "Resume", "Interview"],
                    status: "upcoming"
                }
            ]
        },


        "Web Developer": {
            icon: "🌐",
            description: "Follow this roadmap to become a job-ready Web Developer.",
            steps: [
                {
                    title: "HTML & CSS",
                    description: "Learn webpage structure, styling, layouts, forms and responsive design.",
                    tags: ["HTML", "CSS", "Flexbox", "Grid"],
                    status: "completed"
                },
                {
                    title: "JavaScript",
                    description: "Learn variables, functions, DOM manipulation, events and modern JavaScript.",
                    tags: ["JavaScript", "DOM", "Events", "Functions"],
                    status: "progress"
                },
                {
                    title: "Responsive Web Development",
                    description: "Build websites that work properly on desktop, tablet and mobile devices.",
                    tags: ["Responsive", "UI", "Layouts", "Forms"],
                    status: "upcoming"
                },
                {
                    title: "Projects & GitHub",
                    description: "Build real web projects and upload your work to GitHub.",
                    tags: ["Projects", "Git", "GitHub", "Portfolio"],
                    status: "upcoming"
                },
                {
                    title: "Interview Preparation",
                    description: "Prepare HTML, CSS, JavaScript and project-based interview questions.",
                    tags: ["Interview", "Resume", "Portfolio", "Practice"],
                    status: "upcoming"
                }
            ]
        },


        "Software Developer": {
            icon: "💻",
            description: "Build strong programming and software development skills.",
            steps: [
                {
                    title: "Programming Fundamentals",
                    description: "Strengthen variables, loops, functions, arrays and problem solving.",
                    tags: ["Programming", "Logic", "Functions", "Loops"],
                    status: "completed"
                },
                {
                    title: "OOP & DSA",
                    description: "Learn object-oriented programming and important data structures and algorithms.",
                    tags: ["OOP", "DSA", "Arrays", "Algorithms"],
                    status: "progress"
                },
                {
                    title: "Database & APIs",
                    description: "Learn databases, SQL, APIs and how applications communicate with services.",
                    tags: ["SQL", "MySQL", "APIs", "Backend"],
                    status: "upcoming"
                },
                {
                    title: "Software Projects",
                    description: "Build practical projects and manage your code using Git and GitHub.",
                    tags: ["Projects", "Git", "GitHub", "Testing"],
                    status: "upcoming"
                },
                {
                    title: "Interview Preparation",
                    description: "Prepare coding, technical and project-based interview questions.",
                    tags: ["Coding", "Interview", "Resume", "Practice"],
                    status: "upcoming"
                }
            ]
        },


        "Data Scientist": {
            icon: "🧠",
            description: "Follow this roadmap to build a foundation for Data Science.",
            steps: [
                {
                    title: "Python for Data Science",
                    description: "Learn Python, NumPy and Pandas for working with data.",
                    tags: ["Python", "NumPy", "Pandas", "Data"],
                    status: "completed"
                },
                {
                    title: "Statistics & Data Analysis",
                    description: "Learn important statistics and methods used to understand datasets.",
                    tags: ["Statistics", "Analysis", "Probability", "Data"],
                    status: "progress"
                },
                {
                    title: "Data Visualization",
                    description: "Create meaningful charts and visual stories from datasets.",
                    tags: ["Matplotlib", "Charts", "Visualization", "Insights"],
                    status: "upcoming"
                },
                {
                    title: "Machine Learning",
                    description: "Learn basic machine learning concepts and model building.",
                    tags: ["ML", "Models", "Features", "Evaluation"],
                    status: "upcoming"
                },
                {
                    title: "Projects & Interview Preparation",
                    description: "Build projects and prepare for Data Science interviews.",
                    tags: ["Projects", "Portfolio", "Resume", "Interview"],
                    status: "upcoming"
                }
            ]
        },


        "UI/UX Designer": {
            icon: "🎨",
            description: "Build practical UI/UX design skills and create a strong portfolio.",
            steps: [
                {
                    title: "UX Fundamentals",
                    description: "Understand users, research, usability and the design process.",
                    tags: ["UX", "Research", "Users", "Usability"],
                    status: "completed"
                },
                {
                    title: "Wireframing",
                    description: "Create simple layouts and plan the structure of digital products.",
                    tags: ["Wireframe", "Layout", "Structure", "Flow"],
                    status: "progress"
                },
                {
                    title: "Figma & UI Design",
                    description: "Learn Figma, typography, colors, components and visual design.",
                    tags: ["Figma", "UI", "Colors", "Components"],
                    status: "upcoming"
                },
                {
                    title: "Prototyping",
                    description: "Create interactive prototypes and test user flows.",
                    tags: ["Prototype", "Interaction", "User Flow", "Testing"],
                    status: "upcoming"
                },
                {
                    title: "Portfolio & Interview",
                    description: "Build case studies and prepare your UI/UX portfolio for jobs.",
                    tags: ["Portfolio", "Case Study", "Resume", "Interview"],
                    status: "upcoming"
                }
            ]
        }

    };


    /* ================= GET SELECTED ROADMAP ================= */

    const roadmap = roadmaps[dreamJob] || roadmaps["Python Developer"];


    /* ================= HEADER ================= */

    document.getElementById("careerIcon").textContent =
        roadmap.icon;

    document.getElementById("careerTitle").textContent =
        dreamJob;

    document.getElementById("careerDescription").textContent =
        roadmap.description;


    /* ================= PROGRESS ================= */

    const completedSteps =
        roadmap.steps.filter(step => step.status === "completed").length;

    const progress =
        Math.round((completedSteps / roadmap.steps.length) * 100);

    document.getElementById("overallProgress").textContent =
        progress + "%";


    /* ================= BUILD STEPS ================= */

    const container =
        document.getElementById("roadmapContainer");

    container.innerHTML = "";


    roadmap.steps.forEach(function (step, index) {

        const item = document.createElement("div");

        item.className = "roadmap-item " + step.status;


        let statusText = "Upcoming";
        let statusClass = "upcoming";

        if (step.status === "completed") {
            statusText = "Completed";
            statusClass = "completed";
        }

        if (step.status === "progress") {
            statusText = "In Progress";
            statusClass = "progress";
        }


        let buttonHTML = "";

        if (step.status === "completed") {

            buttonHTML =
                `<button class="step-btn"
                    onclick="completeStep(${index})">
                    ✓ Completed
                </button>`;

        } else {

            buttonHTML =
                `<button class="step-btn"
                    onclick="startStep(${index})">
                    Start Learning
                </button>`;
        }


        item.innerHTML = `

            <div class="step-circle">
                ${step.status === "completed" ? "✓" : index + 1}
            </div>

            <div class="step-content">

                <div class="step-top">

                    <div>

                        <div class="step-label">
                            STEP ${String(index + 1).padStart(2, "0")}
                        </div>

                        <h3>
                            ${step.title}
                        </h3>

                    </div>

                    <span class="status ${statusClass}">
                        ${statusText}
                    </span>

                </div>

                <p>
                    ${step.description}
                </p>

                <div class="tags">

                    ${step.tags.map(function(tag) {
                        return `<span class="tag">${tag}</span>`;
                    }).join("")}

                </div>

                ${buttonHTML}

            </div>
        `;


        container.appendChild(item);

    });


    /* Save currently displayed career */

    localStorage.setItem("roadmapCareer", dreamJob);

});


/* ================= BUTTONS ================= */

function startStep(index) {

    alert(
        "Step " + (index + 1) +
        " started!\n\nKeep learning and complete this topic."
    );

}


function completeStep(index) {

    alert(
        "Step " + (index + 1) +
        " is already completed."
    );

}