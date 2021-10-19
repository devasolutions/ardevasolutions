from database.interfaces.IDBManager import IDBManager
from  DBConnection import DBConnection
from pymongo import  errors,MongoClient
import os


class DBManager(IDBManager):

    def __init__(self):
        self.connection:MongoClient
        self.URL = os.getenv('MONGO_URL') | None
        self.PORT = os.getenv('LOCAL_MONGO_PORT') | None


    def set_connection(self):

        self.connection = DBConnection().get_connection(url=self.URL,port=self.PORT)

        if self.connection == None:
            raise errors.ConnectionFailure('Could not set a connection')
