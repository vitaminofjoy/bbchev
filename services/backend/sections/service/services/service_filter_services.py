import django_filters
from sections.models import (
    ServicesFull, ServicesFullViewsUser, ServicesFullFavouritesUser
)


class FilterServices(django_filters.FilterSet):
    price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name='price', lookup_expr='gt')
    price__lt = django_filters.NumberFilter(field_name='price', lookup_expr='lt')
    sub_category_en = django_filters.CharFilter()
    sub_category_ru = django_filters.CharFilter()
    sub_category_tr = django_filters.CharFilter()
    currency = django_filters.CharFilter()

    class Meta:
        model = ServicesFull
        fields = ['price', 'sub_category_en', 'sub_category_ru', 'sub_category_tr', 'currency']


class FilterServicesViews(django_filters.FilterSet):
    services_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = ServicesFullViewsUser
        fields = ['services_full', 'user']


class FilterServicesFavourites(django_filters.FilterSet):
    services_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = ServicesFullFavouritesUser
        fields = ['services_full', 'user']
