# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2017-04-19 18:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_scrapytask'),
    ]

    operations = [
        migrations.AddField(
            model_name='scrapytask',
            name='pid',
            field=models.IntegerField(null=True),
        ),
    ]
