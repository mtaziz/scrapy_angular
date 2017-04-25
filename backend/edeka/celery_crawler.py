import sys

from scrapy.utils.project import get_project_settings
from scrapy.crawler import CrawlerProcess
from edeka.spiders.edeka_spider import EdekaSpider

def scrape_module():
    crawler = CrawlerProcess(get_project_settings())
    crawler.crawl(EdekaSpider)
    crawler.start()

if __name__ == '__main__':
    scrape_module()