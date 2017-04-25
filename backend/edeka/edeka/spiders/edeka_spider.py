# -*- coding: utf-8 -*-
import scrapy
import unicodedata
import requests
import json
import os
import django
# import request
# import settings

from os import sys, path
from scrapy.selector import Selector

sys.path.append(path.dirname(path.dirname(path.dirname(path.dirname(path.abspath(__file__))))))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from api.models import *
from scrapy import signals
from scrapy import Spider
import hashlib
import urllib

from bs4 import BeautifulSoup
from selenium import webdriver
import selenium
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
import re
from pyvirtualdisplay import Display

class EdekaSpider(scrapy.Spider):
	name = "edeka"
	allowed_domains = ["edekanord-shop.de"]
	start_urls = ['http://edekanord-shop.de/']
	domain = 'http://edekanord-shop.de'
	
	sku_domain = 'http://checkoutserviceenvironment.wswvg3payj.eu-central-1.elasticbeanstalk.com/productdescriptions'
	sku = []

	root = path.dirname(path.dirname(path.dirname(path.dirname(path.dirname(path.abspath(__file__))))))

	# display = Display(visible=0, size=(800, 600))
	# display.start()
	# driver = webdriver.Chrome("/home/work/scrapy/sel/chromedriver")

	def to_bytes(text, encoding=None, errors='strict'):
		"""Return the binary representation of `text`. If `text`
		is already a bytes object, return it as-is."""
		if isinstance(text, bytes):
			return text
		if not isinstance(text, six.string_types):
			raise TypeError('to_bytes must receive a unicode, str or bytes '
							'object, got %s' % type(text).__name__)
		if encoding is None:
			encoding = 'utf-8'
		return text.encode(encoding, errors)

	@classmethod
	def from_crawler(cls, crawler, *args, **kwargs):
		spider = super(EdekaSpider, cls).from_crawler(crawler, *args, **kwargs)
		crawler.signals.connect(spider.spider_closed, signal=signals.spider_closed)
		return spider

	def spider_closed(self, spider):
		print "@@@%%%%@@@%%%%"
		data = ScrapyTask.objects.get(mode=1)
		data.status = 0

		data.save()

	def parse(self, response):
		request_sku = requests.get(self.sku_domain).json() 

		for item in request_sku:
			self.sku.append(item['id'][5:])
			print "############################"
			print item['id'][5:]

			product_thumb_url = self.domain + '/boecker/products?query=' + item['id'][5:]
			request = scrapy.Request(product_thumb_url, callback=self.parse_shop, meta={'sku': item['id'][5:]})
			
		# product_thumb_url = self.domain + '/boecker/products?query=4008577000801'
		# request = scrapy.Request(product_thumb_url, callback=self.parse_shop, meta={'sku': '4008577000801'})
		
			yield request
			
		self.stop_scrapy()

	def parse_shop(self, response):
		
		# body_result = response.xpath("//body").extract()
		
		# f = open('response.html', 'w')
		# f.write(body_result[0].encode('utf-8'))
		# f.close()
		sku = response.meta.get('sku')
		print "~~~~~~~~~~ Parse_shop ~~~~~~~~~~~~~~~~"

		body_content = response.xpath("//body")

		product_detail_url = body_content.xpath(".//div[contains(@class, 'product-list')]//a[contains(@class, 'img-holder')]/@href").extract()

		# print "$$$$$$$$$$$$$$$$###########: product_detail_url :#############$$$$$$$$$$$$"
		# print product_detail_url
		try:
			request = scrapy.Request(self.domain + product_detail_url[0], callback=self.parse_product_detail, meta={'sku': sku})
			yield request
		except Exception:
			pass

	def parse_product_detail(self, response):
		sku = response.meta.get('sku')
		detail_result = response.xpath("//body")

		# f = open('detail_esponse.html', 'w')
		# f.write(detail_result[0].encode('utf-8'))
		# f.close()
		print "@@@@@@@@@@@@@@ Parse_detail @@@@@@@@@@@@@"

		# item details
		itemData = {}

		# base unit / weight
		item_base = detail_result.xpath(".//div[contains(@class, 'product-desc')]//div[contains(@class, 'base-price')]//text()")
		itemData['item_base'] = item_base.extract()[0].strip().encode('utf-8').split(":")[1]
		print "^^^^^^^^^^^^^^^^ unit ^^^^^^^^^^^^^^^^^"
		print itemData['item_base'] 

		item_details_content = detail_result.xpath(".//div[contains(@id, 'artikelDetails')]//div//table//tbody//tr")
		itemDetailData = []
		
		for i in item_details_content:
			itemDetailData.append( i.xpath(".//td[2]") )

		description = ""

		for i in itemDetailData[0].xpath(".//p//text()").extract():
			description += i.strip().encode('utf-8')

		brand = itemDetailData[1].xpath(".//text()").extract()[0].encode('utf-8')
		weight = itemDetailData[2].xpath(".//text()").extract()[0].encode('utf-8').translate(None, " \n\t\r")
		
		try:
			manufacture = itemDetailData[5].xpath(".//text()").extract()[0].encode('utf-8').translate(None, "\n\t\r")
		except Exception, e:
			manufacture = ''

		# image getting
		image_content = detail_result.xpath(".//div[contains(@id, 'slider')]//img/@src")
		print "$$$$$$$$$$$$ DEtail $$$$$$$$$$$$$$444"
		image_src =  image_content.extract()[0].encode('utf-8')

		product_name = detail_result.xpath(".//div[contains(@class, 'product-desc')]//h1/text()")
		print "~~~~~~~~~~~~~~~ NAME:"
		productName = product_name.extract()[0].encode('utf-8')
		
		# image_guid = hashlib.sha1(self.to_bytes(image_src)).hexdigest()
		# try:
			# image_path = '/image/%s.png' % (sku)
			# image_path = self.root + image_path

			# if not os.path.exists(path.dirname(image_path)):
			# 	os.makedirs(path.dirname(image_path))

			# # fullfilename = os.path.join(self.root, image_path)
			# print "---------- ", self.root, "------------"
			# # print fullfilename
			# print image_path
			# image_path = hashlib.sha1(self.to_bytes(image_path)).hexdigest()

		real_src = self.domain + image_src
		itemData['image_path'] = real_src
		request = scrapy.Request(real_src, callback=self.request_image, meta={'sku':sku})
		yield request

			# res = request.get(real_src)
			# print res
			# print res.body
			# urllib.urlretrieve(real_src, image_path)
		
		# except Exception, e:
		# 	print repr(e)

		itemData['brand'] = brand
		itemData['weight'] = weight
		itemData['manufacture'] = manufacture
		itemData['description'] = description
		itemData['productName'] = productName

		# ingredients and allergens:// div#id: inhaltstoffe
		try:
			ingredient_details_content = detail_result.xpath(".//div[contains(@id, 'inhaltstoffe')]//div")

			ingredient = ingredient_details_content.xpath(".//p[1]//text()").extract()[0].encode('utf-8')[9:]
			allergens = ingredient_details_content.xpath(".//p[3]//text()").extract()[0].encode('utf-8').translate(None, "\n\t\r")[12:]
			additives = ingredient_details_content.xpath(".//p[5]//text()").extract()[0].encode('utf-8').translate(None, "\n\t\r")[15:]

			itemData['ingredient'] = ingredient
			itemData['allergens'] = allergens
			itemData['additives'] = additives
		except Exception:
			itemData['ingredient'] = ''
			itemData['allergems'] = ''
			itemData['additives'] = ''

		# nutrients:// div#id: naehrstoffe
		# try:
		nutrients_details_content = detail_result.xpath(".//div[contains(@id, 'naehrstoffe')]//div//div//div//table//tbody")
		nutrients = []

		print "***************"

		for item in nutrients_details_content.xpath(".//tr"):
			nutrientsItem = {}
			# print item.extract()
			nutrientsItem['name'] = item.xpath(".//td[1]//text()").extract()[0].encode('utf-8').translate(None, " \n\t\r")
			nutrientsItem['perUnit'] = item.xpath(".//td[2]//text()").extract()[0].encode('utf-8').translate(None, " \n\t\r")
			# nutrientsItem['perPortion'] = item.xpath(".//td[3]//text()").extract()[0].encode('utf-8').translate(None, " \n\t\r")
			nutrients.append(nutrientsItem)
				# print "********************"
		# except Exception:
		# 	nutrientsItem['name'] = ""
		# 	nutrientsItem['perUnit'] = ""
		# 	nutrientsItem['perPortion'] = ""

		itemData['nutrients'] = json.dumps(nutrients)
		itemData['sku'] = sku

		# varPercent
		request = scrapy.Request('https://www.edekanord-shop.de/rest/basket?storeId=boecker', callback=self.get_varpercent)
		yield request

		# save scraped data into database
		Edeka.objects.update_or_create(sku=sku, defaults=itemData)

		yield itemData

	def get_varpercent(self, response):
		print "%%%%%%%%%% Varpercent %%%%%%%%%%%"
		print response.body

	def request_image(self, response):
		image_path = self.root + '/frontend/src/client/assets/product_images/' + '/image/%s.png' % (response.meta.get('sku'))
		
		if not os.path.exists(path.dirname(image_path)):
			os.makedirs(path.dirname(image_path))
	
		f = open(image_path, 'wb')
		f.write(response.body)
		f.close()