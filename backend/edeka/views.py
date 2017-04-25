from django.conf import settings
from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination
from backend import settings

from . import serializers, models
import subprocess
import os
import signal
from os import sys, path
import json
import psutil
from django.core.serializers.json import DjangoJSONEncoder

class AuthenticatedMixin(object):
	permission_classes = [permissions.IsAuthenticated]


class PaginatedMixin(object):
	class CustomPagination(LimitOffsetPagination):
		max_limit = settings.REST_FRAMEWORK['MAX_LIMIT']

	pagination_class = CustomPagination


class ProfileViewSet(AuthenticatedMixin, PaginatedMixin, viewsets.ModelViewSet):
	queryset = models.Profile.objects.all()
	serializer_class = serializers.ProfileSerializer

class DashboardView(APIView):
	def get(self, request):
		edekaData = models.Edeka.objects.all()
		scrapyStatusData = models.ScrapyTask.objects.get(mode=1)

		print "----- GET status ----------: ", scrapyStatusData.status
		if (scrapyStatusData.status == 1):
			return Response({ 'resultData' : json.dumps(list(edekaData.values()), cls=DjangoJSONEncoder), 'scrapyStatus' : 'running' })
		else:
			return Response({ 'resultData' : json.dumps(list(edekaData.values()), cls=DjangoJSONEncoder), 'scrapyStatus' : 'finished' })

	def post(self, request):
		path = settings.NEW_BASE_DIR + '/edeka/celery_crawler.py'

		process_id = None

		if (request.data['flagStart'] == 1):

			data = models.ScrapyTask.objects.get(mode=1)

			if (data.status == 0):
				p = subprocess.Popen(["python",
						  path])

				data.pid = p.pid
				data.status = 1
				print "----- POST status ----------: ", data.status
				data.save()
			print "----- POST2 status ----------: ", data.status
			return Response({ 'result': 'ok' })
		else:
			data = models.ScrapyTask.objects.get(mode=1)

			pid = 0
			if (data.status == 1):
				pid = data.pid
				data.status = 0
				data.save()
			print "----- Delete status ----------: ", data.status
			process = psutil.Process(pid)
			process.kill()

			return Response({ 'result': 'fail', 'pid': pid })
		return Response({ 'result': 'ok' });

	# def run_scraper(self):
	#     path = settings.BASE_DIR + '/costco_scraper/celery_crawler.py'
	#     subprocess.Popen(["python", 
	#                       path, 
	#                       str(self.pk)])
