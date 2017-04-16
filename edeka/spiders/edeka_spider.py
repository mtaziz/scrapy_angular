# -*- coding: utf-8 -*-
import scrapy
import unicodedata

import os, sys
from bs4 import BeautifulSoup
from selenium import webdriver
import selenium
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import urllib
import time

import datetime
from datetime import timedelta
from selenium.webdriver.support.ui import Select
import re
from pyvirtualdisplay import Display
import json
import csv
import hashlib


class EdekaSpiderSpider(scrapy.Spider):
	name = "edeka"
	allowed_domains = ["edekanord-shop.de"]
	start_urls = ['http://edekanord-shop.de/']
	domain = 'http://edekanord-shop.de/boecker'

	def parse(self, response):
		with open('response.html', 'w') as f:
			f.write("ab")
			f.close()
		request = scrapy.Request(self.domain, callback=self.parse_shop)
		return request

	def parse_shop(self, response, id):
		product_thumb_page = self.domain + 'products?query=3090291386041'

		body_result = response.xpath("//body").extract()
		print "%%%%%%%%%%%%%%%%%%% ", " : ", type(body_result[0]), "%%%%%%%%%%%%%%%%%%%"

		# result = body_result[0]
		# unicodedata.normalize('NFKD', result).encode('utf-8')

		f = open('response.html', 'w')
		f.write(body_result[0].encode('utf-8'))
		f.close()