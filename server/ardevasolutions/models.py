from mongoengine import Document, fields
# from django.db import models

# Create your models here.
class Solution(Document):
    name = fields.StringField(required=True)
    technologies = fields.ListField(fields.ReferenceField('technology'))

