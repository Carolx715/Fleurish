# Generated by Django 3.0 on 2021-01-17 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plants',
            fields=[
                ('id', models.TextField(primary_key=True, serialize=False)),
                ('edibility', models.CharField(max_length=50)),
                ('scientific_name', models.CharField(max_length=50)),
                ('habitat', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('image_name', models.CharField(max_length=50)),
            ],
        ),
    ]
