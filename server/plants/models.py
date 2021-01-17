from django.db import models

# Create your models here.
class Plants(models.Model):
    id=models.TextField(primary_key=True)
    edibility=models.CharField(max_length=250)
    scientific_name=models.CharField(max_length=250)
    habitat=models.CharField(max_length=250)
    description=models.TextField()
    image_field=models.CharField(max_length=250)
    
    def __str__(self):
        return self.id