# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2017-04-22 16:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20170421_1713'),
    ]

    operations = [
        migrations.AddField(
            model_name='edeka',
            name='item_base',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
