from django.db import models
from datetime import datetime

# Create your models here.

class Sucursal(models.Model):
    nombre = models.CharField(max_length=50,verbose_name='Nombre: ')

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = 'Sucursal'
        verbose_name_plural = 'Sucursales'
        db_table = 'sucursal'
        ordering = ['id']

class Departamento(models.Model):
    nombre = models.CharField(max_length=150, verbose_name='Nombre: ')

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = 'Departamento'
        verbose_name_plural = 'Departamentos'
        db_table = 'departamento'
        ordering = ['id']

class Cargo(models.Model):
    nombre = models.CharField(max_length=150, verbose_name='Nombre: ')

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = 'Cargo'
        verbose_name_plural = 'Cargos'
        db_table = 'cargo'
        ordering = ['id']

class Empleado(models.Model):
    sucursal = models.ForeignKey(Sucursal, on_delete=models.CASCADE)
    departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE)
    cargo = models.ForeignKey(Cargo, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=150, verbose_name='Nombres')
    identificacion = models.CharField(max_length=10, unique=True, verbose_name='Identificación')
    fecha_registro = models.DateField(default=datetime.now, verbose_name='Fecha de registro')
    fecha_creacion = models.DateTimeField(auto_now=True)
    date_actualizacion = models.DateTimeField(auto_now_add=True)
    edad = models.PositiveIntegerField(default=0)
    salario = models.DecimalField(default=0.00, max_digits=9, decimal_places=2)
    estado = models.BooleanField(default=True)
    genero = models.CharField(max_length=50)
    imagen = models.ImageField(upload_to='imagen/%Y/%m/%d', null=True, blank=True)
    cvitae = models.FileField(upload_to='cvitae/%Y/%m/%d', null=True, blank=True)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = 'Empleado'
        verbose_name_plural = 'Empleados'
        db_table = 'empleado'
        ordering = ['identificacion']
