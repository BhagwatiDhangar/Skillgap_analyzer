import json

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
from django.http import JsonResponse

from .models import UserProfile, QuizResult, SkillAssessment


# Career names and required skills
CAREER_SKILLS = {
    "Python Developer": [
        "Python", "Git & GitHub", "MySQL"
    ],
    "Data Analyst": [
        "Python", "MySQL", "Excel", "Power BI"
    ],
    "Web Developer": [
        "HTML & CSS", "JavaScript", "Git & GitHub"
    ],
    "Software Developer": [
        "Python", "MySQL", "Git & GitHub"
    ],
    "Data Scientist": [
        "Python", "MySQL", "Statistics", "Machine Learning"
    ],
    "UI/UX Designer": [
        "Figma", "UI Design", "UX Research"
    ],
}

LEVEL_PERCENTAGES = {
    "Beginner": 25,
    "Intermediate": 60,
    "Advanced": 100,
}


def get_career_name(value):
    """Match the selected career with a supported career name."""
    value = (value or "").strip()

    for career in CAREER_SKILLS:
        if value.casefold() == career.casefold():
            return career

    return ""


def get_selected_career(request):
    """Read career from URL or session and save the valid selection."""
    requested_job = request.GET.get("job", "").strip()

    if requested_job:
        job = get_career_name(requested_job)

        if job:
            request.session["dream_job"] = job
            request.session.modified = True
            return job

    saved_job = get_career_name(
        request.session.get("dream_job", "")
    )

    if saved_job:
        request.session["dream_job"] = saved_job
        return saved_job

    return ""


def index(request):
    return render(request, "index.html")


def register(request):
    if request.method == "POST":
        name = request.POST.get("name", "").strip()
        email = request.POST.get("email", "").strip().lower()
        password = request.POST.get("password", "")

        if not name or not email or not password:
            return render(request, "register.html", {
                "error": "Please fill all fields."
            })

        if User.objects.filter(username=email).exists():
            return render(request, "register.html", {
                "error": "This email is already registered."
            })

        user = User.objects.create_user(
            username=email,
            email=email,
            password=password,
            first_name=name
        )

        UserProfile.objects.update_or_create(
            email=email,
            defaults={
                "name": name,
                "password": user.password,
            }
        )

        return redirect("/login/")

    return render(request, "register.html")


def login(request):
    if request.method == "POST":
        email = request.POST.get("email", "").strip().lower()
        password = request.POST.get("password", "")

        user = authenticate(
            request,
            username=email,
            password=password
        )

        if user is not None:
            auth_login(request, user)
            return redirect("/dashboard/")

        return render(request, "login.html", {
            "error": "Invalid email or password."
        })

    return render(request, "login.html")


@login_required(login_url="/login/")
def dashboard(request):
    quiz_results = QuizResult.objects.filter(
        user=request.user
    ).order_by("-created_at")

    skill_assessments = SkillAssessment.objects.filter(
        user=request.user
    ).order_by("skill_name")

    # Skill gap: beginner-level skills
    skill_gaps = skill_assessments.filter(level="Beginner").count()

    # Career progress: average of assessed skill levels
    level_scores = {
        "Beginner": 25,
        "Intermediate": 60,
        "Advanced": 90,
    }

    if skill_assessments.exists():
        total_progress = sum(
            level_scores.get(skill.level, 0)
            for skill in skill_assessments
        )
        career_progress = round(
            total_progress / skill_assessments.count()
        )
    else:
        career_progress = 0

    return render(request, "dashboard.html", {
        "quiz_results": quiz_results,
        "skill_assessments": skill_assessments,
        "dream_job": request.session.get("dream_job", ""),
        "skill_gaps": skill_gaps,
        "career_progress": career_progress,
    })


@login_required(login_url="/login/")
def profile(request):
    return render(request, "profile.html")


@login_required(login_url="/login/")
def skill_assesment(request):
    if request.method == "POST":
        skills = [
            "Python",
            "HTML & CSS",
            "JavaScript",
            "MySQL",
            "Git & GitHub",
        ]

        for skill in skills:
            level = request.POST.get(skill)

            if level in LEVEL_PERCENTAGES:
                SkillAssessment.objects.update_or_create(
                    user=request.user,
                    skill_name=skill,
                    defaults={"level": level},
                )

        return redirect("/dreamjob/")

    return render(request, "skill_assesment.html")


@login_required(login_url="/login/")
def dreamjob(request):
    # Support traditional form submissions too.
    if request.method == "POST":
        selected = (
            request.POST.get("dreamjob")
            or request.POST.get("career")
            or request.POST.get("selected_job")
            or request.POST.get("job")
            or ""
        )

        job = get_career_name(selected)

        if job:
            request.session["dream_job"] = job
            request.session.modified = True
            return redirect("/skillgap/")

    return render(request, "dreamjob.html", {
        "dream_job": request.session.get("dream_job", ""),
        "careers": list(CAREER_SKILLS.keys()),
    })


@login_required(login_url="/login/")
def skillgap(request):
    job_from_url = request.GET.get('job', '').strip()
    job_from_session = request.session.get('dream_job', '')
    job = job_from_url or job_from_session

    print("JOB FROM URL:", repr(job_from_url))
    print("JOB FROM SESSION:", repr(job_from_session))

    if job:
        request.session['dream_job'] = job
        request.session.modified = True    
    job = get_selected_career(request)

    skill_assessments = SkillAssessment.objects.filter(
        user=request.user
    ).order_by("skill_name")

    user_levels = {
        item.skill_name: item.level
        for item in skill_assessments
    }

    required_skills = CAREER_SKILLS.get(job, [])
    analysis = []

    for skill in required_skills:
        current_level = user_levels.get(skill, "Not Assessed")
        percentage = LEVEL_PERCENTAGES.get(current_level, 0)

        if current_level == "Not Assessed":
            gap = "Assessment needed"
        elif current_level == "Beginner":
            gap = "Needs improvement"
        elif current_level == "Intermediate":
            gap = "Develop further"
        else:
            gap = "Strong"

        analysis.append({
            "name": skill,
            "current_level": current_level,
            "percentage": percentage,
            "gap": gap,
        })

    # Average across all skills required for this career.
    # Not-assessed skills count as zero.
    match_percentage = (
        round(
            sum(item["percentage"] for item in analysis)
            / len(analysis)
        )
        if analysis else 0
    )

    return render(request, "skillgap.html", {
        "dream_job": job,
        "skill_assessments": skill_assessments,
        "required_skills": required_skills,
        "analysis": analysis,
        "match_percentage": match_percentage,
    })



@login_required(login_url='/login/')
def learning_roadmap(request):
    dream_job = request.session.get('dream_job', '')
    return render(request, 'learning_roadmap.html', {
        'dream_job': dream_job
    })
@login_required(login_url='/login/')
def quiz(request):
    dream_job = request.GET.get('job') or request.session.get('dream_job', '')
    if dream_job:
        request.session['dream_job'] = dream_job
        request.session.modified = True

    return render(request, 'quiz.html', {
        'dream_job': dream_job
    })


@login_required(login_url="/login/")
def settings(request):
    return render(request, "settings.html")


@login_required(login_url="/login/")
def onboarding(request):
    return render(request, "onboarding.html")


@login_required(login_url="/login/")
def resume_analysis(request):
    return render(request, "resume_analysis.html")


@login_required(login_url="/login/")
def user_logout(request):
    logout(request)
    return redirect("/login/")


@login_required(login_url="/login/")
@require_POST
def save_quiz_result(request):
    try:
        data = json.loads(request.body)

        submitted_career = str(
            data.get("career", "")
        ).strip()

        career = get_career_name(submitted_career)

        score = int(data.get("score", -1))
        total = int(data.get("total_questions", 0))

        if (
            not career
            or total <= 0
            or not 0 <= score <= total
        ):
            return JsonResponse(
                {"error": "Invalid quiz result."},
                status=400
            )

        QuizResult.objects.create(
            user=request.user,
            career=career,
            score=score,
            total_questions=total,
        )

        return JsonResponse({
            "message": "Quiz result saved."
        })

    except (ValueError, TypeError, json.JSONDecodeError):
        return JsonResponse(
            {"error": "Invalid request data."},
            status=400
        )