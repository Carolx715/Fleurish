from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

app_name = 'plants'

urlpatterns = [
    path('plants',
         views.PlantsView.as_view()),
    path('plants/<pk>',
         views.PlantsView.as_view())
]