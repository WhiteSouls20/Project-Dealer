from django.contrib import admin
from .models import Usuario, Comision, LiderVentas, EjecutivoVentas, Venta

@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('rut', 'username', 'email', 'rol', 'celular')
    search_fields = ('rut', 'username', 'email', 'rol')
    ordering = ('rut',)

@admin.register(Comision)
class ComisionAdmin(admin.ModelAdmin):
    list_display = ('porc_com_1', 'porc_com_2', 'porc_com_3', 'porc_com_4')

@admin.register(LiderVentas)
class LiderVentasAdmin(admin.ModelAdmin):
    list_display = ('nombre_rol', 'capa_lider', 'venta_total_lid', 'usuario')
    search_fields = ('nombre_rol',)
    list_filter = ('capa_lider',)

@admin.register(EjecutivoVentas)
class EjecutivoVentasAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'nombre_rol', 'capa_ejecutivo', 'monto_total', 'venta_total', 'id_lid_ventas')
    search_fields = ('usuario__rut', 'nombre_rol')
    list_filter = ('capa_ejecutivo',)

@admin.register(Venta)
class VentaAdmin(admin.ModelAdmin):
    list_display = ('monto', 'fecha', 'id_ej_ventas', 'id_lid_ventas', 'id_comision')
    list_filter = ('fecha',)
    search_fields = ('id_ej_ventas__usuario__rut',)
