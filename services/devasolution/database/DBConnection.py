from pymongo import MongoClient, errors



class DBConnection():
    
    def __init__(self) -> None:
        self.connections = []


    def get_connection(self, url=None, port=None) :

        try:
            if url == None:
                connection_url = port
            else:
                connection_url = url
                
            connection = MongoClient(connection_url)
            self.connections.append(connection)
            
            return connection

        except errors.ConnectionFailure as err:
            print(str(err))
            return None



