# Generated by Django 3.0 on 2021-06-30 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('these', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='these',
            name='title',
            field=models.CharField(max_length=200),
        ),
    ]
