from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models
from backend import settings


class BaseModel(models.Model):
    class Meta:
        abstract = True

    def before_insert(self):
        pass

    def after_insert(self):
        pass

    def before_update(self):
        pass

    def after_update(self):
        pass

    def before_save(self, is_new):
        if is_new:
            self.before_insert()
        else:
            self.before_update()

    def after_save(self, is_new):
        if is_new:
            self.after_insert()
        else:
            self.after_update()

    def save(self, **kwargs):
        is_new = self.pk is None

        self.before_save(is_new)

        super(BaseModel, self).save(**kwargs)

        self.after_save(is_new)


class TrackedModel(BaseModel):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Profile(TrackedModel):
    user = models.OneToOneField(User)

    def __unicode__(self):
        return self.user.__unicode__()

class Edeka(models.Model):
    sku = models.CharField(max_length=20)
    brand = models.CharField(max_length=100)
    weight = models.CharField(max_length=100)
    description = models.CharField(max_length=5000)
    manufacture = models.CharField(max_length=500, blank=True, null=True)
    ingredient = models.CharField(max_length=10000, blank=True, null=True)
    allergens = models.CharField(max_length=10000, blank=True, null=True)
    additives = models.CharField(max_length=10000, blank=True, null=True)
    nutrients = models.CharField(max_length=10000, blank=True, null=True)
    productName = models.CharField(max_length=100, null=True)
    image_path = models.CharField(max_length=500, null=True)
    item_base = models.CharField(max_length=100, null=True)

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.sku

# MODE = (
#     (1, 'Category'),
#     (2, 'Products')
# )

STATUS = (
    (0, 'Finished'),
    (1, 'Running'),
    (2, 'Sleeping'),
    (3, 'Stopped'),      # ready for export
)

class ScrapyTask(models.Model):
    mode = models.IntegerField(null=True)
    status = models.IntegerField(null=True)
    pid = models.IntegerField(null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return '%s' % self.status

    def update():
        super(ScrapyTask, self).save1()

    def save1(self, *args, **kwargs):
        if self.pk is None:
            self.status = 1

            super(ScrapyTask, self).save(*args, **kwargs)

    def run_scraper(self):
        path = settings.NEW_BASE_DIR + '/edeka/celery_crawler.py'
        subprocess.Popen(["python", 
                          path])