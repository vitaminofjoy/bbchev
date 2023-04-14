from django.urls import path

from sections.views import CategoryFullAPIList
from sections.views.category.views_category import CategorySearchAPI

urlpatterns = [
    path('category/', CategoryFullAPIList.as_view()),
    path('category/search/', CategorySearchAPI.as_view())
]
