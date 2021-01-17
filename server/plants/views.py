from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PlantsSerializer
from .models import Plants

class PlantsView(APIView):
    def get(self, request, format=None):
        try:
            plants = Plants.objects.all().order_by('id')
            serializer = PlantsSerializer(plants, many=True)
            return Response(serializer.data)
        except Plants.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)