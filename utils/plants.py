import pandas as pd
from plants.models import Plants

df = pd.read_csv("data/plants.csv")

plants= [
    Plants(
        id = df.at[row, 'plant_name'],
        edibility=df.at[row, 'edibility'],
        scientific_name=df.at[row, 'scientific name'],
        habitat=df.at[row, 'habitat'],
        description=df.at[row, 'description'],
        image_field = df.at[row, 'image_name']
    ) for row in range(0, 69)
]
    
Plants.objects.bulk_create(plants)