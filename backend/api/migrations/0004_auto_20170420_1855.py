# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2017-04-20 18:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_scrapytask_pid'),
    ]

    operations = [
        migrations.AddField(
            model_name='edeka',
            name='image_path',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='edeka',
            name='productName',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
