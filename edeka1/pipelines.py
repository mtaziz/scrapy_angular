# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html
import sys
import sys
import MySQLdb
import hashlib
from scrapy.exceptions import DropItem
from scrapy.http import Request

class EdekaPipeline(object):
	def __init__(self):
		self.conn = MySQLdb.connect(host='127.0.0.1', user='root', passwd='1234', db='scrapy', charset="utf8", use_unicode=True)
		self.cursor = self.conn.cursor()

	def process_item(self, item, spider):
		print "()-------------------"
		count = 1
		for i in item:
			print count
			count += 1
			print "%%%%%%%%%%%%%%%%%%%: : ", i
			# try:
			# 	self.cursor.execute("""INSERT INTO edeka (brand, weight, manufacture, ingredients, allergens, additives) 
			# 		VALUES (%s, %s, %s, %s, %s, %s)""", i['brand'], i['weight'], i['manufacture'], i['ingredients'], i['allergens'], i['additives']);

			# 	self.conn.commit()
			# except MySQLdb.Error, e:
			# 	print "Error %d: %s" % (e.args[0], e.args[1])

		print "()-------------------"
		# return item
