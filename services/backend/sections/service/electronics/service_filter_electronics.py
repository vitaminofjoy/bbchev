import django_filters
from sections.models import (
    ElectronicsFull, ElectronicsFullViewsUser, ElectronicsFullFavouritesUser
)


class FilterElectronics(django_filters.FilterSet):
    price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name='price', lookup_expr='gt')
    price__lt = django_filters.NumberFilter(field_name='price', lookup_expr='lt')
    sub_category_en = django_filters.CharFilter()
    sub_category_ru = django_filters.CharFilter()
    sub_category_tr = django_filters.CharFilter()
    currency = django_filters.CharFilter()

    class Meta:
        model = ElectronicsFull
        fields = ['price', 'sub_category_en', 'sub_category_ru', 'sub_category_tr', 'currency']


class FilterElectronicsViews(django_filters.FilterSet):
    electronics_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = ElectronicsFullViewsUser
        fields = ['electronics_full', 'user']


class FilterElectronicsFavourites(django_filters.FilterSet):
    electronics_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = ElectronicsFullFavouritesUser
        fields = ['electronics_full', 'user']
