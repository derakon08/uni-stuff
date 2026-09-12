from django.contrib import admin

from empleados.models import *

admin.site.register(Sucursal)
admin.site.register(Cargo)
admin.site.register(Departamento)
admin.site.register(Empleado)

