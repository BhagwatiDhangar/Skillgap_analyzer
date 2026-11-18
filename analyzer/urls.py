from django.urls import path
from .import views
urlpatterns=[
     path('',views.index,name='index'),
    path('register/',
         views.register,name='register'),
     path('login/',views.login,name='login'),
     path('dashboard/',views.dashboard,name='dashboard'),
     path('profile/',views.profile),
     path('quiz/',views.quiz),
     path('skillgap/',views.skillgap),
     path('dreamjob/',views.dreamjob),
     path('resume_analysis/',views.resume_analysis),
     path('settings/',views.settings),
     path('skill_assesment/',views.skill_assesment),
     path('learning_roadmap/',views.learning_roadmap),
     path('logout/',views.user_logout),
     path('save-quiz-result/',views.save_quiz_result),
        
]
