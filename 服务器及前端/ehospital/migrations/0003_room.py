# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-07-17 06:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ehospital', '0002_user_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='room',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('roomnumber', models.CharField(max_length=10, verbose_name='房间号码')),
                ('state', models.IntegerField(default=0, verbose_name='房间状态')),
            ],
            options={
                'verbose_name_plural': '房间',
                'verbose_name': '房间',
            },
        ),
    ]
