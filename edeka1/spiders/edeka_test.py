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

from os import sys, path

class EdekaTest:
	domain = 'http://edekanord-shop.de/'

	def __init__(self):
		self.domain = 'http://edekanord-shop.de/boecker'
		print "$$$$$$$$$$$$$$$$$"
		parse_body()

	def parse_body(self, auto=False):
		if auto == False:
			# prepare for webdriver
			display = Display(visible=0, size=(800, 600))
			display.start()
			driver = webdriver.Chrome("/home/scrapy/chromedriver")

		pageContent = BeautifulSoup(driver.page_source, "lxml")

		print "**********************************"
		print pageContent
		print "**********************************"



