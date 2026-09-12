from django.shortcuts import render
from empleados.models import Empleado

def mi_primera_vista(request):
    dato={'nombre':'Jose',
          'profesión':'Instructor',
          'jornada':'Virtual'}
    return render(request, 'index.html', dato)

