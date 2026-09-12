from django.urls import path

from empleados.views import myfirstview,mysecondview

urlpatterns = [
    path('uno/', myfirstview, name='vista1'),
    path('dos/', mysecondview, name='vista2')
]

