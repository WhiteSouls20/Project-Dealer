from django.db import models
from django.contrib.auth.models import AbstractUser

# Usuario base extendido
class Usuario(AbstractUser):
    rut = models.CharField(max_length=20, unique=True)
    celular = models.CharField(max_length=15)
    direccion = models.CharField(max_length=100)
    foto_perfil = models.ImageField(upload_to='perfiles/', blank=True, null=True)
    archivo = models.FileField(upload_to='archivos/', blank=True, null=True)
    genero = models.CharField(max_length=20)
    rol = models.CharField(max_length=20)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return f"{self.username} ({self.rut})"
    
    pass


# Comisión
class Comision(models.Model):
    porc_com_1 = models.FloatField()
    porc_com_2 = models.FloatField()
    porc_com_3 = models.FloatField()
    porc_com_4 = models.FloatField()

    def __str__(self):
        return f"Comisión {self.id}"


# Líder de Ventas
class LiderVentas(models.Model):
    nombre_rol = models.CharField(max_length=50)
    capa_lider = models.IntegerField()
    venta_total_lid = models.IntegerField()
    venta_mensual_lid = models.IntegerField()
    venta_diaria_lid = models.IntegerField()
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre_rol} ({self.usuario.rut})"


# Ejecutivo de Ventas
class EjecutivoVentas(models.Model):
    nombre_rol = models.CharField(max_length=50)
    capa_ejecutivo = models.IntegerField()
    monto_total = models.FloatField()
    monto_mensual = models.FloatField()
    monto_diario = models.FloatField()
    venta_total = models.IntegerField()
    venta_mensual = models.IntegerField()
    venta_diaria = models.IntegerField()
    id_lid_ventas = models.ForeignKey(LiderVentas, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.usuario.rut} ({self.nombre_rol})"


# Venta
class Venta(models.Model):
    monto = models.IntegerField()
    fecha = models.DateField()
    id_ej_ventas = models.ForeignKey(EjecutivoVentas, on_delete=models.CASCADE)
    id_lid_ventas = models.ForeignKey(LiderVentas, on_delete=models.CASCADE)
    id_comision = models.ForeignKey(Comision, on_delete=models.CASCADE)

    def __str__(self):
        return f"Venta {self.id} - {self.fecha}"
