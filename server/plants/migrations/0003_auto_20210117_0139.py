# Generated by Django 3.0 on 2021-01-17 01:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0002_auto_20210117_0136'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plants',
            name='edibility',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='plants',
            name='habitat',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='plants',
            name='image_field',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='plants',
            name='scientific_name',
            field=models.CharField(max_length=250),
        ),
    ]
