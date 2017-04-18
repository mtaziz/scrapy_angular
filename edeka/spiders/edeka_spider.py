# -*- coding: utf-8 -*-
import scrapy
import unicodedata

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
		
		# body_result = response.xpath("//body").extract()
		
		# f = open('response.html', 'w')
		# f.write(body_result[0].encode('utf-8'))
		# f.close()

		body_content = response.xpath("//body")

		product_detail_url = body_content.xpath(".//div[contains(@class, 'product-list')]//a[contains(@class, 'img-holder')]/@href").extract()
		print "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
		print self.domain + product_detail_url[0]
		print "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"

		request = scrapy.Request(self.domain + product_detail_url[0], callback=self.parse_product_detail)
		yield request

	def parse_product_detail(self, response):
		detail_result = response.xpath("//body")

		# f = open('detail_esponse.html', 'w')
		# f.write(detail_result[0].encode('utf-8'))
		# f.close()

		# item details
		itemData = {}
		item_details_content = detail_result.xpath(".//div[contains(@id, 'artikelDetails')]//div//table//tbody//tr")
		itemDetailData = []
		
		for i in item_details_content:
			itemDetailData.append( i.xpath(".//td[2]") )

		description = ""

		for i in itemDetailData[0].xpath(".//p//text()").extract():
			description += i.strip().encode('utf-8')

		brand = itemDetailData[1].xpath(".//text()").extract()[0].encode('utf-8')
		weight = itemDetailData[2].xpath(".//text()").extract()[0].encode('utf-8').translate(None, " \n\t\r")
		manufacture = itemDetailData[5].xpath(".//text()").extract()[0].encode('utf-8').translate(None, " \n\t\r")

		itemData['brand'] = brand
		itemData['weight'] = weight
		itemData['manufacture'] = manufacture

		# ingredients and allergens:// div#id: inhaltstoffe
		ingredient_details_content = detail_result.xpath(".//div[contains(@id, 'inhaltstoffe')]//div")

		ingredient = ingredient_details_content.xpath(".//p[1]//text()").extract()[0].encode('utf-8')[9:]
		allergens = ingredient_details_content.xpath(".//p[3]//text()").extract()[0].encode('utf-8').translate(None, " \n\t\r")[12:]
		additives = ingredient_details_content.xpath(".//p[5]//text()").extract()[0].encode('utf-8').translate(None, " \n\t\r")[15:]

		itemData['ingredient'] = ingredient
		itemData['allergens'] = allergens
		itemData['additives'] = additives

		# nutrients:// div#id: naehrstoffe
		nutrients_details_content = detail_result.xpath(".//div[contains(@id, 'naehrstoffe')]//div//div//div//table//tbody")
		nutrients = []

		print "***************"
		print nutrients_details_content
		for item in nutrients_details_content.xpath(".//tr"):
			nutrientsItem = {}
			nutrientsItem['name'] = item.xpath(".//td[1]//text()").extract()[0].encode('utf-8').translate(None, " \n\t\r")
			nutrientsItem['perUnit'] = item.xpath(".//td[2]//text()").extract()[0].encode('utf-8').translate(None, " \n\t\r")
			nutrientsItem['perPortion'] = item.xpath(".//td[3]//text()").extract()[0].encode('utf-8').translate(None, " \n\t\r")

			nutrients.append(nutrientsItem)
			print "********************"

		itemData['nutrients'] = nutrients

		return itemData


