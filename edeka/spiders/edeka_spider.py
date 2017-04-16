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
	domain = 'http://edekanord-shop.de'

	def parse(self, response):
		product_thumb_url = self.domain + '/boecker/products?query=3090291386041'
		request = scrapy.Request(product_thumb_url, callback=self.parse_shop)
		return request

	def parse_shop(self, response, id=0):
		
		body_result = response.xpath("//body").extract()
		
		f = open('response.html', 'w')
		f.write(body_result[0].encode('utf-8'))
		f.close()

		body_content = response.xpath("//body")

		product_detail_url = body_content.xpath(".//div[contains(@class, 'product-list')]//a[contains(@class, 'img-holder')]/@href").extract()
		print "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
		print self.domain + product_detail_url[0]
		print "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"

		request = scrapy.Request(self.domain + product_detail_url[0], callback=self.parse_product_detail)
		yield request

	def parse_product_detail(self, response):
		detail_result = response.xpath("//body").extract()

		f = open('detail_esponse.html', 'w')
		f.write(detail_result[0].encode('utf-8'))
		f.close()


		print "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"
		print detail_content
		print "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"
		