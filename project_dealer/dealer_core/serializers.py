from rest_framework import serializers
from django.contrib.auth import get_user_model

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = [
            "username", "password", "rut", "first_name",
            "last_name", "email", "celular", 
            "direccion", "genero", "rol"
        ]
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop("password")
        User = get_user_model()
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user
