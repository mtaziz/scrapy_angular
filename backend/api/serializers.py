from rest_framework import serializers

from . import models


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile

class DashboardSerializer(serializers.ModelSerializer):
    class Meta:
    	model = models.Edeka