# Generated by Django 3.0 on 2021-06-30 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('these', '0002_auto_20210630_1705'),
    ]

    operations = [
        migrations.AlterField(
            model_name='these',
            name='encadreur',
            field=models.CharField(max_length=40),
        ),
    ]
