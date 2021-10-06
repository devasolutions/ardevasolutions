from typing_extensions import Required
from mongoengine import Document, fields, connect
from bson.objectid import ObjectId
# from django.db import models

# Create your models here.

connect(host="mongodb+srv://admin:N4n0$h1p2016@devasolutionsweb.zn3pl.mongodb.net/DevaSolutions?retryWrites=true&w=majority")

class Technology(Document):
    _id = fields.ObjectIdField(required=True, default=ObjectId, unique=True, primary_key=True)
    name = fields.StringField(required=True)
    developer = fields.StringField(required=True)
    version = fields.StringField(required=True, unique=True)
    link = fields.StringField(required=True)
    description = fields.StringField(required=True)

class Solution(Document):
    _id = fields.ObjectIdField(required=True,default=ObjectId, unique=True, primary_key=True)
    name = fields.StringField(required=True)
    technologies = fields.ListField(fields.ReferenceField(Technology))

class Costumer(Document):
    _id = fields.ObjectIdField(required=True, default=ObjectId, unique=True, primary_key=True)
    email = fields.StringField(required=True)
    solutions = fields.ListField(fields.ReferenceField(Solution))
    name = fields.StringField(required=True)

class Developer(Document):
    _id = fields.ObjectIdField(required=True, default=ObjectId, unique=True, primary_key=True)
    name = fields.DictField(required=True) # name = {first: "Nombre", last: "Apellido Paterno / Apellido Completo"}
    skills = fields.ListField(fields.StringField())
    email = fields.StringField(required=True)
    costumers = fields.ListField(fields.ReferenceField(Costumer))




